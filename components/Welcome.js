import styles from "@/styles/Welcome.module.css";

export default function Welcome() {
  const mouseTrail = (e) => {
    let elem = document.createElement("span");
    elem.setAttribute("class", "trail");
    elem.setAttribute(
      "style",
      `left: ${e.clientX - 100}px; top: ${e.clientY - 50}px`
    );

    document.body.insertAdjacentElement("beforeend", elem);
    elem.onanimationend = () => {
      elem.remove();
    };
  };

  return (
    <section className={styles.container} onMouseMove={(e) => mouseTrail(e)}>
      <div className={styles.titleContainer}>
        <h1 className={styles.h1}>Ryan Ramoul</h1>
        <h3 className={styles.h3}>Fullstack Web Developer</h3>
      </div>
    </section>
  );
}
