import { api } from "../api";

const {
    useGetAllPermissionGroupsQuery,
    useGetPermissionGroupsDetailsByIdQuery,
    useLazyGetPermissionGroupsDetailsByIdQuery,
    useLazyGetAllPermissionGroupsQuery,
} = api;

export {
    useGetAllPermissionGroupsQuery,
    useGetPermissionGroupsDetailsByIdQuery,
    useLazyGetPermissionGroupsDetailsByIdQuery,
    useLazyGetAllPermissionGroupsQuery,
};
export * from "./usePermission";
