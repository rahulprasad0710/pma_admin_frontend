import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Link } from "react-router";
import { useState } from "react";

const SingleNotification = () => {
    return (
        <div>
            <li>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-02.jpg'
                            alt='User'
                            className='w-full overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 block  text-theme-sm text-gray-500 dark:text-gray-400 space-x-1'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Terry Franci
                            </span>
                            <span> requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>5 min ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>

            <li>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-03.jpg'
                            alt='User'
                            className='w-full overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Alena Franci
                            </span>
                            <span>requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>8 min ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>

            <li>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-04.jpg'
                            alt='User'
                            className='w-full overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Jocelyn Kenter
                            </span>
                            <span> requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>15 min ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>

            <li>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                    to='/'
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-05.jpg'
                            alt='User'
                            className='w-full overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Brandon Philips
                            </span>
                            <span>requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>1 hr ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>

            <li>
                <DropdownItem
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                    onItemClick={closeDropdown}
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-02.jpg'
                            alt='User'
                            className='w-full overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Terry Franci
                            </span>
                            <span> requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>5 min ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>

            <li>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-03.jpg'
                            alt='User'
                            className='w-full overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Alena Franci
                            </span>
                            <span> requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>8 min ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>

            <li>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-04.jpg'
                            alt='User'
                            className='w-full overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 block  space-x-1 text-theme-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Jocelyn Kenter
                            </span>
                            <span> requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>15 min ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>

            <li>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className='flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5'
                >
                    <span className='relative block w-full h-10 rounded-full z-1 max-w-10'>
                        <img
                            width={40}
                            height={40}
                            src='/images/user/user-05.jpg'
                            alt='User'
                            className='overflow-hidden rounded-full'
                        />
                        <span className='absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900'></span>
                    </span>

                    <span className='block'>
                        <span className='mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400'>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Brandon Philips
                            </span>
                            <span>requests permission to change</span>
                            <span className='font-medium text-gray-800 dark:text-white/90'>
                                Project - Nganter App
                            </span>
                        </span>

                        <span className='flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400'>
                            <span>Project</span>
                            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                            <span>1 hr ago</span>
                        </span>
                    </span>
                </DropdownItem>
            </li>
        </div>
    );
};

export default SingleNotification;
