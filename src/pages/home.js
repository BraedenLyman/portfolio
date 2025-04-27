import { Heading, Box, Flex, IconButton, useColorMode, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Home() {
  const { colorMode } = useColorMode();

  return (
    <Box minH="80vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="80vh"
      >
        <Heading size="3xl">
            Hey there, I'm Braeden!
        </Heading>
        <Heading size="md" mt={4}>
          Mobile & Web Developer
        </Heading>
        <HStack spacing="200" mt="100">
            <IconButton 
              as={Link}
              to="/work"
              p={5}
              aria-label="Open Work Section"
              variant="ghost"
              _hover={{
                transform: 'scale(1.1)',
                color: colorMode === 'light' ? 'orange.500' : 'blue.500'
              }}
              _active={{
                transform: 'scale(0.95)'
              }}
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
              <Heading size="md">
                Check out my work
              </Heading>
            </IconButton>
            <IconButton 
              as={Link}
              to="/about"
              p={5}
              aria-label="Open About Section"
              variant="ghost"
              _hover={{
                transform: 'scale(1.1)',
                color: colorMode === 'light' ? 'orange.500' : 'blue.500'
              }}
              _active={{
                transform: 'scale(0.95)'
              }}
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
              <Heading size="md">
                More about me
              </Heading>
            </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Home;