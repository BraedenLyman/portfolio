import { Stack, Heading, IconButton, Tooltip, useColorMode, HStack, Box } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

function Navigation({ onClose }) {
    const { colorMode } = useColorMode();
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    return (
        <MotionBox
            initial={{ y: -100, opacity: 0 }}
            animate={isMounted ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <MotionStack
                gap="2"
                align="flex-start"
                initial={{ opacity: 0 }}
                animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Stack 
                    gap="2" 
                    align="flex-start" 
                    ml={{base: "auto", md: "200", lg: "200"}}
                    mr={{base: "auto", md: "0", lg: "0"}}
                    mt="20"
                >
                    <IconButton 
                        as={Link}
                        to="/"
                        aria-label="Home Page"
                        variant="ghost"
                        mb="8"
                        onClick={onClose}
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
                        as={Link}
                        to="/work"
                        aria-label="Work Page"
                        variant="ghost"
                        mb="8"
                        onClick={onClose}
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
                        as={Link}
                        to="/about"
                        aria-label="About Page"
                        variant="ghost"
                        mb="8"
                        onClick={onClose}
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
                        as={Link}
                        to="/contact"
                        aria-label="Contact Page"
                        variant="ghost"
                        mb="8"
                        onClick={onClose}
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
            </MotionStack>
        </MotionBox>

  );
}

export default Navigation;