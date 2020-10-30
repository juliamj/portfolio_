import React from 'react';
import Project from "./Project";
import lola from '../images/lola.png';
import colorful from '../images/colorful.png';
import cms from '../images/CMS.png';

function Portfolio(props) {
    return (
        <div id="portfolio-scroll" className="portfolio">
            <div className="section-projects">
                <h1 className="heading">My Projects</h1>
                <div className="projects">
                    <Project
                        heading="Lola"
                        description="A language exchange Web Application that brings people together to learn languages."
                        skill1="React.js"
                        skill2="Node.js/Express"
                        skill3="MongoDB/Mongoose"
                        skill4="Bootstrap"
                        skill5="React Bootstrap"
                        img={lola}
                        live="https://lola-tandem.netlify.app/"
                        code="https://github.com/juliamj/Lola-client"
                    />
                    <Project
                        heading="Colorful"
                        description="Experimenting with web scraping and creating a color picker with cultural information about various colors throughout history."
                        skill1="React.js"
                        skill2="Grommet"
                        img={colorful}
                        // preview=""
                        live="https://colorful-app.netlify.app/"
                        code="https://github.com/juliamj/colorful"
                    />
                    <Project
                        heading="Cookbook"
                        description="Building a React App with Contentful as CMS."
                        skill1="React.js"
                        skill2="Contentful as CMS"
                        img={cms}
                        // preview=""
                        live="https://how-not-to-cook-recipes.netlify.app/"
                        code="https://www.github.com/juliamj/recipes_group4"
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;