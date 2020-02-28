import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import React, { useState, Fragment } from "react"
import Loader from 'react-loader-spinner'
import { Button } from ".."
import styles from "./form.module.css"

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}

const Form = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [budget, setBudget] = useState("")
  const [extraInformation, setExtraInformation] = useState("")
  const [loading, changeLoadingStatus] = useState(false)
  const [operationFinished, changeOperationStatus] = useState(false);

  const sendRequest = async () => {
    const payload = { fullName, email, country, budget, extraInformation }
    changeLoadingStatus(true);
    await sleep(2000);
    changeLoadingStatus(false);
    changeOperationStatus(true);
  }

  return (
    <Fragment>
      { !loading ? <div className={styles.formContainer}>
        <div className={styles.splitRow}>
        <input
          value={fullName}
          placeholder="Full Name"
          onChange={e => setFullName(e.target.value)}
        />
        <input
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        </div>
        <div className={styles.splitRow}>
          <input
            value={country}
            placeholder="Country"
            onChange={e => setCountry(e.target.value)}
          />
          <input
            value={budget}
            placeholder="Budget"
            onChange={e => setBudget(e.target.value)}
          />
        </div>
        <textarea
         
          value={extraInformation}
          placeholder="How can we help you?"
          onChange={e => setExtraInformation(e.target.value)}
        />
           <Button label='Reach out' type='primary' onClick={() => sendRequest()} />
      </div> : <Loader type="MutatingDots" color="#11b9fe"/>}
   
    </Fragment>
  )
}

export default Form
