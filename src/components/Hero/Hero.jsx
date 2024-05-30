import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>We Scale Service agencies with AI</h1>
        <p className={styles.description}>
          We provide cutting edge Technologies to drive your buisness forward . <br />Our mission is to elevate your buisness
        </p>
        {/* <a href="mailto:perkinsberger@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("hero/AIAI.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};
