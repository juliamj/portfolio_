import React from 'react';

function Skills(props) {
    return (
        <div id="skills-scroll" className="skills">
            <div className="section">
                <h1 className="heading">My Technical Skills</h1>
                <div className="skills-flex-container">
                    <div className="skills-flex">
                        <div>
                            <ul className="nobull">
                                <li><span>JavaScript</span></li>
                                <li><span>React.js</span></li>
                                <li><span>HTML5</span></li>
                                <li><span>CSS3</span></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="nobull">
                                <li><span>Bootstrap</span></li>
                                <li><span>Grommet</span></li>
                                <li><span>React Bootstrap</span></li>
                                <li><span>Responsive Webdesign</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-flex">
                        <div>
                            <ul className="nobull">
                                <li><span>MongoDB</span></li>
                                <li><span>Node.js</span></li>
                                <li><span>Git & GitHub</span></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="nobull">
                                <li><span>UX & UI Design</span></li>
                                <li><span>Adobe XD</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;