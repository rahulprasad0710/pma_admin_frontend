import { useEffect, useState } from "react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button/Button";
import type { IRoleResponse } from "@/types/config.types";
import { Modal } from "@/components/common/Modal";
import { PlusIcon } from "@/icons";
import ReactTable from "@/components/common/ReactTable";
import RoleModal from "@/modal/RoleModal";
import SearchBar from "@/components/molecules/SearchBar";
import { SquarePen } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";
import { useLazyGetAllRolesQuery } from "@api/hooks/useRoles";

const Roles = () => {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [keyword, setKeyword] = useState<string>("");

    const [fetchAll, { isFetching, data: dataList }] =
        useLazyGetAllRolesQuery();

    useEffect(() => {
        fetchAll({
            isPaginationEnabled: true,
            page: 1,
            pageSize: 10,
            keyword: keyword,
        });
    }, [isActive]);
    const [selectedData, setSelectedData] = useState<
        undefined | IRoleResponse
    >();
    const [toggle, setToggle] = useState(false);

    const handleEdit = (data: IRoleResponse) => {
        setSelectedData(data);
        setToggle(true);
    };

    const handleOpenModal = () => {
        setToggle(true);
    };

    const handleCloseModal = () => {
        setSelectedData(undefined);
        setToggle(false);
    };

    const columnHelper = createColumnHelper<IRoleResponse>();

    const columns = [
        columnHelper.accessor((row) => row.name, {
            id: "employeeId",
            cell: (info) => (
                <div className='font-semibold text-gray-700 dark:text-slate-100'>
                    {info.renderValue()}
                </div>
            ),
            header: () => <div>Role</div>,
        }),

        columnHelper.accessor((row) => row.role_type, {
            id: "email",
            cell: (info) => (
                <div className='font-semibold text-gray-700 dark:text-slate-100'>
                    {info.renderValue()}
                </div>
            ),
            header: () => <span>Role Type</span>,
        }),
        columnHelper.accessor((row) => row.isActive, {
            id: "is_active",
            cell: (info) => (
                <div
                    style={{
                        width: "120px",
                    }}
                    className='font-semibold py-1 px-4'
                >
                    {info.renderValue() ? (
                        <Badge badgeType='success' title='Active' />
                    ) : (
                        <Badge badgeType='error' title='Inactive' />
                    )}
                </div>
            ),
            header: () => <div>Status</div>,
        }),

        columnHelper.accessor((row) => row.id, {
            id: "action",
            cell: (info) => {
                return (
                    <div className='flex  gap-4 '>
                        <Button
                            size='sm'
                            variant='secondary'
                            onClick={() => handleEdit(info.row.original)}
                        >
                            <SquarePen className='h-5 w-5 text-brand-400' />
                            <span>Edit</span>
                        </Button>
                    </div>
                );
            },
            header: () => <span className='text-center'>Action</span>,
        }),
    ];

    const handlePrevious = () => {
        if (
            !dataList?.data?.pagination?.currentPage ||
            dataList?.data?.pagination?.currentPage === 1
        )
            return;

        fetchAll({
            isPaginationEnabled: true,
            page: dataList?.data?.pagination?.currentPage - 1,
            pageSize: dataList?.data?.pagination?.pageSize,
            keyword: "",
        });
    };

    const handleNext = () => {
        if (!dataList?.data?.pagination?.currentPage) return;

        fetchAll(
            {
                isPaginationEnabled: true,
                page: dataList?.data?.pagination?.currentPage + 1,
                pageSize: dataList?.data?.pagination?.pageSize,
            },
            true
        );
    };

    const handleSearch = () => {
        fetchAll({
            isPaginationEnabled: true,
            page: 1,
            pageSize: 10,
            keyword: keyword,
        });
    };

    const handleClearFilter = () => {
        setKeyword("");
        fetchAll({
            isPaginationEnabled: true,
            page: 1,
            pageSize: 10,
            keyword: "",
        });
    };

    return (
        <div className='rounded-md border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
            <div className='px-6 py-5 flex justify-between items-center'>
                <h2 className='text-xl font-semibold text-gray-800 dark:text-white/90'>
                    Roles
                </h2>
                <Button onClick={handleOpenModal} variant='primary' size='sm'>
                    <PlusIcon />
                    Add Role
                </Button>
            </div>

            <div className='border-b border-gray-200 px-5 py-4 dark:border-gray-800'>
                <div className='flex items-center  justify-end  gap-2 md:gap-4 flex-wrap'>
                    <SearchBar
                        setKeyword={setKeyword}
                        keyword={keyword}
                        onClose={() => handleClearFilter()}
                    />

                    <Button
                        variant='outline'
                        size='xs'
                        onClick={handleSearch}
                        type='button'
                    >
                        Search
                    </Button>
                </div>
            </div>

            <div className='border-t border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-slate-900 sm:p-6'>
                <ReactTable
                    isFetching={isFetching}
                    showPagination={true}
                    columns={columns ?? []}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    data={dataList?.data.result ?? []}
                    pagination={
                        dataList?.data?.pagination ?? {
                            currentPage: 1,
                            pageSize: 10,
                            totalCount: 10,
                            totalPages: 1,
                        }
                    }
                />
            </div>

            <Modal
                isOpen={toggle}
                onClose={() => handleCloseModal()}
                className='max-w-6xl mb-4  '
                isFullscreen={false}
            >
                <RoleModal
                    setSelectedData={setSelectedData}
                    selectedData={selectedData}
                    handleCloseModal={handleCloseModal}
                />
            </Modal>
        </div>
    );
};

export default Roles;
