import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { PiWindmillBold } from "react-icons/pi";

import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
        <nav className="nav-bar">
            <FaHome className={`nav-icon ${location.pathname === "/" ? "active" : null}`} 
            onClick={() => navigate("/")} title="홈" />
            <PiWindmillBold className={`nav-icon ${location.pathname === "/windmill" ? "active" : null}`}
            onClick={() => navigate("/windmill")} title="바람개비" />
            <TbHandClick className={`nav-icon ${location.pathname === "/clicker" ? "active" : null}`} 
            onClick={() => navigate("clicker")} title="클릭!" />
        </nav>
    </div>
  );
}

export default NavBar;
