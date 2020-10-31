import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import fav from '../images/favicon.ico';

function Nav(props) {
    return (
        <div className="navbar-out">
            <nav className="navbar navbar-light navbar-expand-sm fixed-top">
                <div onClick={() => scroll.scrollToTop()} className="navbar-brand pointer home">
                    <img className="" src={fav} />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to='about-scroll'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={1000}
                                className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='skills-scroll'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={1000}
                                className="nav-link">
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='portfolio-scroll'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={1000}
                                className="nav-link">
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='contact-scroll'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-350}
                                duration={1000}
                                className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Nav;