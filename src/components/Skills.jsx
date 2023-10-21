
import React, { useRef } from 'react';
import data from "../data/index.json"



const Skills = () => {

  const scrollContainer = useRef(null)
  const backElementRef = useRef(null);
  const nextElementRef = useRef(null);

  const backClicked = () => {
    const targetElement = backElementRef.current
    scrollContainer.current.scrollLeft -= 350;
  }
  
  const nextClicked = () => {
    const targetElement = nextElementRef.current
    scrollContainer.current.scrollLeft +=  350;
  }

  return (
    <section id="Skills">
    <div>
        <h1 className="section-title skills-title">Skills</h1>
      </div>
    <div className="container">
      <button className="scroll-button" onClick={backClicked} ref={backElementRef}>
        <img className="scroll-button-img" src="./img/backButton.png"/>
      </button>
    <div ref= {scrollContainer}className="skill-list-container">
    {data?.skills?.map((item, index) => (
      <div key={index} className="skill-container">
      <h2 className="skill-title">{item.title}</h2>
      <p className="skill-description" >
        {" "}
        {item.description}
      </p>
    </div>

    ))

    }
    </div>
    <button className="scroll-button" onClick={nextClicked} ref={nextElementRef}>
        <img className="scroll-button-img" src="./img/nextButton.png"/>
      </button>
    </div>
    </section>
  );
};

export default Skills;
