import React from "react"

import styles from "./trophyCard.module.css"


const TrophyCard = ({ mainCard, trophyTitle, trophyDescription, imageUrl, source }) => {
  console.log(imageUrl)
  return (
 

      <div className={mainCard? styles.mainTrophyCard : styles.trophyCard}>
        <div className={mainCard?styles.mainStripe:styles.stripe}></div>
        <img className={styles.trophyImage} src={imageUrl}/>
        <div className={styles.text}>
          <h2>{trophyTitle}</h2>
          <p>{trophyDescription}</p>
          <a href={source}>Read More</a>
        </div>
      </div>
    
  )
}

export default TrophyCard
