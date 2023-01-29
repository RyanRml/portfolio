import styles from "@/styles/Work.module.css";

export default function Work() {
  return (
    <section className={styles.container}>
      <div className={styles.workLeft}>
        <div className={styles.workLeftText}>
          <h3>TravelHack</h3>
          <p>
            Dans le cadre de mon projet, j'avais pour but de développer une
            application qui répondait à une problématique précise, en
            collaboration avec quatre développeurs. Nous avions deux semaines
            pour réaliser cette tâche. Grâce à ce que nous avons appris lors de
            notre formation et à une organisation rigoureuse, nous avons réussi
            à atteindre notre objectif et à livrer une application fonctionnelle
            et utile.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="TravelHack1.png"
            alt="TravelHack App Welcome Screen"
            className={styles.imgWork}
          />
          <img
            src="TravelHack2.png"
            alt="TravelHack App Home Screen"
            className={styles.imgWork}
          />
        </div>
      </div>
      <div className={styles.workRight}>
        <div className={styles.workRightText}>
          <h3>Morning News</h3>
          <p>
            Un site web permettant d'accéder aux dernières news de journal The
            Verge. Ce site donne la possibilité d'accéder à une preview de
            chaque news, de cacher ou de rendre visible certaines news mais
            donne aussi la possibilité de se créer un compte ou de se connecter
            pour pouvoir en enregistrer.
          </p>
          <button type="button">
            <a href="https://morningnews-frontend.vercel.app/" target="_blank">
              GO
            </a>
          </button>
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
          <h3>My Moviz</h3>
          <p>
            Regardez quelles sont les dernières sorties de film ! Ajoutez vos
            favoris, notez les films que vous avez vu, et combien de fois vous
            les avez vu !
          </p>
          <button type="button">
            <a
              href="https://mymoviz-part5-frontend-coral.vercel.app/"
              target="_blank"
            >
              GO
            </a>
          </button>
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
          <h3>Yams</h3>
          <p>
            Pas de dés chez soi ? Pas envie de compter ? Ce site reprend le jeu
            populaire yams sous forme informatique pour jouer n'importe où et
            sans contrainte.
          </p>
          <button type="button">
            <a href="https://yams-game.vercel.app/" target="_blank">
              GO
            </a>
          </button>
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
