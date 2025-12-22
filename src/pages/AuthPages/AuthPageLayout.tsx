import CompanyIcon from "@/components/molecules/CompanyIcon";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import React from "react";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0'>
            <div className='relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0'>
                {children}
                <div className='items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid'>
                    <div className='relative flex items-center justify-center z-1'>
                        {/* <!-- ===== Common Grid Shape Start ===== --> */}
                        <GridShape />
                        <div className='flex flex-col items-center max-w-3xl'>
                            <Link to='/' className='block mb-4'>
                                <div className='flex gap-2 items-center '>
                                    <CompanyIcon height={90} width={90} />
                                    <h3 className='text-brand-50 text-3xl font-serif '>
                                        WorkCentrik
                                    </h3>
                                </div>
                            </Link>
                            <h2 className='text-center text-xl text-white dark:text-white/60 mb-1'>
                                Streamline Your Projects. Empower Your Teams.
                            </h2>
                            <p className='text-center  text-amber-50 dark:text-white/60 mb-4'>
                                One platform to manage tasks, collaborate, track
                                progress, and deliver on time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='fixed z-50 hidden bottom-6 right-6 sm:block'>
                    <ThemeTogglerTwo />
                </div>
            </div>
        </div>
    );
}
