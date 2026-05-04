import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { isAuth, logout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/blog" >Blog</Link>

            {isAuth ? (
                <>
                    <Link to="/admin">Admin</Link>
                    <button onClick={logout} >
                        Log Out
                    </button>
                </>
            ) : (
                <Link to="/login" >Log In</Link>
            )}
        </nav>
    );
}

export default Navbar;