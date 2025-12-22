import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import type { IAuthEmployeeResponse, Response } from "../types/config.types";
import {
    clearReduxAuth,
    setAuthenticateEmployeeDetailsData,
    setReduxAccessToken,
} from "@/store/authSlice";

import type { RootState } from "@store/reduxHook";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const nodeEnv = import.meta.env.VITE_REACT_APP_NODE_ENV;
const serverUrl = import.meta.env.VITE_API_BASE_SERVER_URL;
const localUrl = "http://localhost:8000";

const baseServerUrl = nodeEnv === "development" ? localUrl : serverUrl;

// const baseServerUrl = "http://localhost:8000";
// const baseServerUrl = "http://3.109.201.51:8000";
// const baseServerUrl = "https://workcentrik.publicvm.com";

export interface ApiErrorResponse {
    success: boolean; // false in error cases
    data: null; // always null when error
    message: string; // user-facing error message
    type: string; // error type identifier
    devMessage?: string; // optional developer-friendly message
    info?: string; // stack trace or extra debug info
}

// 1. Normal baseQuery
const baseQuery = fetchBaseQuery({
    baseUrl: `${baseServerUrl}/api/`,
    prepareHeaders: async (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken;
        headers.set("authorization", `Bearer ${token}`);
        return headers;
    },
    credentials: "include",
});

// 2. BaseQuery with refresh-token handling
export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const errorData = result.error.data as ApiErrorResponse;

        if (errorData?.type === "EXPIRED_TOKEN_ERROR") {
            // Try refresh token API
            const refreshResult = await baseQuery(
                {
                    url: "/auth/refresh-token",
                    method: "POST",
                    credentials: "include",
                },
                api,
                extraOptions
            );

            api.dispatch(clearReduxAuth());

            const refreshResultResponse =
                refreshResult.data as Response<IAuthEmployeeResponse>;
            const { data } = refreshResultResponse;
            if (refreshResultResponse) {
                const { accessToken, ...rest } = data;
                api.dispatch(setReduxAccessToken(accessToken));

                api.dispatch(
                    setAuthenticateEmployeeDetailsData({
                        ...rest,
                    })
                );

                result = await baseQuery(args, api, extraOptions);
            } else {
                // Refresh failed → logout user
                api.dispatch(setReduxAccessToken(null));

                api.dispatch(setAuthenticateEmployeeDetailsData(null));
            }
        }
    }

    return result;
};

export default baseQueryWithReauth;
