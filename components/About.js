import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMeText}>
          <h3 className={styles.h3}>
            Hi ! I'm Ryan and I'm a{" "}
            <span className={styles.purpleText}>Fullstack Developer</span>
          </h3>

          <p className={styles.p}>
            I'm a 20-year-old passionate for coding. I enjoy creating unique and
            interesting projects using web technologies and I am always looking
            for new design challenges to solve. I am interested in creating
            smart user interfaces and designing useful interactions, which leads
            to a rich web experience for the end user. When I'm not working on
            code, I'm always looking to learn more and take on new challenges. I
            am also <span className={styles.available}>available</span> for
            hire.
          </p>
        </div>

        <div>
          <img
            src="memojiHappy.png"
            className={styles.memojiImg}
            alt="Avatar of Myself"
          />
        </div>
        <span className={styles.bgGlowing}></span>
      </div>

      <h2 className={styles.sectionTitle2}>Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={`${styles.skillCard} ${styles.skillCard1}`}>
          <img
            src="ReactIcon.png"
            className={styles.skillIcon}
            alt="React Logo"
          />
          <p>React / React Native</p>
        </div>
        <div className={`${styles.skillCard} ${styles.skillCard2}`}>
          <img
            src="NextJsIcon.png"
            className={styles.skillIcon}
            alt="NextJs Logo"
          />
          <p>NextJs</p>
        </div>{" "}
        <div className={`${styles.skillCard} ${styles.skillCard3}`}>
          <img
            src="NodeJsIcon.png"
            className={styles.skillIcon}
            alt="NodeJs Logo"
          />
          <p>NodeJs</p>
        </div>{" "}
        <div className={`${styles.skillCard} ${styles.skillCard4}`}>
          <img
            src="JsIcon.png"
            className={styles.skillIcon}
            alt="ExpressJs Logo"
          />
          <p>ExpressJs</p>
        </div>{" "}
        <div className={`${styles.skillCard} ${styles.skillCard5}`}>
          <img
            src="HtmlIcon.png"
            className={styles.skillIcon}
            alt="HTML Logo"
          />
          <p>HTML</p>
        </div>{" "}
        <div className={`${styles.skillCard} ${styles.skillCard6}`}>
          <img src="CssIcon.png" className={styles.skillIcon} alt="CSS Logo" />
          <p>CSS</p>
        </div>{" "}
        <div className={`${styles.skillCard} ${styles.skillCard7}`}>
          <img src="GitIcon.png" className={styles.skillIcon} alt="Git Logo" />
          <p>Git / Github</p>
        </div>{" "}
        <div className={`${styles.skillCard} ${styles.skillCard8}`}>
          <img
            src="MongoDbIcon.png"
            className={styles.skillIcon}
            alt="MongoDB Logo"
          />
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
}
