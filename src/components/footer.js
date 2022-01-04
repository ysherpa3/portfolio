import { Link, Text } from "@chakra-ui/react"
import * as React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
        flexShrink: 0,
        textAlign: "center",
        width: "100%",
        padding: "16px 0",
      }}
    >
      <Text fontSize="sm">
        © {new Date().getFullYear()} Yogesh Sherpa
        <br />
        Built with{" "}
        <Link
          href="https://www.gatsbyjs.com/"
          isExternal
          sx={{ textDecor: "underline", textUnderlineOffset: "0.3em" }}
          color="blue.700"
          fontWeight="semibold"
        >
          Gatsby
        </Link>{" "}
        +{" "}
        <Link
          href="https://chakra-ui.com/"
          isExternal
          sx={{ textDecor: "underline", textUnderlineOffset: "0.3em" }}
          color="blue.700"
          fontWeight="semibold"
        >
          Chakra UI
        </Link>
      </Text>
    </footer>
  )
}

export default Footer
