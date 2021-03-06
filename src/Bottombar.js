import "./Bottombar.css";
import { FaGithub, FaLinkedin, Fa } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';

function Bottombar() {
  return (
    <div className="Bottombar-Div">
      <nav className="Bottombar-Nav">
        <a href="https://github.com/irisliang06" className="Bottombar-Link">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shiming-liang-235429228/"
          className="Bottombar-Link"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:irisliang06@gmail.com" className="Bottombar-Link">
          <AiOutlineMail/>
        </a>
      </nav>
    </div>
  );
}

export default Bottombar;
