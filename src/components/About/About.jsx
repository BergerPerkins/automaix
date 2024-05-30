import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Designer.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Who We Are</h3>
              <p>
              Our journey began with a vision to revolutionize industries. Backed by a team of AI experts, we've crafted innovative solutions to empower professionals. Our passion drives us to create cutting-edge technology, ensuring businesses thrive in a rapidly evolving digital landscape. Welcome to a world of endless possibilities.
              </p>
            </div>
          </li>
        </ul>
      </div>






      <div className={`${styles.content} ${styles.content2}`}>
        <img
          src={getImageUrl("about/design.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Our Approach</h3>
              <p>
              We follow a customer-centric approach to everything we do. We believe in working closely with our clients to understand their needs and goals, and then we develop a customized plan to achieve those goals. We strive to deliver results that exceed our clients' expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
