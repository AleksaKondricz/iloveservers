import React from "react"
import Fade from "react-reveal/Fade"
import { OptImage } from "../../components"
import styles from "./trophyCard.module.css"

const TrophyCard = ({
  mainCard,
  trophyTitle,
  trophyDescription,
  imageUrl,
  source
}) => {
  return (
    <Fade bottom>
      <div className={mainCard ? styles.mainTrophyCard : styles.trophyCard}>
        <div className={mainCard ? styles.mainStripe : styles.stripe} />
        <OptImage className={styles.trophyImage} imageKey={imageUrl} />

        <div className={styles.text}>
          <h2>{trophyTitle}</h2>
          <p>{trophyDescription}</p>
          <a href={source}>Read More</a>
        </div>
      </div>
    </Fade>
  )
}

export default TrophyCard
