import React, { useRef } from "react";
import data from "../data/index.json";

const Projects = () => {
  const scrollContainer = useRef(null);
  const backElementRef = useRef(null);
  const nextElementRef = useRef(null);

  const backClicked = () => {
    const targetElement = backElementRef.current;
    scrollContainer.current.scrollLeft -= 350;
  };

  const nextClicked = () => {
    const targetElement = nextElementRef.current;
    scrollContainer.current.scrollLeft += 350;
  };

  return (
    <section id="Projects">
      <div>
        <h2 className="section-title projects-title">Projects</h2>
      </div>
      <div className="container">
        <button
          className="scroll-button"
          onClick={backClicked}
          ref={backElementRef}
        >
          <img className="scroll-button-img" src="./img/orangebackButton.png" />
        </button>
        <div ref={scrollContainer} className="project-list-container">
          {data?.projects?.map((item, index) => (
            <div key={index} className="skill-container">
              <h2 className="project-title">{item.title}</h2>
              <p className="project-description"> {item.description}</p>
              <a className="project-link" href={item.link}>
                Github
              </a>
            </div>
          ))}
        </div>
        <button
          className="scroll-button"
          onClick={nextClicked}
          ref={nextElementRef}
        >
          <img className="scroll-button-img" src="./img/orangenextButton.png" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
