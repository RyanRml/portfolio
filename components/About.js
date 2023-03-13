import styles from "@/styles/About.module.css"
import { useEffect, useRef, useState } from "react"

export default function About() {
  const [titleClass, setTitleClass] = useState(`${styles.sectionTitle}`)
  const [title2Class, setTitle2Class] = useState(`${styles.sectionTitle2}`)
  const [aboutMeClass, setAboutMeClass] = useState(`${styles.aboutMe}`)

  const [reactClass, setReactClass] = useState(
    `${styles.skillCard} ${styles.skillCard1}`
  )
  const [nextClass, setNextClass] = useState(
    `${styles.skillCard} ${styles.skillCard2}`
  )
  const [nodeClass, setNodeClass] = useState(
    `${styles.skillCard} ${styles.skillCard3}`
  )
  const [expressClass, setExpressClass] = useState(
    `${styles.skillCard} ${styles.skillCard4}`
  )
  const [htmlClass, setHtmlClass] = useState(
    `${styles.skillCard} ${styles.skillCard5}`
  )
  const [cssClass, setCssClass] = useState(
    `${styles.skillCard} ${styles.skillCard6}`
  )
  const [gitClass, setGitClass] = useState(
    `${styles.skillCard} ${styles.skillCard7}`
  )
  const [mongoClass, setMongoClass] = useState(
    `${styles.skillCard} ${styles.skillCard8}`
  )

  const titleRef = useRef()
  const title2Ref = useRef()
  const aboutMeRef = useRef()

  const reactRef = useRef()
  const nextRef = useRef()
  const NodeRef = useRef()
  const expressRef = useRef()
  const htmlRef = useRef()
  const cssRef = useRef()
  const gitRef = useRef()
  const mongoRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current) {
            if (entry.isIntersecting) {
              setTitleClass(`${styles.sectionTitle} ${styles.positionBase}`)
            } else {
              setTitleClass(`${styles.sectionTitle}`)
            }
          }

          if (entry.target === aboutMeRef.current) {
            if (entry.isIntersecting) {
              setAboutMeClass(`${styles.aboutMe} ${styles.positionBase}`)
            } else {
              setAboutMeClass(`${styles.aboutMe}`)
            }
          }

          if (entry.target === title2Ref.current) {
            if (entry.isIntersecting) {
              setTitle2Class(`${styles.sectionTitle2} ${styles.positionBase}`)
            } else {
              setTitle2Class(`${styles.sectionTitle2}`)
            }
          }

          if (entry.target === reactRef.current) {
            if (entry.isIntersecting) {
              setReactClass(
                `${styles.skillCard} ${styles.skillCard1} ${styles.positionBase}`
              )
            } else {
              setReactClass(`${styles.skillCard} ${styles.skillCard1}`)
            }
          }

          if (entry.target === nextRef.current) {
            if (entry.isIntersecting) {
              setNextClass(
                `${styles.skillCard} ${styles.skillCard2} ${styles.positionBase}`
              )
            } else {
              setNextClass(`${styles.skillCard} ${styles.skillCard2}`)
            }
          }

          if (entry.target === NodeRef.current) {
            if (entry.isIntersecting) {
              setNodeClass(
                `${styles.skillCard} ${styles.skillCard3} ${styles.positionBase}`
              )
            } else {
              setNodeClass(`${styles.skillCard} ${styles.skillCard3}`)
            }
          }

          if (entry.target === expressRef.current) {
            if (entry.isIntersecting) {
              setExpressClass(
                `${styles.skillCard} ${styles.skillCard4} ${styles.positionBase}`
              )
            } else {
              setExpressClass(`${styles.skillCard} ${styles.skillCard4}`)
            }
          }

          if (entry.target === htmlRef.current) {
            if (entry.isIntersecting) {
              setHtmlClass(
                `${styles.skillCard} ${styles.skillCard5} ${styles.positionBase}`
              )
            } else {
              setHtmlClass(`${styles.skillCard} ${styles.skillCard5}`)
            }
          }

          if (entry.target === cssRef.current) {
            if (entry.isIntersecting) {
              setCssClass(
                `${styles.skillCard} ${styles.skillCard6} ${styles.positionBase}`
              )
            } else {
              setCssClass(`${styles.skillCard} ${styles.skillCard6}`)
            }
          }

          if (entry.target === gitRef.current) {
            if (entry.isIntersecting) {
              setGitClass(
                `${styles.skillCard} ${styles.skillCard7} ${styles.positionBase}`
              )
            } else {
              setGitClass(`${styles.skillCard} ${styles.skillCard7}`)
            }
          }

          if (entry.target === mongoRef.current) {
            if (entry.isIntersecting) {
              setMongoClass(
                `${styles.skillCard} ${styles.skillCard8} ${styles.positionBase}`
              )
            } else {
              setMongoClass(`${styles.skillCard} ${styles.skillCard8}`)
            }
          }
        })
      },
      { root: null, rootMargin: "-20% 0px -20% 0px", threshold: 0 }
    )

    observer.observe(titleRef.current)
    observer.observe(title2Ref.current)
    observer.observe(aboutMeRef.current)
    observer.observe(reactRef.current)
    observer.observe(nextRef.current)
    observer.observe(NodeRef.current)
    observer.observe(expressRef.current)
    observer.observe(htmlRef.current)
    observer.observe(cssRef.current)
    observer.observe(gitRef.current)
    observer.observe(mongoRef.current)
  }, [])

  return (
    <section className={styles.container}>
      <h2 ref={titleRef} className={titleClass}>
        À propos
      </h2>
      <div ref={aboutMeRef} className={aboutMeClass}>
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
            nouveaux défis.
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

      <h2 ref={title2Ref} className={title2Class}>
        Compétences
      </h2>
      <div className={styles.skillsContainer}>
        <div ref={reactRef} className={reactClass}>
          <img
            src="ReactIcon.png"
            className={styles.skillIcon}
            alt="React Logo"
          />
          <p>React / React Native</p>
        </div>
        <div ref={nextRef} className={nextClass}>
          <img
            src="ImgIconNext.png"
            className={styles.skillIcon}
            alt="NextJs Logo"
          />
          <p>NextJs</p>
        </div>{" "}
        <div ref={NodeRef} className={nodeClass}>
          <img
            src="NodeJsIcon.png"
            className={styles.skillIcon}
            alt="NodeJs Logo"
          />
          <p>NodeJs</p>
        </div>{" "}
        <div ref={expressRef} className={expressClass}>
          <img
            src="JsIcon.png"
            className={styles.skillIcon}
            alt="ExpressJs Logo"
          />
          <p>ExpressJs</p>
        </div>{" "}
        <div ref={htmlRef} className={htmlClass}>
          <img
            src="HtmlIcon.png"
            className={styles.skillIcon}
            alt="HTML Logo"
          />
          <p>HTML</p>
        </div>{" "}
        <div ref={cssRef} className={cssClass}>
          <img src="CssIcon.png" className={styles.skillIcon} alt="CSS Logo" />
          <p>CSS</p>
        </div>{" "}
        <div ref={gitRef} className={gitClass}>
          <img src="GitIcon.png" className={styles.skillIcon} alt="Git Logo" />
          <p>Git / Github</p>
        </div>{" "}
        <div ref={mongoRef} className={mongoClass}>
          <img
            src="MongoDbIcon.png"
            className={styles.skillIcon}
            alt="MongoDB Logo"
          />
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  )
}
