import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import lola from '../videos/lola.mp4';

function Project(props) {
    const skills = [];
    props.skill1 ? skills.push(props.skill1) : console.log("no skill")
    props.skill2 ? skills.push(props.skill2) : console.log("no skill")
    props.skill3 ? skills.push(props.skill3) : console.log("no skill")
    props.skill4 ? skills.push(props.skill4) : console.log("no skill")
    props.skill5 ? skills.push(props.skill5) : console.log("no skill")
    props.skill6 ? skills.push(props.skill6) : console.log("no skill")
    const [open, setOpen] = useState(false);
 
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
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
            <a className="image-hover" href={props.live} target="_blank"><img className="project-image" src={props.img} /></a>
                <div>
                    {props.preview === undefined ? (<div className="view-project"><a className="link live" href={props.live} target="_blank">VIEW LIVE</a>
                    <a className="link" href={props.code} target="_blank">CODE</a></div>) : 
                    (<div className="view-project"><div onClick={onOpenModal} className="link pointer">{props.preview}</div>
                    {/* <Modal open={open} onClose={onCloseModal} center>
                      <h2>Lola</h2>                   
                        <video width="100%" height="100%" controls autoplay>
                            <source src={lola} type="video/mp4" />
                                    Your browser does not support the video tag.
                        </video>
                    </Modal> */}
                    <a className="link live" href={props.live} target="_blank">VIEW LIVE</a>
                    <a className="link" href={props.code} target="_blank">CODE</a></div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;