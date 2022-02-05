import './Project.css';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";
import { MdOutlineLaunch } from 'react-icons/md';
import Topbar from './Topbar';
import Bottombar from './Bottombar';

function Entry(props) {
    let title = props.title;
    let desc = props.desc;
    let github = props.github;
    let url = props.url;
    let tech = props.tech;
    return (
        <div className="Entry-Outer">
            <div className="Entry-Header">
                <div className="Entry-Header-Left">
                    <AiOutlineFolderOpen/>
                </div>
                <div className="Entry-Header-Right">
                    <a href={url}>
                        <MdOutlineLaunch/>
                    </a>
                    <a href={github}>
                        <FaGithub/>
                    </a>
                </div>
            </div>
            <div className="Entry-Body">
                <div className="Entry-Title">
                    {title}
                </div>
                {desc}
            </div>
            <div className="Entry-Footer">
                {tech.map((x, i) => {
                    return (
                        <div key={i}>
                            {x}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function Project() {
    return(
        <div className="Project-Outer">
            <Topbar/>
            <div className="Project-Div">
            <Entry
                title="Feedback App"
                desc="Clean UI framework for leaving numeric feedback and comments for products."
                github="https://github.com/irisliang06/Feedback-App"
                url="http://isliang.com:8103"
                tech={[ 'React', 'Express', 'JavaScript' ]}
            />
            <Entry
                title="Education IS Free"
                desc="Web app that allows users to search educational videos from universities."
                github="https://github.com/irisliang06/Art-Museum-Website"
                url="http://isliang.com:8102"
                tech={[ 'React', 'Express', 'JavaScript', 'SQLite3' ]}
            />
            <Entry
                title="Tractivity"
                desc="App that tracks users' exercise plans and history, providing stats."
                github="https://github.com/irisliang06/Fitness-Tracker-Website"
                url="http://isliang.com:8101"
                tech={[ 'HTML5', 'Express', 'JavaScript', 'SQLite3', 'OAuth2' ]}
            />
        </div>
        <Bottombar/>
        </div>
    )
}

export default Project;