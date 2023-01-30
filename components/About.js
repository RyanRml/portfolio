import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMeText}>
          <h3 className={styles.h3}>
            Salut ! Je suis Ryan et je suis un{" "}
            <span className={styles.devTitle}>Développeur Web Fullstack</span>
          </h3>

          <p className={styles.p}>
            Je suis un passionné de code âgé de 20 ans. J'aime créer des projets
            uniques et intéressants en utilisant de nouvelles technologies web
            et je suis toujours à la recherche de nouveaux défis et problèmes à
            résoudre. Je suis intéressé par la création d'interfaces utilisateur
            intelligentes, ce qui conduit à une riche expérience web pour
            l'utilisateur final. Lorsque je ne travaille pas sur le code, je
            suis toujours à la recherche d'apprendre plus et de relever de
            nouveaux défis. Je suis également disponible pour un emploi.
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
