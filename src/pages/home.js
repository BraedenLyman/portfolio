import { Heading, Box, Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Box minH="90vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
      >
        <Heading size="3xl">
            Hey there, I'm Braeden!
        </Heading>
        <Heading size="md" mt={4}>
          Mobile & Web Developer
        </Heading>
        <div style={{display: 'flex', flexDirection: 'row', gap: '200px', marginTop: '100px'}}>
            <Heading size="md">
                Check out my work
            </Heading>
            <Heading size="md">
            More about me
            </Heading>
        </div>
      </Flex>
    </Box>
  );
}

export default Home;