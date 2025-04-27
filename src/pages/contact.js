import { Heading, Box, Flex, Divider, HStack, Tooltip, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';

function Contact() {
    const { colorMode } = useColorMode();
    return (
    <Box minH="80vh">
    <Flex
        direction="column"
        minH="80vh"
        marginLeft="400px"
        marginTop="100px"
    >
        <Heading size="3xl">
        Contact
        </Heading>

        <Divider 
        width="650px" // Adjust width as needed
        borderColor="white" // Change color if needed
        borderWidth="2px" // Make thicker if desired
        borderRadius="10px"
        mt={2} // Margin top
        mb={4} // Margin bottom
        />
        
        <Heading size="md" mt={4}>
            Let’s connect! <br/> <br/>
            Reach me at braedenlyman7@gmail.com or through my social media <br/> links below. Let’s build something cool.
        </Heading>

        <HStack mt="20">
        <Tooltip label="Open Gmail">
            <Link href="mailto:braedenlyman7@gmail.com" isExternal>
                <IconButton 
                    icon={<FaEnvelope />} 
                    aria-label="gmail" 
                    variant="ghost"
                    fontSize="30px"
                    mr="3"
                    _hover={{
                        transform: 'scale(1.1)',
                        color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                    }}
                    _active={{
                        transform: 'scale(0.95)'
                    }}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                />
            </Link>
        </Tooltip>
        <Tooltip label="Open LinkedIn">
            <Link href="https://www.linkedin.com/in/braedenlyman/" isExternal>
                <IconButton 
                    icon={<FaLinkedin />} 
                    aria-label="gmail" 
                    variant="ghost"
                    fontSize="30px"
                    mr="3"
                    _hover={{
                        transform: 'scale(1.1)',
                        color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                    }}
                    _active={{
                        transform: 'scale(0.95)'
                    }}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                />
            </Link>
        </Tooltip>
        <Tooltip label="Open GitHub">
            <Link href="https://github.com/BraedenLyman" isExternal>
                <IconButton 
                    icon={<FaGithub />} 
                    aria-label="gmail" 
                    variant="ghost"
                    fontSize="30px"
                    mr="3"
                    _hover={{
                        transform: 'scale(1.1)',
                        color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                    }}
                    _active={{
                        transform: 'scale(0.95)'
                    }}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                />
            </Link>
        </Tooltip>
        <Tooltip label="Open Facebook">
            <Link href="https://www.facebook.com/brae.lyman.1" isExternal>
                <IconButton 
                    icon={<FaFacebook />} 
                    aria-label="gmail" 
                    variant="ghost"
                    fontSize="30px"
                    mr="3"
                    _hover={{
                        transform: 'scale(1.1)',
                        color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                    }}
                    _active={{
                        transform: 'scale(0.95)'
                    }}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                />
            </Link>
        </Tooltip>
    </HStack>
    </Flex>
    </Box>
  );
}

export default Contact;