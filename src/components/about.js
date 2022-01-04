import { Box, Link, Stack, Text } from "@chakra-ui/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const About = () => {
  return (
    <Stack
      spacing={{ base: 3, sm: 6, md: 9 }}
      direction={{ base: "column", md: "row" }}
      minH="calc(100vh - 150px)"
      align="center"
      justify="space-evenly"
      id="about"
      maxW={960}
      margin="0 auto"
      px={2}
      py={4}
    >
      <Box maxW={250}>
        <StaticImage
          src="../images/photo.jpg"
          alt="Yogesh Sherpa"
          width={250}
          quality={95}
          formats={["auto", "webp", "avif"]}
        />
      </Box>
      <Stack spacing={2} justify="center">
        <Text fontSize="2xl" fontWeight="semibold" color="blue.700">
          Hi, I'm Yogesh.
        </Text>
        <Text>
          I love building things on the web and learning new development
          technologies.
        </Text>
        <Text>
          Check out some of my{" "}
          <Link
            as={AnchorLink}
            to="/#projects"
            color="orange.700"
            sx={{ textDecor: "underline", textUnderlineOffset: "0.3em" }}
            fontWeight="semibold"
          >
            projects
          </Link>{" "}
          below!
        </Text>
      </Stack>
    </Stack>
  )
}

export default About
