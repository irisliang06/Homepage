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
        <a href="mailto:irisliang06@gmail.com" className="Topbar-Link">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Topbar;
