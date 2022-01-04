import { Flex, HStack, IconButton, Link, Stack, Text } from "@chakra-ui/react"
import * as React from "react"
import { AiFillGithub, AiOutlineDesktop } from "react-icons/ai"

const ProjectCard = ({
  name,
  description,
  topics,
  isPrivate,
  githubUrl,
  homepageUrl,
}) => {
  return (
    <Stack
      spacing={4}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      p={4}
      justify="space-between"
      borderRadius="6px"
      bgColor="gray.50"
    >
      <Text fontWeight="semibold">{name}</Text>
      <Text color="GrayText">{description}</Text>
      <Flex wrap="wrap">{topics}</Flex>
      <Flex justify="flex-end">
        <HStack spacing={2}>
          {!isPrivate && (
            <IconButton
              as={Link}
              href={githubUrl}
              variant="ghost"
              colorScheme="orange"
              aria-label="view code on GitHub"
              icon={<AiFillGithub />}
              title="GitHub link"
            />
          )}
          <IconButton
            as={Link}
            href={homepageUrl}
            variant="ghost"
            colorScheme="orange"
            aria-label="view live site"
            icon={<AiOutlineDesktop />}
            title="Live site"
          />
        </HStack>
      </Flex>
    </Stack>
  )
}

export default ProjectCard
