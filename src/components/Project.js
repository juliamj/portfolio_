import React from 'react';

function Project(props) {
    const skills = [];
    props.skill1 ? skills.push(props.skill1) : console.log("no skill")
    props.skill2 ? skills.push(props.skill2) : console.log("no skill")
    props.skill3 ? skills.push(props.skill3) : console.log("no skill")
    props.skill4 ? skills.push(props.skill4) : console.log("no skill")
    props.skill5 ? skills.push(props.skill5) : console.log("no skill")
    props.skill6 ? skills.push(props.skill6) : console.log("no skill")

    return (
        <div className="project-container">
            <div className="project-left">
                <h2>{props.heading}</h2>
                <p className="description">{props.description}</p>
                <ul className="tech-stack nobull">
                    {skills.map((skill) =>
                        <li className="mr-3"><span>{skill}</span></li>)}
                </ul>
            </div>
            <div className="project-right">
                <img className="project-image" src={props.img} />
                <div className="view-project nobull">
                    <a href={props.preview} target="_blank">preview</a>
                    <a href={props.live} target="_blank">view live</a>
                    <a href={props.code} target="_blank">code</a>
                </div>
            </div>
        </div>
    );
}

export default Project;