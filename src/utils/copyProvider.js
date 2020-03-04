import React from "react"
import hardCopy from "../locale/app"

const copyProvider = (page, Component) => props => (
  <Component {...props} t={hardCopy[page]} />
)

export default copyProvider
