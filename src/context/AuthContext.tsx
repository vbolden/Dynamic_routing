import { createContext, useContext, useState } from "react";

interface AuthContextType {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}
// STORE AUTHENTICATION DATA AND FUNCTIONS
const AuthContext = createContext<AuthContextType | undefined>(
    undefined
)

export function AuthProvider({children}: {children: React.ReactNode}) {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        setIsAuth(true);
    }

    const logout = () => {
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider
        value={{isAuth, login, logout}} >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    // SAFETY CHECK 
    if(!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        )
    }

    return context;
}