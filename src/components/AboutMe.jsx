import React from "react";

const AboutMe = () => {
  return (
    <section id="About">
    <div className="about-me-container">
      <img src="./img/avatar.png" alt="About Me" className="avatar-img" />
      <div className="about-me-name-description">
        <h1 className="about-me-title">Leo Gratwick</h1>
        <div className="about-me-description">
          <h3>Computer Science Student</h3>
          <p>
            Hi!  Thanks for coming to my website! I'm Leo, a 2nd year Computer Science with Innovation student at the University of Bristol. I love solving complex problems, learning new skills and meeting new people. In my free time I like doing programming projects and art. I acctually drew everthing you see on this website!
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutMe;
