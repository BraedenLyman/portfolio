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
  VStack,
  Image
} from "@chakra-ui/react";
import { FaDownload } from 'react-icons/fa';

function About() {
  const { colorMode } = useColorMode();
  const resumePDF = '/Resume/Resume.pdf';
  const dividerColor = useColorModeValue("gray.300", "white"); // Light gray for light mode, white for dark mode
  const profilePic = "/images/me2.jpg"

  return (
    <Box>

      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        align="center" 
        justifyContent="center"
        mx={{ base: "10", md: "auto" }} 
        mt={{base: "-40px", md: "0", lg: "0"}}
        maxWidth={{ base: "100%", md: "100%", lg: "90%" }} 
        px={{ base: "0", md: "20px" }} 
        gap={{ base: "40px", md: "70px" }}
      >
        <Image
          src={profilePic}
          alt="picture of Braeden"
          objectFit="cover" 
          position={{ base: "relative" }}
          ml="auto"
          mr="auto"
          width={{ base: "350px", md: "350px", lg: "450px" }}
          height={{ base: "350px", md: "450px", lg: "550px" }}
          borderRadius="30px 30px 30px 30px"
          flexShrink={0} 
        />
        <VStack
          align="flex-start"
          spacing={6}
        >
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
            textAlign="left"
          >
            Whether I'm collaborating with a team or bringing a solo project to
            life, I thrive on turning ideas into functional, user-friendly digital
            solutions.
          </Text>
          <Text
            fontSize={{ base: "18px", md: "20px" }}
            lineHeight="tall"
            whiteSpace="pre-line"
            textAlign="left"
          >
            Let's create something great together.
          </Text>

          <HStack
            mt="25px"
            justifyContent="flex-start"
            width="100%" 
          >
            <Tooltip label="Download Resume">
              <IconButton
                as="a"
                href={resumePDF}
                download="BraedenLyman_Resume.pdf"
                icon={<FaDownload />}
                aria-label="Download Resume"
                variant="ghost" 
                fontSize="30px" 
                color={useColorModeValue("gray.700", "white")}
                _hover={{
                  transform: 'scale(1.1)',
                  color: colorMode === 'light' ? 'purple.500' : 'orange.300'
                }}
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