import { Box, Flex, Link, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const ToggleNav = ({ toggle, isOpen }) => (
  <Box display={{ base: "block", md: "none" }} onClick={toggle}>
    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
  </Box>
)

const MenuItem = ({ children, isLast, to = "/", ...rest }) => (
  <Link as={AnchorLink} to={to} sx={{ textUnderlineOffset: "0.3em" }}>
    <Text color="blue.700" fontSize="lg" display="block" {...rest}>
      {children}
    </Text>
  </Link>
)

const NavLinks = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/#about">About</MenuItem>
      <MenuItem to="/#projects">Projects</MenuItem>
      <MenuItem to="/#contact">Contact</MenuItem>
    </Stack>
  </Box>
)

const Navbar = ({ children, ...props }) => (
  <header style={{ flexShrink: 0 }}>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      {...props}
    >
      {children}
    </Flex>
  </header>
)

const Header = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Navbar {...props}>
      <Link as={GatsbyLink} to="/">
        <StaticImage
          src="../images/logo.png"
          alt="logo"
          width={40}
          quality={95}
          formats={["auto", "webp", "avif"]}
        />
      </Link>
      <ToggleNav toggle={isOpen ? onClose : onOpen} isOpen={isOpen} />
      <NavLinks isOpen={isOpen} />
    </Navbar>
  )
}

export default Header
