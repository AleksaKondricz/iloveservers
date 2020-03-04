import React, { useState } from "react"
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

export default TextInput
