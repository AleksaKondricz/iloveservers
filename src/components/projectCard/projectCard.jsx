import React from "react"

import styles from "./projectCard.module.css"

const ProjectCard = ({ id, name, challenge, whatAchieved, tech, urls }) => {
 


  return (
   
    <div className={ styles.cardWithOrnament}>
      <div className={styles.projectCardDecorator}></div>
      <div className={styles.projectCardDecoratorMiddle}></div>
      <div className={styles.projectCardDecoratorEnd}></div>
    <div className={styles.projectCardContainer}>
      <h2>{name}</h2>
      <h4>Challenge:</h4>
      <p className={styles.cardParagraph}>{challenge}</p>
      <h4>What we did ?</h4>
      <p className={styles.cardParagraph}>{whatAchieved}</p>
      <h4>What we used ?</h4>
      <div className={styles.techIconsCard}>
        {tech.map(t => (
          <div className={styles.techStackIcon}>
            <a href={t.httpUrl}>
              <img src={t.url} />
            </a>
          </div>
        ))}
      </div>
      <p className={styles.cardParagraph}>{urls}</p>
    </div>
    </div>
 
  )
}

export default ProjectCard
