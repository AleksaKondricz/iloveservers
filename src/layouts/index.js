/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"

import { Header, Footer } from "../components"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer
      heading="We love servers_"
      copyright="COPYRIGHT © 2020 KONKOP SOFTWARE ALL RIGHTS RESERVED."
    />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
