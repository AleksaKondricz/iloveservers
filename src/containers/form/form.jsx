/* eslint-disable no-shadow */
/* eslint-disable no-useless-escape */
import React, { useState } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"
import { Button, TextInput, TextArea } from "../../components"
import styles from "./form.module.css"

const EMAIL_REGEXP = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
const ENDPOINT = `https://us-central1-konkop-software.cloudfunctions.net/contact`

const Form = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [budget, setBudget] = useState("")
  const [message, setMessage] = useState("")
  const [loading, isLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async () => {
    try {
      setError(false)
      isLoading(true)
      await axios.post(ENDPOINT, {
        name: fullName,
        email,
        country,
        budget,
        description: message
      })
      isLoading(false)
    } catch (error) {
      isLoading(false)
      setError(true)
    }
  }

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.splitRow}>
          <TextInput
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <TextInput
            name="email"
            type="email"
            placeholder="Email"
            useValidation
            validator={EMAIL_REGEXP}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.splitRow}>
          <TextInput
            name="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <TextInput
            name="budget"
            type="text"
            placeholder="$Budget"
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />
        </div>
        <TextArea
          name="message"
          type="text"
          placeholder="How can I help you? "
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        {!loading ? (
          <Button
            onClick={() => handleSubmit()}
            type="primary"
            label="Reach Out"
          />
        ) : (
          <Loader type="ThreeDots" color="#e98074" height={60} width={60} />
        )}
        {error && (
          <p className={styles.errorMessage}>
            Ops! An Error has happened. Please try again.
          </p>
        )}
      </div>
    </>
  )
}

export default Form
