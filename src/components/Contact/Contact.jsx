import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (<>
  
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>AutomAIx</h2>
        {/* <p>Feel free to reach out!</p> */}
        <ul
          
        >
         
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <ul className={styles.links}>
        <h2>Contact</h2>
        <p>Get in Touch!</p>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:automaix.in@gmail.com">automaix.in@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="http://linkedin.com/in/berger-perkins-434684188">linkedin.com/in/berger-perkins-434684188</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone-call.png")} alt="Github icon" />
          <a href="tel:9942221177">+91 9942221177</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp.png")} alt="Github icon" />
          <a href="https://wa.me/9942221177?text=Hello%20there!">+91 9942221177</a>
        </li>
      </ul>
    </footer>
    <p className={styles.copyright}>Copyright ©  2024 automaix. All rights reserved.</p>
    </>
  );
};
