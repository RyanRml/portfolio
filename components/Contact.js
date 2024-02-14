import styles from "@/styles/Contact.module.css"

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Contact</h2>
      <div className={styles.contactSection}>
        <p className={styles.p}>
          Si vous avez une opportunité ou un message à me faire passer,
          n'hésitez pas à me contacter par mail ou par Linkedin.
          <br />
          Je suis toujours à l'écoute de nouvelles opportunités et je me ferai
          un plaisir de vous répondre dès que possible.
        </p>
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
          href="https://www.linkedin.com/in/ryanramoul/"
          target="_blank"
          title="Linkedin"
        >
          <img
            src="LinkedinIcon.png"
            alt="Compte Linkedin"
            className={styles.imgAccount}
          />
        </a>
        <a href="mailto: ramoulryan@gmail.com" target="_blank" title="Email">
          <img src="MailIcon.png" alt="Email" className={styles.imgAccount} />
        </a>
      </footer>
    </section>
  )
}
