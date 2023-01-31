import styles from "@/styles/Work.module.css";
import { useRef } from "react";

export default function Work() {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Projets</h2>
      <div className={styles.workLeft}>
        <div className={styles.workLeftText}>
          <h3 className={styles.h3}>TravelHack</h3>
          <p className={styles.p}>
            Application mobile pour préparer et enregistrer des voyages. Elle
            utilise l'API Google Maps pour obtenir des informations sur un lieu
            (hôtels, restaurants, etc.), évaluer le coût d'un voyage, discuter
            avec des personnes dans la région via un chat et plus encore.
          </p>
          <div className={styles.workBtn}>
            <a
              className={styles.a}
              href="https://github.com/papass38/travelhack-frontend"
              target="_blank"
            >
              Github &#8599;
            </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="TravelHack1.png"
            alt="TravelHack App Welcome Screen"
            className={`${styles.imgWork} ${styles.imgWorkPortrait}`}
          />
          <img
            src="TravelHack2.png"
            alt="TravelHack App Home Screen"
            className={`${styles.imgWork} ${styles.imgWorkPortrait}`}
          />
        </div>
      </div>
      <div className={styles.workRight}>
        <div className={styles.workRightText}>
          <h3 className={styles.h3}>Morning News</h3>
          <p className={styles.p}>
            Site web pour accéder aux dernières nouvelles du journal The Verge.
            Il offre une vue d'ensemble de chaque nouvelle, la possibilité de
            masquer ou de rendre certaines nouvelles visibles, ainsi que la
            possibilité de créer un compte ou de se connecter pour enregistrer
            les nouvelles.
          </p>
          <div className={styles.workBtn}>
            <a
              className={styles.a}
              href="https://morningnews-frontend.vercel.app/"
              target="_blank"
            >
              Website &#8599;
            </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="MorningNews1.png"
            alt="Morning News Welcome Screen"
            className={styles.imgWork}
          />
          <img
            src="MorningNews2.png"
            alt="Morning News Bookmarks Screen"
            className={styles.imgWork}
          />
        </div>
      </div>
      <div className={styles.workLeft}>
        <div className={styles.workLeftText}>
          <h3 className={styles.h3}>My Moviz</h3>
          <p className={styles.p}>
            Découvrez les derniers films sortis et ne manquez plus jamais une
            sortie importante ! Ajoutez vos films préférés à votre liste,
            évaluez les films que vous avez vus, et tenez une trace de combien
            de fois vous les avez regardés.
          </p>
          <div className={styles.workBtn}>
            <a
              className={styles.a}
              href="https://mymoviz-part5-frontend-coral.vercel.app/"
              target="_blank"
            >
              Website &#8599;
            </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="MyMoviz1.png"
            alt="My Moviz Home Screen"
            className={styles.imgWork}
          />
          <img
            src="MyMoviz2.png"
            alt="My Moviz Home With Favorite"
            className={styles.imgWork}
          />
        </div>
      </div>
      <div className={styles.workRight}>
        <div className={styles.workRightText}>
          <h3 className={styles.h3}>Yams</h3>
          <p className={styles.p}>
            Pas de dés sous la main ? Pas envie de faire le calcul ? Ce site
            propose une version informatique du jeu populaire Yams pour jouer où
            vous voulez, sans contraintes.
          </p>
          <div className={styles.workBtn}>
            <a
              className={styles.a}
              href="https://yams-game.vercel.app/"
              target="_blank"
            >
              Website &#8599;
            </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src="Yams1.png" alt="Yams Screen" className={styles.imgWork} />
          <img
            src="Yams2.png"
            alt="Yams Screen With Dices"
            className={styles.imgWork}
          />
        </div>
      </div>
    </section>
  );
}
