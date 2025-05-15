import { 
  Heading, 
  Box, 
  Flex, 
  IconButton, 
  useColorMode, 
  HStack,
  VStack,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

function Home() {
  const { colorMode } = useColorMode();
  const buttonSpacing = useBreakpointValue({ base: 8, md: 24, lg: 200 });
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const subheadingSize = useBreakpointValue({ base: "sm", md: "md" });

  const navButtons = [
    {
      to: "/work",
      label: "Check out my work",
      aria: "Open Work Section"
    },
    {
      to: "/about",
      label: "More about me",
      aria: "Open About Section"
    }
  ];

  return (
    <Box minH="80vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="80vh"
        px={4}
        textAlign="center"
      >
        <VStack spacing={4}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MotionHeading 
              size={headingSize}
              bgGradient="linear(to-r, orange.400, blue.500)"
              bgClip="text"
            >
              Hey there, I'm Braeden!
            </MotionHeading>
            <Text 
              fontSize={subheadingSize} 
              mt={4}
              color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
            >
              Mobile & Web Developer
            </Text>
          </MotionBox>

          <HStack 
            spacing={buttonSpacing} 
            mt={{ base: 12, md: 20 }}
            flexWrap="wrap"
            justify="center"
          >
            {navButtons.map((button, index) => (
              <MotionBox
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton 
                  as={Link}
                  to={button.to}
                  p={5}
                  aria-label={button.aria}
                  variant="ghost"
                  size="lg"
                  _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                  }}
                  _active={{
                    transform: 'scale(0.95)'
                  }}
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                >
                  <Text fontSize={subheadingSize} fontWeight="semibold">
                    {button.label}
                  </Text>
                </IconButton>
              </MotionBox>
            ))}
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Home;