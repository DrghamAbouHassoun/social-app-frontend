import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { BaseUser, UserInterface } from "../interfaces/user.interface";


export const AuthContext = createContext<{user: UserInterface | null}>({
    user: {
        _id: "",
        name: "",
        email: "",
        role: "",
        token: "",
    },
})

export interface AuthProviderProps {
    children: JSX.Element | JSX.Element[] | string;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserInterface | null>(null);
    
    useEffect(() => {
        const accessToken = Cookies.get("access_token");
        if (!accessToken) {
            return;
        }
        const userInfo: BaseUser = jwtDecode(accessToken);
        setUser({ ...userInfo, token: accessToken });

    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}