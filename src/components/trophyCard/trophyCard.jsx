import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"
import styles from "./trophyCard.module.css"

const TrophyCard = ({
  mainCard,
  trophyTitle,
  trophyDescription,
  imageUrl,
  source
}) => {
  return (
    <Fade ssrFadeout bottom>
      <div className={mainCard ? styles.mainTrophyCard : styles.trophyCard}>
        <div className={mainCard ? styles.mainStripe : styles.stripe} />
        <img
          className={styles.trophyImage}
          src={imageUrl}
          alt={`${trophyTitle} event name`}
        />
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
  mainCard: PropTypes.bool,
  trophyTitle: PropTypes.string.isRequired,
  trophyDescription: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}
TrophyCard.defaultProps = {
  mainCard: false
}

export default TrophyCard
