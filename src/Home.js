import Topbar from "./Topbar.js";
import Content from "./Content.js";
import Bottombar from "./Bottombar.js";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home-Div">
      <Topbar />
      <Content />
      <Bottombar />
    </div>
  );
}
