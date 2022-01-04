import { Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"
import * as React from "react"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" align="stretch">
      <Header />
      <main>{children}</main>
      <Footer />
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
