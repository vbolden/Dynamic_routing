import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { isAuth, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/blog" >Blog</Link>
            </div>

            <div className="navbar-right">
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
            </div>
        </nav>
    );
}

export default Navbar;