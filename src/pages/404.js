import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Center>
      <VStack spacing={6} minH="calc(100vh - 143px)" justify="center">
        <Heading as="h1" fontSize="9xl" color="blue.700">
          404
        </Heading>
        <Text fontWeight="semibold" fontSize="xl" color="blue.700">
          Page Not Found
        </Text>
        <Text color="GrayText">
          Oops! The page you're looking for cannot be found.
        </Text>
        <Button colorScheme="teal" as={GatsbyLink} variant="solid" to="/">
          Go to Homepage
        </Button>
      </VStack>
    </Center>
  </Layout>
)

export default NotFoundPage
