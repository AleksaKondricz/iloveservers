/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./navSlider.module.css"

const NavSlider = ({ elements, previous, next }) => {
  const [cardDisplayed, setCardToDisplay] = useState(0)

  const incrementCarousel = () => {
    if (cardDisplayed + 1 === elements.length) {
      setCardToDisplay(0)
      return
    }
    setCardToDisplay(cardDisplayed + 1)
  }
  const decrementCarosuel = () => {
    if (!cardDisplayed) {
      setCardToDisplay(elements.length - 1)
      return
    }
    setCardToDisplay(cardDisplayed - 1)
  }

  return (
    <div className={styles.carousel}>
      <h4 className={styles.previous} onClick={() => decrementCarosuel()}>
        {previous}
      </h4>

      {elements[cardDisplayed].node}
      <h4 className={styles.next} onClick={() => incrementCarousel()}>
        {next}
      </h4>
    </div>
  )
}

NavSlider.propTypes = {
  elements: PropTypes.array.isRequired,
  previous: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired
}

export default NavSlider
