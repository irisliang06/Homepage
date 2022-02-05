import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About";
import Project from './Project';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/projects" element={ <Project/> }/>
      </Routes>
    </Router>
  );
}

export default App;
