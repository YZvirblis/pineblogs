import { createContext, useState } from "react";

const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState<boolean>(JSON.parse(`${localStorage.getItem("persist")}`) !== `` ? JSON.parse(`${localStorage.getItem("persist")}`) : false || false)

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;