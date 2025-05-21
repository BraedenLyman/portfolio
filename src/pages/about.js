import { 
  Heading, 
  Box, 
  Flex, 
  Divider, 
  useColorMode, 
  Tooltip, 
  IconButton, 
  HStack,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import { FaDownload } from 'react-icons/fa';

function About() {
  const { colorMode } = useColorMode();
  const resumePDF = '/Resume/Resume.pdf'; 
  const dividerColor = useColorModeValue("gray.300", "white");
  
  return (
    <Box >
      <Flex 
        direction="column" 
        mt="60"
        align="center"
        mx={{base: "10", md: "auto"}}
        maxWidth="750"
      >
        <VStack align="flex-start" spacing={6} >
          <Heading fontSize="48px">
            About
          </Heading>
          
          <Divider 
            width="100%"
            borderColor={dividerColor}
            borderWidth="1px" 
            borderRadius="10px" 
            mt="-3"
          />
          <Text 
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight="tall"
              whiteSpace="pre-line"
          >
              Hi, I'm Braeden Lyman — a software developer passionate about
              crafting fast, intuitive, and visually polished apps and websites.
              With React, React Native, and JavaScript, I build responsive web
              applications and cross-platform mobile experiences that prioritize
              clean code, smooth UX, and scalable architecture. 
          </Text>
          <Text 
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight="tall"
              whiteSpace="pre-line"
          >
              Whether I'm collaborating with a team or bringing a solo project to 
              life, I thrive on turning ideas into functional, user-friendly digital
              solutions.
          </Text>
          <Text 
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight="tall"
              whiteSpace="pre-line"
          >
              Let's create something great together.
          </Text>

          <HStack style={{ marginTop: "25px", textAlign: "center" }} >
              <Tooltip label="Download Resume">
                  <IconButton
                      as="a"
                      href={resumePDF}
                      download="BraedenLyman_Resume.pdf"
                      icon={<FaDownload />}
                      aria-label="Download Resume"
                      variant="ghost"
                      fontSize="30px"
                      _hover={{ transform: 'scale(1.1)', color: colorMode === 'light' ? 'orange.500' : 'blue.500' }}
                      _active={{ transform: 'scale(0.95)' }}
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  />
              </Tooltip>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default About;