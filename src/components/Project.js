import React, { useState } from "react";
import "react-responsive-modal/styles.css";

function UxProject(props) {
  const skills = [];
  props.skill1 ? skills.push(props.skill1) : console.log("no skill");
  props.skill2 ? skills.push(props.skill2) : console.log("no skill");
  props.skill3 ? skills.push(props.skill3) : console.log("no skill");
  props.skill4 ? skills.push(props.skill4) : console.log("no skill");
  props.skill5 ? skills.push(props.skill5) : console.log("no skill");
  props.skill6 ? skills.push(props.skill6) : console.log("no skill");

  return (
    <div className="project-container">
      <div className="project-left">
        <h2>{props.heading}</h2>
        <p className="description">{props.description}</p>
        <ul className="tech-stack nobull">
          {skills.map((skill) => (
            <li className="mr-3">
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="project-right">
        <a
          className="image-hover"
          href={props.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="project-image" alt="img" src={props.img} />
        </a>
        <div>
          {props.code === undefined ? (
            <div className="view-project">
              <a
                className="link live"
                href={props.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                view live
              </a>
              <a
                className="link"
                href={props.mockup}
                target="_blank"
                rel="noopener noreferrer"
              >
                mockup
              </a>
              <a
                className="link"
                href={props.prototype}
                target="_blank"
                rel="noopener noreferrer"
              >
                prototype
              </a>
            </div>
          ) : (
            <div className="view-project">
              <a
                className="link live"
                href={props.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                view live
              </a>
              <a
                className="link"
                href={props.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UxProject;
