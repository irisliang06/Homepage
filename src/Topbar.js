import "./Topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="Topbar-Div">
      <nav className="Topbar-Nav">
        <Link to="/about" className="Topbar-Link">
          About
        </Link>
        <Link to="/resume" className="Topbar-Link">
          Resume
        </Link>
        <Link to="/projects" className="Topbar-Link">
          Projects
        </Link>
      </nav>
    </div>
  );
}

export default Topbar;
