/* eslint-disable react/no-typos */
import React, { useState } from "react"
import PropTypes from "prop-types"

import styles from "./textInput.module.css"

const TextInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  useValidation,
  validator
}) => {
  const [touched, toggleTouch] = useState(false)

  return (
    <div className={styles.inputWrapper}>
      {useValidation && touched && (
        <p className={styles.error}>
          {!validator.test(value) ? "Wrong email format" : ""}
        </p>
      )}
      <input
        className={
          useValidation && touched && !validator.test(value)
            ? styles.errorInput
            : ""
        }
        type={type}
        onBlur={() => toggleTouch(true)}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  useValidation: PropTypes.bool,
  validator: PropTypes.instanceOf(RegExp)
}
TextInput.defaultProps = {
  placeholder: "",
  name: "",
  value: "",
  useValidation: false,
  validator: new RegExp()
}

export default TextInput
