import { clearReduxAuth, setReduxAccessToken } from "@/store/authSlice";
import {
    setAuthenticateEmployeeDetailsData,
    setIsAuthenticated,
} from "@/store/authSlice";

import Spinner2 from "@/components/atoms/Spinner2";
import { useAppSelector } from "@/store/reduxHook";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLazyGetUserAuthenticatedQuery } from "@apiHooks/useAuthUser";

export default function AppInitializer({
    children,
}: {
    children: React.ReactNode;
}) {
    const dispatch = useDispatch();

    const [authenticateMe, { isLoading }] = useLazyGetUserAuthenticatedQuery();
    const { authenticateEmployee, isAuthenticated } = useAppSelector(
        (state) => state.auth
    );
    const handleLogout = () => {
        dispatch(setAuthenticateEmployeeDetailsData(null));
        clearReduxAuth();
    };

    console.log({
        authenticateEmployee,
        isAuthenticated,
        isLoading,
    });

    const handleAuthentication = async () => {
        try {
            const res = await authenticateMe().unwrap();

            if (res?.data && res?.success) {
                const response = res?.data;
                const { accessToken, ...rest } = response;
                dispatch(setAuthenticateEmployeeDetailsData(rest));
                dispatch(setReduxAccessToken(accessToken));
            } else {
                handleLogout();
            }
        } catch (error) {
            console.log("LOG: ~ handleAuthentication ~ error:", error);
            handleLogout();
        } finally {
            dispatch(setIsAuthenticated(true));
        }
    };

    useEffect(() => {
        handleAuthentication();
    }, [dispatch, authenticateMe]);

    return <>{!isLoading && isAuthenticated ? children : <Spinner2 />}</>;
}
