/* eslint-disable react/button-has-type */
import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.css"

const Button = ({ type, label, disabled }) => {
  return (
    <button disabled={disabled} className={styles[type]}>
      {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}
Button.defaultProps = {
  type: "primary",
  disabled: false
}

export default Button
