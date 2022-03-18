import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Crurrency Dashboard & Financial Visualization",
    github: "https://github.com/",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto Crurrency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Crurrency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto Crurrency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Crurrency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Crurrency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((value, index) => {
          return (
            <article className="portfolio__item" key={value.id}>
              <div className="portfolio__item--image">
                <img src={value.image} alt="" />
              </div>
              <h3>{value.title}</h3>
              <div className="portfolio__item--cta">
                <a
                  href={value.github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={value.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
