import React from 'react'
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, i'm Payal</h1>
            <p className={styles.description}>
            Passionate programmer who loves solving problems, mastering DSA, and building full-stack applications.
             Reach out if you'd like to learn more!
            </p>
            <a href="mailto:p7790149@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me!" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

