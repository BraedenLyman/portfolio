import { Heading, Box, Flex } from "@chakra-ui/react";

function Work() {
  return (
    <Box minH="80vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="80vh"
      >
        <Heading size="3xl">
          My Work
        </Heading>
        <Heading size="md" mt={4}>
          Here are some of my projects and experience
        </Heading>
        {/* Add your work content here */}
      </Flex>
    </Box>
  );
}

export default Work;