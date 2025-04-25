import { Stack, Heading, IconButton, Tooltip, Link, useColorMode, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
function Navigation() {
    const { colorMode } = useColorMode();
    return (
    <>
        <Heading size="md" ml='200' mb='10'>Braeden Lyman</Heading>
        <Stack gap="2" align="flex-start" ml='200'>
            <IconButton 
                aria-label="Home Page"
                variant="ghost"
                mb="8"
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl" ml='3'>1. Home</Heading>
            </IconButton>
            
            <IconButton 
                aria-label="Work Page"
                variant="ghost"
                mb="8"
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl">2. Work</Heading>
            </IconButton>

            <IconButton 
                aria-label="About Page"
                variant="ghost"
                mb="8"
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl">3. About</Heading>
            </IconButton>

            <IconButton 
                aria-label="Contact Page"
                variant="ghost"
                mb="8"
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl">4. Contact</Heading>
            </IconButton>

            <HStack mt="5">
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
        </Stack>
    </>
  );
}

export default Navigation;