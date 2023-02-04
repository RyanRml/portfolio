import styles from "@/styles/Contact.module.css";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState("");
  const [isSendBool, setIsSendBool] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = () => {
    if (isLoading) {
      return;
    }
    if (
      !email.match(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
      )
    ) {
      setIsSend("Votre email n'est pas valable");
      setIsSendBool(false);
      return;
    }
    if (name && email && message) {
      setIsLoading(true);
      fetch("https://portfolio-backend-puce.vercel.app/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            setIsSend("Message envoyé avec succès !");
            setEmail("");
            setMessage("");
            setName("");
            setIsSendBool(true);
            setIsLoading(false);
          } else {
            setIsSend("Une erreur à eu lieu réessayez ou envoyez moi un mail");
            setIsSendBool(false);
          }
        });
    } else {
      setIsSend("Remplissez tous les champs");
      setIsSendBool(false);
    }
  };
  let isSendStyle = { margin: "20px 0 0", color: "red" };
  if (isSendBool) {
    isSendStyle = { margin: "20px 0 0", color: "green" };
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Contact</h2>
      <div className={styles.contactSection}>
        <p className={styles.p}>
          Si vous avez une opportunité ou un message à me faire passer,
          n'hésitez pas à me l'envoyer via le formulaire ou par mail.
          <br />
          Je suis toujours à l'écoute de nouvelles opportunités et je me ferai
          un plaisir de vous répondre dès que possible.
        </p>
        <form className={styles.form}>
          <label htmlFor="inputName" className={styles.label}>
            Nom
          </label>
          <input
            id="inputName"
            type="text"
            className={styles.input}
            placeholder="Nom"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength="50"
            autoComplete="name"
          />
          <label htmlFor="inputMail" className={styles.label}>
            Email
          </label>
          <input
            id="inputMail"
            type="email"
            className={styles.input}
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="50"
          />
          <label htmlFor="inputMsg" className={styles.label}>
            Message
          </label>
          <textarea
            id="inputMsg"
            type="text"
            className={styles.input}
            placeholder="Entrez votre message"
            required
            style={{ height: "200px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength="1000"
          />
          {isLoading && <div className={styles.loader} />}
          <p style={isSendStyle} className={styles.pStatus}>
            {isSend}
          </p>
          <button
            type="button"
            className={styles.btnForm}
            onClick={sendMessage}
          >
            Envoyer
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
        <a href="mailto: ramoulryan@gmail.com" target="_blank" title="Email">
          <img src="MailIcon.png" alt="Email" className={styles.imgAccount} />
        </a>
      </footer>
    </section>
  );
}
