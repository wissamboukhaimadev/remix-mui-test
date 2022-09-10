import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    Box,
} from "@chakra-ui/react";
const SignUpComponent = () => {
    return (
        <div>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="teal.500" />
                    <Heading color="teal.400">Welcome</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>

                                        <Input type="email" placeholder="Email Address" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"

                                        />
                                        <Input
                                            type={"text"}
                                            placeholder="Password"
                                        />

                                    </InputGroup>

                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Continue
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
                <Box>
                    New to us?{" "}
                    <Link color="teal.500" href="#">
                        Sign Up
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default SignUpComponent