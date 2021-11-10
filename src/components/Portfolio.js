import React from "react";
import Project from "./Project";
import lola from "../images/lola.png";
import colorful from "../images/colorful.png";
import cms from "../images/CMS.png";
import serokarte from "../images/serokarte.png";

function Portfolio(props) {
  return (
    <div id="portfolio-scroll" className="portfolio">
      <div className="section-projects">
        <h1 className="heading">My Projects</h1>
        <div className="projects">
          <Project
            heading="SERO-Karte"
            description="SERO-karte is a crowd-sourcing project, a digital map, through which everyone is invited to share their Zero Waste insider tips in Berlin. The idea behind this map is to create a helpful tool, through which the transition towards the Zero Waste lifestyle can be as easy as possible. The project was born during a climathon in November 2020. Amongst other tasks I have been responsible for the frontend development with JavaScript and the UX & UI design using Adobe XD."
            skill1="JavaScript"
            skill2="Adobe XD"
            img={serokarte}
            // preview="PREVIEW"
            live="https://sero-karte.de/"
            mockup="https://xd.adobe.com/view/2cc5dbbd-b793-424d-8aad-48f69174444e-7996/"
            prototype="https://xd.adobe.com/view/4d7fec43-82f0-42ec-ac56-e77c5705908d-182c/?fullscreen&hints=off"
          />
          <Project
            heading="Lola"
            description="A language exchange Web Application that brings people together to learn languages."
            skill1="React.js"
            skill2="Node.js/Express"
            skill3="MongoDB/Mongoose"
            skill4="Bootstrap"
            skill5="React Bootstrap"
            img={lola}
            // preview="PREVIEW"
            live="https://lola-tandem.netlify.app/"
            code="https://github.com/juliamj/Lola-client"
          />
          <Project
            heading="Colorful"
            description="Experimenting with web scraping and creating a color picker with cultural information about various colors throughout history."
            skill1="React.js"
            skill2="Grommet"
            img={colorful}
            live="https://colorful-app.netlify.app/"
            code="https://github.com/juliamj/colorful"
          />
          <Project
            heading="Cookbook"
            description="Building a React App with Contentful as CMS."
            skill1="React.js"
            skill2="Contentful as CMS"
            skill3="Bootstrap"
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
