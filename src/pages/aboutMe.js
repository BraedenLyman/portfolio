import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';

const MotionBox = motion(Box);

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
  viewport: { once: true, amount: 0.2 }
};

const aboutCards = [
  {
    title: 'How I Build',
    text: 'Hi, I’m Braeden, a software developer who genuinely enjoys building things that people use every day. I specialize in modern web and mobile development using technologies like React, React Native, and Firebase, and I enjoy taking products from an initial idea all the way to a polished, production-ready application. I care a lot about clean architecture, thoughtful user experience, and creating software that feels fast, intuitive, and reliable.'
  },
  {
    title: 'How I Work',
    text: 'I’m naturally easygoing and enjoy working with others to bring ideas to life. I like collaborating with designers, developers, and stakeholders to solve problems and build products that actually make an impact. I believe great software comes from strong communication, curiosity, and a team that enjoys the process of building together. Whether I’m contributing to a team or working independently, I bring a positive attitude, strong attention to detail, and a genuine excitement for creating well-crafted digital experiences.'
  },
  {
    title: 'Outside of Work',
    text: 'Outside of development, I enjoy staying active and spending time outdoors. Rock climbing, MMA training, hiking, and backcountry camping are some of the ways I challenge myself and recharge. I also enjoy unwinding with friends over video games. These activities keep me energized and reflect the same mindset I bring to development. Continuous improvement, curiosity, and enjoying the process of learning and building.'
  }
];

function AboutMe() {
  const accentGradient = 'linear-gradient(128deg, #0ea5e9 0%, #14b8a6 55%, #22d3ee 100%)';
  const sectionSurface = 'rgba(15, 23, 42, 0.55)';
  const sectionBorder = 'rgba(148, 163, 184, 0.22)';

  return (
    <Box position="relative" overflowX="clip" pb={{ base: 16, md: 24 }}>
      <Box
        position="fixed"
        top="10%"
        left="-120px"
        width="280px"
        height="280px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, rgba(34, 211, 238, 0) 70%)"
        filter="blur(4px)"
        zIndex={0}
        pointerEvents="none"
      />
      <Box
        position="fixed"
        bottom="8%"
        right="-140px"
        width="320px"
        height="320px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(20, 184, 166, 0) 70%)"
        filter="blur(4px)"
        zIndex={0}
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        <SiteHeader sectionBorder={sectionBorder} currentPath="/about-me" />

        <MotionBox pt={{ base: 16, md: 24 }} {...sectionReveal}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }} alignItems="start">
            <Box>
              <Heading fontSize={{ base: '4xl', md: '6xl' }} bgGradient={accentGradient} bgClip="text" mb={4}>
                About Me
              </Heading>
              <Text color="brand.textGray" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9" mb={6}>
                A software developer focused on thoughtful products, strong collaboration, and building digital experiences people actually enjoy using.
              </Text>
              <VStack align="stretch" spacing={4}>
                {aboutCards.map((card) => (
                  <Box
                    key={card.title}
                    p={{ base: 5, md: 6 }}
                    borderRadius="18px"
                    bg={sectionSurface}
                    border="1px solid"
                    borderColor={sectionBorder}
                  >
                    <Text color="brand.textLight" fontWeight="700" fontSize="lg" mb={2}>{card.title}</Text>
                    <Text color="brand.textGray" fontSize="sm" lineHeight="1.85">{card.text}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box
              bg={sectionSurface}
              border="1px solid"
              borderColor={sectionBorder}
              borderRadius="20px"
              p={{ base: 5, md: 6 }}
            >
              <Flex
                borderRadius="16px"
                overflow="hidden"
                mb={5}
                align="center"
                justify="center"
                p={4}
              >
                <Box
                  as="img"
                  src="/images/me2.jpg"
                  alt="Braeden Lyman"
                  maxWidth="100%"
                  maxHeight={{ base: '360px', md: '420px' }}
                  width="auto"
                  height="auto"
                  objectFit="fill"
                />
              </Flex>

              <VStack align="stretch" spacing={3}>
                <HStack spacing={3} color="brand.textGray">
                  <FaMapMarkerAlt />
                  <Text>Ontario, Canada</Text>
                </HStack>
                <HStack spacing={3} color="brand.textGray">
                  <FaBriefcase />
                  <Text>Available for Work</Text>
                </HStack>
                <HStack spacing={3} color="brand.textGray">
                  <FaEnvelope />
                  <Text>braedenlyman7@gmail.com</Text>
                </HStack>
              </VStack>
            </Box>
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default AboutMe;
