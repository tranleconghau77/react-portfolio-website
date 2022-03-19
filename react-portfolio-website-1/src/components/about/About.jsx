import React from "react";
import "./about.scss";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillFolder } from "react-icons/ai";
import { FaLessThan } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>&lt;3 Months Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>&lt;10 users</small>
            </article>
            <article className="about__card">
              <AiFillFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            I am a 3rd year student and full of enthusiasm in my work. With my
            time in school as well as doing some practical work, I am confident
            that I will complete the assigned tasks well. The projects I
            participate in or do myself also bring my efforts to be able to
            complete well.
          </p>
          <a href="#contact" className="btn btn-primary ">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
