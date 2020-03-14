/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

import styles from "./projectCard.module.css"

const ProjectCard = ({ name, challenge, whatAchieved, tech, urls }) => {
  return (
    <div className={styles.cardWithOrnament}>
      <Fade left delay={100}>
        <div className={styles.projectCardDecorator} />
      </Fade>
      <Fade left delay={200}>
        <div className={styles.projectCardDecoratorEnd} />
      </Fade>
      <div className={styles.projectCardContainer}>
        <h2>{name}</h2>
        <h4>Challenge:</h4>
        <p className={styles.cardParagraph}>{challenge}</p>
        <h4>What we did ?</h4>
        <p className={styles.cardParagraph}>{whatAchieved}</p>
        <h4>What we used ?</h4>
        <div className={styles.techIconsCard}>
          {tech.map(t => (
            <div key={t.httpUrl} className={styles.techStackIcon}>
              <a href={t.httpUrl}>
                <img src={t.url} alt="tech stack icon" />
              </a>
            </div>
          ))}
        </div>
        <p className={styles.cardParagraph}>{urls}</p>
      </div>
    </div>
  )
}
ProjectCard.propTypes = {
  name: PropTypes.string,
  challenge: PropTypes.string,
  whatAchieved: PropTypes.string,
  tech: PropTypes.array,
  urls: PropTypes.array
}

ProjectCard.defaultProps = {
  name: "",
  challenge: "",
  whatAchieved: "",
  tech: [],
  urls: []
}
export default ProjectCard
