import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
  viewport: { once: true, amount: 0.2 }
};

function Home() {
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
        <SiteHeader sectionBorder={sectionBorder} currentPath="/" />

        <Grid
          id="home"
          templateColumns={{ base: '1fr', lg: '1.15fr 0.85fr' }}
          gap={{ base: 8, lg: 10 }}
          pt={{ base: 16, md: 24 }}
          pb={{ base: 14, md: 20 }}
          alignItems="center"
        >
          <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge
              bg="rgba(34, 211, 238, 0.16)"
              color="brand.primary"
              px={4}
              py={1.5}
              borderRadius="full"
              border="1px solid"
              borderColor="rgba(34, 211, 238, 0.34)"
              letterSpacing="0.04em"
              textTransform="uppercase"
            >
              Building products that feel premium
            </Badge>

            <MotionHeading
              mt={5}
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={{ base: '1.1', md: '1.02' }}
              maxW="760px"
              bgGradient={accentGradient}
              bgClip="text"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Full-stack Software Developer for Modern Web and Mobile Experiences.
            </MotionHeading>

            <MotionText
              mt={6}
              fontSize={{ base: 'lg', md: 'xl' }}
              color="brand.textGray"
              maxW="680px"
              lineHeight="1.8"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I design and develop high-performance digital products, ranging from portfolio websites to full production applications. My work emphasizes clean architecture, intuitive user experience, and delivering measurable results.
            </MotionText>

            <HStack mt={8} spacing={4} flexWrap="wrap">
              <Button as={RouterLink} to="/work" variant="gradient" size="lg" rightIcon={<FaArrowRight />}>
                See Projects
              </Button>
              <Button as={RouterLink} to="/contact" variant="outline" size="lg">
                Start a Conversation
              </Button>
            </HStack>
          </MotionBox>

          <MotionFlex
            direction="column"
            gap={4}
            bg={sectionSurface}
            border="1px solid"
            borderColor={sectionBorder}
            borderRadius="22px"
            p={{ base: 5, md: 6 }}
            backdropFilter="blur(12px)"
            {...sectionReveal}
          >
            <Text fontSize="sm" color="brand.textGray" textTransform="uppercase" letterSpacing="0.08em">
              Snapshot
            </Text>
            <SimpleGrid columns={2} spacing={4}>
              <Stat>
                <StatNumber color="brand.textLight">10+</StatNumber>
                <StatLabel color="brand.textGray">Deployed Projects</StatLabel>
              </Stat>
              <Stat>
                <StatNumber color="brand.textLight">MERN & PERN</StatNumber>
                <StatLabel color="brand.textGray">Core Stack</StatLabel>
              </Stat>
              <Stat>
                <StatNumber color="brand.textLight">Web & Mobile</StatNumber>
                <StatLabel color="brand.textGray">Platform Coverage</StatLabel>
              </Stat>
              <Stat>
                <StatNumber color="brand.textLight">Ontario</StatNumber>
                <StatLabel color="brand.textGray">Based In</StatLabel>
              </Stat>
            </SimpleGrid>

            <Box
              mt={1}
              borderRadius="14px"
              p={4}
              bg="rgba(2, 6, 23, 0.65)"
              border="1px solid"
              borderColor="rgba(148, 163, 184, 0.2)"
            >
              <Text color="brand.textGray" fontSize="sm" lineHeight="1.75">
                Actively seeking full-time opportunities to build impactful products across web platforms and React Native applications.
              </Text>
            </Box>
          </MotionFlex>
        </Grid>

      </Container>
    </Box>
  );
}

export default Home;
