import { Flex, Heading, SimpleGrid, Stack, Tag } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

import ProjectCard from "./project-card"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      github {
        viewer {
          public: repositories(first: 10, privacy: PUBLIC) {
            nodes {
              description
              homepageUrl
              id
              isPrivate
              name
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    id
                    name
                  }
                }
              }
              url
            }
          }
          private: repository(name: "sherpa-home-improve") {
            description
            homepageUrl
            id
            isPrivate
            name
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  id
                  name
                }
              }
            }
            url
          }
        }
      }
    }
  `)

  const publicRepos = data.github.viewer.public.nodes
  const sherpaHomeImproveRepo = data.github.viewer.private

  const repositories = publicRepos.concat(sherpaHomeImproveRepo)

  return (
    <Flex w="100%" px={2} py={4}>
      <Stack
        spacing={10}
        id="projects"
        minH="calc(100vh - 150px)"
        justify="space-evenly"
        maxW={960}
        margin="0 auto"
      >
        <Heading as="h1" size="3xl" color="blue.700" textAlign="center">
          Things I've Built
        </Heading>
        <SimpleGrid minChildWidth="300px" spacing={{ base: 4, sm: 6, md: 8 }}>
          {repositories.map(repo => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              topics={repo.repositoryTopics.nodes.map(node => (
                <Tag key={node.topic.id} m="0 8px 8px 0" colorScheme="blue">
                  {node.topic.name}
                </Tag>
              ))}
              githubUrl={repo.url}
              homepageUrl={repo.homepageUrl}
              isPrivate={repo.isPrivate}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}

export default Projects
