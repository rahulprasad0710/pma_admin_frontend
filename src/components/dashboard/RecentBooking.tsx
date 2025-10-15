import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";

import type { IBookingResponse } from "@/types/hotel.type";
import { format } from "date-fns";
import { useEffect } from "react";
import { useLazyGetBookingQuery } from "@/api/hooks/hotel/useBooking";
import { useNavigate } from "react-router-dom";

export default function RecentOrders() {
    const [fetchAll, { data: tableData }] = useLazyGetBookingQuery();
    const navigate = useNavigate();
    useEffect(() => {
        fetchAll({
            isPaginationEnabled: true,
            page: 1,
            pageSize: 10,
            customerId: undefined,
        });
    }, []);

    const handleNavigate = (data: IBookingResponse) => {
        navigate(`/admin/features/booking/details/${data.id}`);
    };

    return (
        <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6'>
            <div className='flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white/90'>
                        Recent Bookings
                    </h3>
                </div>

                <div className='flex items-center gap-3'>
                    <button
                        onClick={() =>
                            navigate("/admin/features/booking/listings")
                        }
                        className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'
                    >
                        See all
                    </button>
                </div>
            </div>
            <div className='max-w-full overflow-x-auto'>
                <Table>
                    {/* Table Header */}
                    <TableHeader className='border-gray-100 dark:border-gray-800 border-y'>
                        <TableRow>
                            <TableCell
                                isHeader
                                className='py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                            >
                                Booking-ID
                            </TableCell>
                            <TableCell
                                isHeader
                                className='py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                            >
                                Customer
                            </TableCell>
                            <TableCell
                                isHeader
                                className='py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                            >
                                Check-in Date
                            </TableCell>
                            <TableCell
                                isHeader
                                className='py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                            >
                                Check-out Date
                            </TableCell>
                            <TableCell
                                isHeader
                                className='py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400'
                            >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}

                    <TableBody className='divide-y divide-gray-100 dark:divide-gray-800'>
                        {tableData?.data?.result.map((booking) => (
                            <TableRow key={booking.id} className=''>
                                <TableCell className='py-3'>
                                    <div className='flex items-center gap-3'>
                                        <div>
                                            <p className='font-medium text-gray-800 text-theme-sm dark:text-white/90'>
                                                {booking.userBookingId}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className='py-3 text-gray-500 text-theme-sm dark:text-gray-400'>
                                    {booking.customer?.name}
                                </TableCell>
                                <TableCell className='py-3 text-gray-500 text-theme-sm dark:text-gray-400'>
                                    {format(
                                        booking.checkInDate ?? new Date(),
                                        "dd-MM-yyyy"
                                    )}
                                </TableCell>
                                <TableCell className='py-3 text-gray-500 text-theme-sm dark:text-gray-400'>
                                    {format(
                                        booking.checkInDate ?? new Date(),
                                        "dd-MM-yyyy"
                                    )}
                                </TableCell>
                                <TableCell className='py-3 text-gray-500 text-theme-sm dark:text-gray-400'>
                                    <button
                                        onClick={() => handleNavigate(booking)}
                                        className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg- px-4 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200'
                                    >
                                        View
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
