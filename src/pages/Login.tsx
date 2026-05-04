import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleLogin() {
        login();

        navigate("/admin");
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Login Page</h2>
                <button onClick={handleLogin} >
                    Log In
                </button>
            </div>
        </div>
    )
}

export default Login;