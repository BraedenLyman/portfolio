import { 
  Heading, 
  Box, 
  Flex, 
  Divider, 
  useColorMode, 
  Tooltip, 
  IconButton, 
  HStack,
  Text 
} from "@chakra-ui/react";
import { FaDownload } from 'react-icons/fa';

function About() {
  const { colorMode } = useColorMode();
  const resumePDF = '/Resume/Resume.pdf'; 
  
  return (
    <Box >
      <Flex 
        direction="column" 
        ml={{ base: 4, md: 500 }} 
        mt={{ base: 8, md: 100 }}
        maxW={{ base: "100%", md: "650px" }}
        px={{ base: 4, md: 0 }}
      >
        <Heading fontSize={{ base: "48px", md: "60px" }}>About</Heading>
        
        <Divider 
          width={{ base: "100%", md: "650px" }}
          borderColor="white" 
          borderWidth="2px" 
          borderRadius="10px" 
          my={2}
        />
        
        <Box mt={3}>
            <Text 
                fontSize={{ base: "18px", md: "20px" }}
                lineHeight="tall"
                whiteSpace="pre-line"
            >
                Hi, I'm Braeden Lyman — a software developer passionate about <br/>
                crafting fast, intuitive, and visually polished apps and websites. <br/>
                With React, React Native, and JavaScript, I build responsive web <br/>
                applications and cross-platform mobile experiences that prioritize <br/>
                clean code, smooth UX, and scalable architecture. <br/> <br/>
                
                Whether I'm collaborating with a team or bringing a solo project to <br/>
                life, I thrive on turning ideas into functional, user-friendly digital <br/>
                solutions. <br/> <br/>
                
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
        </Box>
      </Flex>
    </Box>
  );
}

export default About;