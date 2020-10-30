import React from 'react';
import profile from '../images/profile.jpg';
import { Link } from 'react-scroll';

function About() {
    return (
        <div id="about-scroll" className="about mb-4">
            <div className="section">
                <div className="flex">
                    <div className="about-left pr-5">
                        <img className="profile-picture mt-4 mb-2" src={profile} />
                        <div className="c-social-icons">
                            <a className="social-icon" href="https://www.linkedin.com/in/juliamj" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="social-icon" href="https://www.github.com/juliamj" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                            <Link
                                to='contact'
                                smooth={true}
                                duration={1000}
                                className="social-icon">
                                <i className="fa fa-envelope"></i>
                            </Link>
                        </div>

                    </div>
                    <div className="about-right">
                        <p className="text-big">
                            Hi! <span className="newline">
                                I'm<span className="highlight-blue"> Julia,</span> </span>
                            <div className="text-md-vw">
                                Junior<span className="highlight-blue"> Frontend Developer.</span>
                            </div>
                        </p>
                        <p className="paragraph mt-5">
                            I am a career changer who went from healthcare management and jumped right into the innovative field of web development. Web, and specifically Frontend Development, caught my interest, because I can use my
                            <span className="highlight-light"> detail-oriented </span>
                            tendencies in a
                            <span className="highlight-light"> creative </span>
                            and
                            <span className="highlight-light"> result-driven </span>
                            way.</p>
                        <p className="paragraph mt-5 mb-5">
                            I am passionate about creating
                            <span className="highlight-light"> unique user interfaces </span>
                            and developing solutions that aim for a great
                            <span className="highlight-light"> user experience </span>
                            . Being confronted with new challenges, the wide range of knowledge and technologies, as well as being surrounded by the lively tech community, motivates and inspires me.
                        </p>
                        <div className="quote-about pt-3 mb-5">
                            <p>
                                "The process of developing software and composing music are, I think, alike in many ways. First the combination of single fragments will create a great experience for your eyes or ears. You can express and pass information or emotions to many others."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;