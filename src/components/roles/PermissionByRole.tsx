import type {
    IPermissionGroupResponse,
    IPermissionResponse,
} from "@/types/config.types";
import { useEffect, useState } from "react";
import {
    useGetAllPermissionGroupsQuery,
    useLazyGetPermissionGroupsDetailsByIdQuery,
} from "@apiHooks/usePermission";

import Badge from "../ui/Badge";
import NotificationBulb from "../molecules/NotificationBulb";
import Skeleton from "@/components/common/Skeleton";

type Props = {
    permissionListOfSelectedRole: IPermissionResponseWithCheckbox[];
    setPermissionListOfSelectedRole: (
        data: IPermissionResponseWithCheckbox[]
    ) => void;
};
interface IPermissionResponseWithCheckbox extends IPermissionResponse {
    isChecked: boolean;
}

const PermissionByRole = ({
    permissionListOfSelectedRole,
    setPermissionListOfSelectedRole,
}: Props) => {
    const [itemIndex, setItemIndex] = useState<number>(0);
    console.log({
        permissionListOfSelectedRole,
    });
    const { data: PermissionGroups, isFetching } =
        useGetAllPermissionGroupsQuery({
            isPaginationEnabled: false,
            page: 1,
            pageSize: 20,
            isActive: true,
        });

    const [fetchDetailsById, { data: PermissionGroupDetails }] =
        useLazyGetPermissionGroupsDetailsByIdQuery();

    useEffect(() => {
        if (PermissionGroups && PermissionGroups?.data?.result?.length > 0) {
            handleClick(0, PermissionGroups?.data?.result[0]);
        }
    }, [PermissionGroups]);

    const handleClick = (index: number, item: IPermissionGroupResponse) => {
        setItemIndex(index);
        fetchDetailsById({
            permissionGroupId: item.id,
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        permissionResponse: IPermissionResponse
    ) => {
        const isPermissionAlreadySelected = permissionListOfSelectedRole?.find(
            (permission) => permission.id === permissionResponse.id
        );
        if (isPermissionAlreadySelected) {
            const temp = permissionListOfSelectedRole?.filter(
                (item) => item.id !== permissionResponse.id
            );
            setPermissionListOfSelectedRole(temp);
        } else {
            const temp: IPermissionResponseWithCheckbox = {
                ...permissionResponse,
                isChecked: true,
            };

            setPermissionListOfSelectedRole([
                ...permissionListOfSelectedRole,
                temp,
            ]);
        }
    };

    const activeClassName =
        "inline-flex items-center  transition rounded-md px-3 py-1 text-sm font-medium transition-colors duration-200 ease-in-out bg-brand-500 text-white shadow-theme-xs dark:bg-white/[0.03] dark:text-white";

    const inactiveClassName =
        "inline-flex items-center transition rounded-md px-3 py-1 text-sm font-medium transition-colors duration-200 ease-in-out bg-gray-200 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200";

    return (
        <div>
            <nav
                className='flex gap-4 overflow-x-auto rounded-lg bg-white p-2 dark:bg-gray-900 
            [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&amp;::-webkit-scrollbar-thumb]:bg-gray-600 [&amp;::-webkit-scrollbar-track]:bg-white dark:[&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar]:h-1.5'
            >
                {isFetching
                    ? Array.from({ length: 8 }).map((_, index) => (
                          <Skeleton
                              key={index}
                              className=' h-6 w-24 mr-8 bg-white dark:bg-white/[0.03]'
                              width='100px'
                              height='24px'
                          />
                      ))
                    : PermissionGroups?.data.result.map((item, index) => (
                          <div className='relative'>
                              <button
                                  key={index}
                                  type='button'
                                  className={
                                      index === itemIndex
                                          ? activeClassName
                                          : inactiveClassName
                                  }
                                  onClick={() => handleClick(index, item)}
                              >
                                  {item.displayName}
                              </button>
                              {permissionListOfSelectedRole?.find(
                                  (e) => e.permissionGroupId === item.id
                              ) ? (
                                  <NotificationBulb />
                              ) : null}
                          </div>
                      ))}
            </nav>
            <div className='border border-gray-100 rounded-sm'>
                <table className='min-w-full'>
                    <thead className='border-gray-100 border-y bg-gray-50 dark:border-gray-800 dark:bg-gray-900'>
                        <tr>
                            <th className='px-6 py-3 whitespace-nowrap'>
                                <div className='flex items-center'>
                                    <p className='font-medium  text-slate-800 text-theme-xs dark:text-gray-400'>
                                        Name
                                    </p>
                                </div>
                            </th>
                            <th className='px-6 py-3 whitespace-nowrap'>
                                <div className='flex items-center'>
                                    <p className='font-medium text-gray-500 text-theme-xs dark:text-gray-400'>
                                        Description
                                    </p>
                                </div>
                            </th>
                            <th className='px-6 py-3 whitespace-nowrap'>
                                <div className='flex items-center'>
                                    <p className='font-medium text-gray-500 text-theme-xs dark:text-gray-400'>
                                        Status
                                    </p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100 dark:divide-gray-800'>
                        {PermissionGroupDetails?.data.permissions?.map(
                            (item) => (
                                <tr key={item.id}>
                                    <td className='px-6 py-3 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <label className='flex items-center gap-2 cursor-pointer mr-4'>
                                                <input
                                                    type='checkbox'
                                                    className='w-4 h-4'
                                                    onChange={(e) =>
                                                        handleChange(e, item)
                                                    }
                                                    checked={
                                                        permissionListOfSelectedRole?.find(
                                                            (permission) =>
                                                                permission.id ===
                                                                item.id
                                                        )?.isChecked
                                                            ? true
                                                            : false
                                                    }
                                                />
                                            </label>
                                            <p className='text-gray-700 text-theme-sm dark:text-gray-400'>
                                                {item.displayName}
                                            </p>
                                        </div>
                                    </td>
                                    <td className='px-6 py-3 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <p className='text-gray-700 text-theme-sm dark:text-gray-400'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </td>
                                    <td className='px-6 py-3 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            {permissionListOfSelectedRole?.find(
                                                (permission) =>
                                                    permission.id === item.id
                                            ) ? (
                                                <Badge
                                                    title='Applied'
                                                    badgeType='success'
                                                />
                                            ) : (
                                                <Badge
                                                    title='Not Applied'
                                                    badgeType='warning'
                                                />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PermissionByRole;
