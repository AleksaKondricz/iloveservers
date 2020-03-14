import React from "react"
import PropTypes from "prop-types"
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
      <div
        key={trophyTitle}
        className={mainCard ? styles.mainTrophyCard : styles.trophyCard}
      >
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

TrophyCard.propTypes = {
  mainCard: PropTypes.bool.isRequired,
  trophyTitle: PropTypes.string,
  trophyDescription: PropTypes.string,
  imageUrl: PropTypes.string,
  source: PropTypes.string
}

TrophyCard.defaultProps = {
  trophyTitle: "",
  trophyDescription: "",
  imageUrl: "",
  source: ""
}

export default TrophyCard
