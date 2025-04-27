import { Heading, Box, Flex, Divider, useColorMode, Tooltip, IconButton, HStack } from "@chakra-ui/react";
import { FaDownload} from 'react-icons/fa';

function About() {
    const { colorMode } = useColorMode();
    const resumePDF = '/Resume/Resume.pdf'; 
    return (
    <Box minH="80vh">
        <Flex
            direction="column"
            minH="80vh"
            marginLeft="500px"
            marginTop="100px"
        >
            <Heading size="3xl">
            About
            </Heading>

            <Divider 
            width="650px" // Adjust width as needed
            borderColor="white" // Change color if needed
            borderWidth="2px" // Make thicker if desired
            borderRadius="10px"
            mt={2} // Margin top
            mb={4} // Margin bottom
            />
            
            <Box>
                <Heading size="md" mt={4}>
                    Hi, I’m Braeden Lyman — a software developer passionate about <br/> crafting fast, intuitive, and visually polished apps and websites. <br/> With React, React Native, and JavaScript, I build responsive web <br/> applications and cross-platform mobile experiences that prioritize <br/> clean code, smooth UX, and scalable architecture. 
                    <br/> <br/> Whether I’m collaborating with a team or bringing a solo project to <br/> life, I thrive on turning ideas into functional, user-friendly digital <br/> solutions. 
                    <br/><br/>
                    Let’s create something great together.
                </Heading>
                
                {/* Download Button positioned under the last line */}
                <HStack mt={8} spacing={4} align="center">
                    <Tooltip label="Download Resume">
                        <IconButton
                            as="a"
                            href={resumePDF}
                            download="BraedenLyman_Resume.pdf"
                            icon={<FaDownload />}
                            aria-label="Download Resume"
                            variant="ghost"
                            fontSize="30px"
                            _hover={{
                                transform: 'scale(1.1)',
                                color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                            }}
                            _active={{
                                transform: 'scale(0.95)'
                            }}
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