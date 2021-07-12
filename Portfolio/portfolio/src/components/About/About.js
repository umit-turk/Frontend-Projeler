import React from "react";
import "./about.css"
const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">WHO WE ARE</h2>
      <div className="blog-container">
        <p className="blog-paragraph">
          All around the world, people are waking up to the deepening crisis of
          nature loss. We’re experiencing a growing realization that nature is
          our life-support system and that no one will be spared from the
          impacts of its loss. Here at WWF, an independent conservation
          organization active in nearly 100 countries, we are working to sustain
          the natural world for the benefit of people and wildlife. We are part
          of a growing coalition calling on world leaders to set nature on the
          path to recovery by 2030 – a New Deal for Nature and People as
          comprehensive as the global climate deal. Working with many others –
          from individuals and communities to business and government – WWF
          urgently seeks to protect and restore natural habitats, stop the mass
          extinction of wildlife, and make the way we produce and consume
          sustainable.{" "}
        </p>
        <h2 className="about-heading">OUR MISSION</h2>
        <p className="blog-paragraph">
          To stop the degradation of the earth’s natural environment and to
          build a future in which humans live in harmony with nature by:
        </p>
        <ul>
            <li>conserving the world’s biological diversity</li>
            <li>ensuring that the use of renewable natural resources is sustainable</li>
            <li>promoting the reduction of pollution and wasteful consumption.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
