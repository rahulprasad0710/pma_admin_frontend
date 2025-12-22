import type { IAuthEmployeeInfo } from "@/types/config.types";
import type { PayloadAction } from "@reduxjs/toolkit";
// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    accessToken: string | null;
    authenticateEmployee: IAuthEmployeeInfo | null;
    isAuthenticated: boolean;
};

const initialState: AuthState = {
    accessToken: null,
    authenticateEmployee: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setReduxAccessToken: (state, action: PayloadAction<string | null>) => {
            state.accessToken = action.payload;
        },
        clearReduxAuth: (state) => {
            state.accessToken = null;
        },
        setAuthenticateEmployeeDetailsData: (
            state,
            action: PayloadAction<IAuthEmployeeInfo | null>
        ) => {
            state.authenticateEmployee = action.payload;
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const {
    setReduxAccessToken,
    clearReduxAuth,
    setAuthenticateEmployeeDetailsData,
    setIsAuthenticated,
} = authSlice.actions;
export default authSlice.reducer;
