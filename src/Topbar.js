import "./Topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="Topbar-Div">
      <nav className="Topbar-Nav">
      <Link to="/" className="Topbar-Link">
          Home
        </Link>
        <Link to="/about" className="Topbar-Link">
          About
        </Link>
        <a href="/Shiming Liang Resume.pdf" className="Topbar-Link">
          Resume
        </a>
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
