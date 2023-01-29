import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.contactSection}>
        <p className={styles.p}>
          I'm a 20-year-old passionate for coding. I enjoy creating unique and
          interesting projects using web technologies and I am always looking
          for new design challenges to solve. I am interested in creating smart
          user interfaces and designing useful interactions, which leads to a
          rich web experience for the end user. When I'm not working on code,
          I'm always looking to learn more and take on new challenges. I am
          alsovailable for hire.
        </p>
        <form className={styles.form}>
          <label for="inputName" className={styles.label}>
            Name
          </label>
          <input
            id="inputName"
            type="text"
            className={styles.input}
            placeholder="Name"
            required
          />
          <label for="inputMail" className={styles.label}>
            Email
          </label>
          <input
            id="inputMail"
            type="email"
            className={styles.input}
            placeholder="Email"
            required
          />
          <label for="inputMsg" className={styles.label}>
            Message
          </label>
          <textarea
            id="inputMsg"
            type="text"
            className={styles.input}
            placeholder="Enter your message"
            required
            style={{ height: "200px" }}
          />
          <button type="submit" className={styles.btnForm}>
            Send
          </button>
        </form>
      </div>
      <footer className={styles.footer}>
        <a href="https://github.com/RyanRml" target="_blank" title="Github">
          <img
            src="GithubIcon.png"
            alt="Compte Github"
            className={styles.imgAccount}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-r-748490249/"
          target="_blank"
          title="Linkedin"
        >
          <img
            src="LinkedinIcon.png"
            alt="Compte Linkedin"
            className={styles.imgAccount}
          />
        </a>
      </footer>
    </section>
  );
}
