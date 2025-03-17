import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaGamepad } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
        <nav className="nav-bar">
            <FaHome className={`nav-icon ${location.pathname === "/" ? "active" : null}`} 
            onClick={() => navigate("/")} title="홈" />
            <FaGamepad className={`nav-icon ${location.pathname === "/play" ? "active" : null}`}
            onClick={() => navigate("/play")} title="게임" />
        </nav>
    </div>
  );
}

export default NavBar;
