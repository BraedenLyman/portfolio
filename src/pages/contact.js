import { 
  Heading, 
  Box, 
  Flex, 
  Divider, 
  HStack, 
  Tooltip, 
  Link, 
  IconButton, 
  useColorMode,
  Text,
  VStack
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Contact() {
  const { colorMode } = useColorMode();
  
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: "Open Gmail",
      href: "mailto:braedenlyman7@gmail.com",
      aria: "Email"
    },
    {
      icon: <FaLinkedin />,
      label: "Open LinkedIn",
      href: "https://www.linkedin.com/in/braedenlyman/",
      aria: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      label: "Open GitHub",
      href: "https://github.com/BraedenLyman",
      aria: "GitHub"
    },
    {
      icon: <FaFacebook />,
      label: "Open Facebook",
      href: "https://www.facebook.com/brae.lyman.1",
      aria: "Facebook"
    }
  ];

  return (
    <Box>
      <Flex 
        direction="column" 
        minH="80vh"
        ml={{ base: 4, md: 400 }}
        mt={{ base: 8, md: 100 }}
        px={{ base: 4, md: 0 }}
      >
        <VStack align="flex-start" spacing={6}>
          <Heading fontSize={{ base: "48px", md: "60px" }}>
            Contact
          </Heading>
          
          <Divider 
            width={{ base: "100%", md: "650px" }}
            borderColor="white" 
            borderWidth="2px" 
            borderRadius="10px"
          />
          
          <Text 
            fontSize={{ base: "18px", md: "20px" }}
            lineHeight="tall"
            whiteSpace="pre-line"
          >
            Let's connect! <br/><br/>
            Reach me at braedenlyman7@gmail.com or through my social media <br/>
            links below. Let's build something cool.
          </Text>
          
          <HStack wrap="wrap" ml={-3}>
            {socialLinks.map((link, index) => (
              <Tooltip key={index} label={link.label} hasArrow>
                <Link href={link.href} isExternal>
                  <IconButton 
                    icon={link.icon}
                    aria-label={link.aria}
                    variant="ghost"
                    size="lg"
                    _hover={{ 
                      transform: 'scale(1.1)', 
                      color: colorMode === 'light' ? 'orange.500' : 'blue.500' 
                    }}
                    _active={{ transform: 'scale(0.95)' }}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  />
                </Link>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Contact;