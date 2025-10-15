import * as yup from "yup";

import type {
    IPermissionResponse,
    IRolePayload,
    IRoleResponse,
    IRoleUpdatePayload,
} from "@/types/config.types";
import { classForSelect, inputFieldClass } from "@/utils/style";
import {
    useCreateRolesMutation,
    useLazyGetRoleByIdQuery,
    useUpdateRoleMutation,
} from "@api/hooks/useRoles";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import ModalHeader from "@/components/atoms/ModalHeader";
import PermissionByRole from "@/components/roles/PermissionByRole";
import { Spinner } from "@/components/atoms/Spinner";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IPermissionResponseWithCheckbox extends IPermissionResponse {
    isChecked: boolean;
}

type Props = {
    selectedData: undefined | IRoleResponse;
    setSelectedData: (data: IRoleResponse | undefined) => void;
    handleCloseModal: () => void;
};

interface IFormInput {
    name: string;
    description: string;
    role_type: string;
}

const RoleModal = (props: Props) => {
    const { selectedData, handleCloseModal } = props;
    const [permissionListOfSelectedRole, setPermissionListOfSelectedRole] =
        useState<IPermissionResponseWithCheckbox[]>([]);
    const roleType = [
        {
            label: "Employee",
            value: "EMPLOYEE",
        },

        {
            label: "Company Manager",
            value: "COMPANY_MANAGER",
        },

        {
            label: "Service Manager",
            value: "SERVICE_MANAGER",
        },
        {
            label: "Admin",
            value: "ADMIN",
        },
        {
            label: "Super Admin",
            value: "SUPER_ADMIN",
        },
    ];

    const [createMutation] = useCreateRolesMutation();
    const [updateMutation] = useUpdateRoleMutation();

    const defaultValues: IFormInput = {
        name: "",
        description: "",
        role_type: "",
    };

    const [
        fetchDetailsById,
        { isFetching: isFetchingDetails, data: detailsData },
    ] = useLazyGetRoleByIdQuery();

    const schema = yup.object().shape({
        name: yup.string().required("Role name is required"),
        description: yup.string().required("Last name is required"),
        role_type: yup.string().required("Role is required"),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (selectedData?.id) {
            fetchDetailsById({
                roleId: selectedData?.id,
            });
        }
    }, [fetchDetailsById, selectedData]);

    useEffect(() => {
        if (detailsData?.success) {
            const payload = detailsData?.data;
            reset({
                name: payload.name,
                role_type: payload.role_type,
                description: payload.description,
            });

            const temp: IPermissionResponseWithCheckbox[] =
                payload.permissions.map((p) => {
                    return {
                        ...p,
                        isChecked: true,
                    };
                });

            setPermissionListOfSelectedRole(temp);
        }
    }, [detailsData?.data, detailsData?.success, reset]);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data);

        const payload: IRolePayload = {
            name: data.name,
            description: data.description,
            role_type: data.role_type,
            isActive: true,
            permissions: permissionListOfSelectedRole?.map((p) => p.id),
        };

        try {
            if (selectedData?.id) {
                const updatePayload: IRoleUpdatePayload = {
                    ...payload,
                    id: selectedData.id,
                };

                const response = await updateMutation(updatePayload).unwrap();
                if (response.success) {
                    toast.success("Role updated successfully");
                    handleCloseModal();
                }
            } else {
                const addPayload: IRolePayload = {
                    ...payload,
                };
                const response = await createMutation(addPayload).unwrap();
                if (response.success) {
                    toast.success("New role added successfully");
                    handleCloseModal();
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong!");
        }
    };

    return (
        <div className='relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-6'>
            <div className='p-4 '>
                <ModalHeader
                    isAdd={selectedData?.id ? false : true}
                    title='Role'
                />
            </div>
            <form
                className='bg-white px-4 py-4 dark:bg-slate-800'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex w-full gap-4'>
                    <div className='mb-2 w-1/2'>
                        <Label>
                            Role's Name
                            <span className='text-error-500'>*</span>
                        </Label>
                        <div className='relative'>
                            <input
                                className={inputFieldClass({
                                    error: errors.name ? true : false,
                                })}
                                type='text'
                                placeholder='Enter role name'
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <p className='text-xs italic text-red-500'>
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='mb-4 w-1/2'>
                        <Label>
                            Role <span className='text-error-500'>*</span>{" "}
                        </Label>
                        <div className='relative'>
                            <select
                                className={classForSelect}
                                {...register("role_type", { required: true })}
                            >
                                <option
                                    className='text-gray-500!'
                                    value=''
                                    disabled
                                >
                                    Select Role type
                                </option>
                                {roleType?.map((role) => (
                                    <option value={role.value} key={role.value}>
                                        {role.label}
                                    </option>
                                ))}
                            </select>
                            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                <svg
                                    className='h-4 w-4 fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                </svg>
                            </div>
                        </div>
                        {errors.role_type && (
                            <p className='text-xs italic text-red-500'>
                                {errors.role_type?.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className='mb-4 w-full'>
                    <Label>
                        Description
                        <span className='text-error-500'>*</span>
                    </Label>
                    <div className='relative'>
                        <input
                            className={inputFieldClass({
                                error: errors.description ? true : false,
                            })}
                            type='text'
                            placeholder='Enter role description'
                            {...register("description", { required: true })}
                        />
                        {errors.description && (
                            <p className='text-xs italic text-red-500'>
                                {errors.description?.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className='mb-4 w-full'>
                    <Label>
                        Permissions
                        <span className='text-error-500'>*</span>
                    </Label>
                    <PermissionByRole
                        permissionListOfSelectedRole={
                            permissionListOfSelectedRole
                        }
                        setPermissionListOfSelectedRole={
                            setPermissionListOfSelectedRole
                        }
                    />
                </div>

                <div className=' flex items-center justify-between gap-4'>
                    <p>
                        <span className='text-slate-600'>
                            {" "}
                            Number of Permission :
                        </span>
                        <span className='text-slate-800'>
                            {" "}
                            {permissionListOfSelectedRole?.length}
                        </span>
                    </p>
                    <div className='flex gap-4 justify-end'>
                        <Button
                            variant='outline'
                            size='sm'
                            onClick={handleCloseModal}
                        >
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                            className='px-6!'
                            size='sm'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <Spinner />
                            ) : (
                                <span>
                                    {" "}
                                    {selectedData?.id
                                        ? "Update"
                                        : "Submit"}{" "}
                                </span>
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RoleModal;
