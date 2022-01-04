import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Link,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as React from "react"
import { useForm } from "react-hook-form"
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSend,
  AiOutlineTwitter,
} from "react-icons/ai"
import * as yup from "yup"

const validationSchema = yup.object({
  name: yup.string().trim().required("Please enter your name"),
  email: yup
    .string()
    .trim()
    .required("Please enter your email")
    .email(
      "Please enter a valid email address in the following format: email@example.com"
    ),
  message: yup.string().trim().required("Please enter your message"),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const defaultValues = { name: "", email: "", message: "" }

const Contact = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })

  const toast = useToast()

  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then(() => {
        toast({
          title: "Thank you for contacting me!",
          description: "I will get back in touch with you soon.",
          status: "success",
          duration: 7000,
          position: "top",
          variant: "subtle",
          isClosable: true,
        })
      })
      .catch(error => console.log(error))
  }

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues)
    }
  }, [isSubmitSuccessful, reset])

  return (
    <Flex w="100%" px={2} py={4}>
      <Stack
        spacing={10}
        id="contact"
        minH="calc(100vh - 150px)"
        justify="space-evenly"
        maxW={960}
        margin="0 auto"
        w="100%"
      >
        <Stack>
          <Heading as="h1" size="3xl" color="blue.700" textAlign="center">
            Get In Touch
          </Heading>
          <HStack justify="center">
            <IconButton
              as={Link}
              variant="ghost"
              colorScheme="orange"
              href="mailto:ysherpa37@gmail.com"
              icon={<AiOutlineMail />}
              aria-label="Email"
            />
            <IconButton
              as={Link}
              variant="ghost"
              colorScheme="orange"
              href="https://github.com/ysherpa3"
              icon={<AiOutlineGithub />}
              aria-label="GitHub"
            />
            <IconButton
              as={Link}
              variant="ghost"
              colorScheme="orange"
              href="https://twitter.com/ysherpa37"
              icon={<AiOutlineTwitter />}
              aria-label="Twitter"
            />
          </HStack>
        </Stack>
        <Center>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={{ maxWidth: 500, width: "100%" }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormControl mb={6} isInvalid={errors.name}>
              <FormLabel htmlFor="name" color="blue.600" w="100%">
                Name
              </FormLabel>
              <Input name="name" id="name" type="text" {...register("name")} />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={6} isInvalid={errors.email}>
              <FormLabel htmlFor="email" color="blue.600" w="100%">
                Email
              </FormLabel>
              <Input
                name="email"
                id="email"
                type="text"
                {...register("email")}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={6} isInvalid={errors.message}>
              <FormLabel htmlFor="message" color="blue.600" w="100%">
                Message
              </FormLabel>
              <Textarea
                name="message"
                id="message"
                type="text"
                {...register("message")}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>
            <Flex justify={{ base: "center", sm: "flex-end" }}>
              <Button
                colorScheme="orange"
                isLoading={isSubmitting}
                type="submit"
                variant="ghost"
                leftIcon={<AiOutlineSend />}
              >
                Send Message
              </Button>
            </Flex>
          </form>
        </Center>
      </Stack>
    </Flex>
  )
}

export default Contact
