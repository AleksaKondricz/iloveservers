import React from "react"
import PropTypes from "prop-types"
import styles from "./footer.module.css"

const Footer = ({ heading, copyright }) => {
  return (
    <footer>
      <div className={styles.innerContainer}>
        <h2>{heading}</h2>
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  heading: PropTypes.string,
  copyright: PropTypes.string
}

Footer.defaultProps = {
  heading: "",
  copyright: ""
}

export default Footer
