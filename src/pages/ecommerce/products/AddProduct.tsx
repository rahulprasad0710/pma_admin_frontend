import Label from "@/components/form/Label";
import React from "react";

interface IFormInput {
    name: string;
    is_featured: boolean;
    is_variant_product: boolean;
    is_active: boolean;
    description: string;
    sku: string;
    price: number;
    cost_price: number;
    mrp_price: number;
    quantity: number;
}

const AddProduct = () => {
    return (
        <div className='rounded-md border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]'>
            <div className='flex flex-col justify-end md:justify-between gap-5  px-5 pb-4 sm:flex-row sm:items-center '>
                <div>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white/90'>
                        Bookings
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Add New Bookings
                    </p>
                </div>
            </div>
            <div className='rounded-lg border border-gray-200 p-4 lg:p-4 dark:border-gray-800 mb-6'>
                <h4 className='text-lg font-semibold text-gray-800 lg:mb-2 dark:text-white/90'>
                    Customer Information
                </h4>
                <form className='bg-white  py-4 dark:bg-slate-800'>
                    <div className='grid grid-cols-3 gap-8'>
                        <div className='col-span-3 md:col-span-1'>
                            <Label>
                                Customer's Name
                                <span className='text-error-500'>*</span>
                            </Label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
