import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import project from "../../data/project.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
  <>
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Services</h2>
      <h3>AI Agents and Automations</h3>
      <h4>Transforms your buisness with our AI automation solution .Save your Money and Time by streaming tasks efficiently</h4>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>

    <section className={styles.container} >
      <h3>unlock the power of Data Driven Concept</h3>
      <h4>Our advanced AI solutions analyze vast amounts of data, providing valuable insights and predictive analytics, enabling you to optimize strategies, improve performance, and stay ahead of the competition. </h4>
      <div className={styles.projects}>
        {project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  </>
  );
};
