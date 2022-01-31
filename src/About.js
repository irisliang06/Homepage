import "./About.css";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";

export default function About() {
    return(
        <div className="About-Div">
            <Topbar />
     
            <div className="About-Outer">
                <div className="About-Inner">
                    <img src="/profile.jpg" className="About-Profile"/>
                I am a new graduate, with a bachelor’s in computer science from the University of California, Davis. In earning my degree there, I have gained a great amount of experience working among my peers in the field of software development. During my time studying at Davis, I maintained a high GPA of 3.77, and excelled in all of my classes.
                <br/>
                <br/>
                In addition to my academic achievements, I have also committed a great deal of energy to writing quality software outside of an academic environment. Currently, my focus is on web development, and I have completed numerous web apps using technologies such as React, Express, and more.
                <br/>
                <br/>
                Other than that, I am well adapted to the life of a web developer. I am a great team player, as well as a quick learner.
                </div>
            </div>
        <Bottombar />
        </div>
    );
}
