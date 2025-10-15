import type { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query/react";
import type {
    EndpointBuilder,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
//
import type {
    ICustomerResponse,
    IPaginationWithActive,
    Pagination,
    ResponseWithPagination,
} from "@/types/config.types";

import type { SerializedError } from "@reduxjs/toolkit";

export const customerEndpoints = (
    build: EndpointBuilder<
        BaseQueryFn<
            string | FetchArgs,
            unknown,
            FetchBaseQueryError | SerializedError
        >,
        string,
        "api"
    >
) => ({
    getAllCustomer: build.query<
        ResponseWithPagination<ICustomerResponse[]>,
        IPaginationWithActive
    >({
        query: ({
            isPaginationEnabled = true,
            page = 1,
            pageSize = 10,
            keyword,
            isActive,
        }) => ({
            url: "customers",
            method: "GET",
            params: {
                isPaginationEnabled,
                page,
                pageSize,
                keyword: keyword ? keyword : undefined,
                isActive,
            },
        }),
        providesTags: (result) =>
            result
                ? [
                      ...result.data.result.map((label) => ({
                          type: "Labels" as const,
                          id: label.id,
                      })),
                      { type: "Labels" as const, id: "LIST" },
                  ]
                : [{ type: "Labels" as const, id: "LIST" }],
    }),
});
