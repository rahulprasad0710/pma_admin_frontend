import { Navigate, Outlet } from "react-router";

import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import Backdrop from "./Backdrop";
import { SidebarProvider } from "../context/SidebarContext";
import { useAppSelector } from "@/store/reduxHook";
import useSidebar from "@/context/useSidebar";

const LayoutContent: React.FC = () => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    return (
        <div className='min-h-screen xl:flex dark:bg-gray-900'>
            <div>
                <AppSidebar />
                <Backdrop />
            </div>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
                } ${isMobileOpen ? "ml-0" : ""}`}
            >
                <AppHeader />
                <div className='p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6  '>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const AppLayout: React.FC = () => {
    const authenticateEmployee = useAppSelector(
        (state) => state.global.authenticateEmployee
    );
    console.log({
        authenticateEmployee,
    });

    return (
        <SidebarProvider>
            {authenticateEmployee?.id ? (
                <LayoutContent />
            ) : (
                <Navigate to={"/"} />
            )}
        </SidebarProvider>
    );
};

export default AppLayout;
