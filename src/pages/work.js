import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SiteHeader from '../components/SiteHeader';
import WorkGrid from '../components/WorkGrid';
import workItems from '../data/workItems';

function Work() {
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
        <SiteHeader sectionBorder={sectionBorder} currentPath="/work" />

        <Box pt={{ base: 16, md: 24 }} pb={{ base: 14, md: 20 }}>
          <Heading fontSize={{ base: '4xl', md: '6xl' }} bgGradient={accentGradient} bgClip="text" mb={4}>
            Work
          </Heading>
          <Text color="brand.textGray" fontSize={{ base: 'lg', md: 'xl' }} maxW="760px" lineHeight="1.8" mb={10}>
            Client websites, shipped products, and case studies focused on practical outcomes, clean execution, and durable user experience.
          </Text>

          <WorkGrid
            workItems={workItems}
            sectionSurface={sectionSurface}
            sectionBorder={sectionBorder}
            accentGradient={accentGradient}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Work;
