import { api } from "../api";

const {
    useGetAllRolesQuery,
    useGetRoleByIdQuery,
    useLazyGetAllRolesQuery,
    useLazyGetRoleByIdQuery,
    useUpdateRoleMutation,
    useCreateRolesMutation,
} = api;

export {
    useGetRoleByIdQuery,
    useUpdateRoleMutation,
    useLazyGetRoleByIdQuery,
    useGetAllRolesQuery,
    useCreateRolesMutation,
    useLazyGetAllRolesQuery,
};
export * from "./useRoles";
