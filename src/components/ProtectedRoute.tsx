import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuth } = useAuth();


    if (!isAuth) {
        return <Navigate to="/login" replace />; // IF NOT AUTH SEND TO LOGIN PAGE
    }

    return children;
}

export default ProtectedRoute;