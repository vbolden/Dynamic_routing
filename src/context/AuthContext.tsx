import { createContext, useContext, useState } from "react";

interface AuthContextType {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

