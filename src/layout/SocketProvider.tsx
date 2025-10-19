import { Socket, io } from "socket.io-client";
import { useEffect, useState } from "react";

import { SocketContext } from "@/context/socketContext";
import type { TNotification } from "@/context/socketContext";
import { useAppSelector } from "@/store/reduxHook";

const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const authenticateEmployee = useAppSelector(
        (state) => state.global.authenticateEmployee
    );

    const [socket, setSocket] = useState<Socket | null>(null);
    const [notifications, setNotifications] = useState<TNotification[]>([]);

    const accessTokenState = localStorage.getItem("accessToken") || "";

    useEffect(() => {
        if (!accessTokenState || !authenticateEmployee?.id) return;

        const newSocket = io("https://workcentrik.publicvm.com", {
            extraHeaders: {
                Authorization: `Bearer ${accessTokenState}`,
                secure: "",
            },
            transports: ["websocket", "polling"],
            withCredentials: true,
        });

        newSocket.on("connect", () => {
            console.log("Connected to socket:", newSocket.id);
        });

        newSocket.on("connect_error", (error) =>
            console.log("Connection error:", error)
        );

        newSocket.on("NOTIFICATION_TO_CLIENT", (data: TNotification) => {
            console.log("LOG: ~ SocketProvider ~ data:", data);
            setNotifications((prev) => [...prev, data]);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, [accessTokenState, authenticateEmployee?.id]);

    return (
        <SocketContext.Provider
            value={{ socket, notifications, setNotifications }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
