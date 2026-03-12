import { Badge, Box, Flex, Heading, HStack, Link as ChakraLink, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

function WorkGrid({
  workItems,
  sectionSurface,
  sectionBorder,
  accentGradient
}) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
      {workItems.map((project) => (
        <MotionBox key={project.title} whileHover={{ y: -8 }} transition={{ duration: 0.24 }}>
          <Box
            as={project.external ? ChakraLink : Link}
            href={project.external ? project.link : undefined}
            to={!project.external ? project.link : undefined}
            isExternal={project.external ? true : undefined}
            rel={project.external ? 'noopener noreferrer' : undefined}
            bg={sectionSurface}
            border="1px solid"
            borderColor={sectionBorder}
            borderRadius="20px"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            minH="390px"
            textDecoration="none"
            _hover={{ textDecoration: 'none', borderColor: 'rgba(34, 211, 238, 0.5)' }}
          >
            <Box
              h={{ base: '220px', md: '250px' }}
              bg={accentGradient}
              position="relative"
              overflow="hidden"
            >
              {project.imageUrl ? (
                <Box
                  as="img"
                  src={project.imageUrl}
                  alt={project.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              ) : (
                <Flex align="center" justify="center" h="100%">
                  <Text fontWeight="800" color="white" fontSize="5xl" letterSpacing="0.04em">
                    {project.initials}
                  </Text>
                </Flex>
              )}
              <Badge
                position="absolute"
                top={3}
                left={3}
                bg="rgba(2, 6, 23, 0.78)"
                color="brand.textLight"
                border="1px solid"
                borderColor="rgba(203, 213, 225, 0.28)"
              >
                {project.category}
              </Badge>
            </Box>

            <VStack align="start" spacing={3} p={5} flex={1}>
              <Heading size="md" color="brand.textLight">{project.title}</Heading>
              <Text color="brand.textGray" fontSize="sm" lineHeight="1.75" flex={1}>
                {project.description}
              </Text>
              <HStack color="brand.primary" fontWeight="700" fontSize="sm" spacing={2}>
                <Text>{project.cta || 'View Project'}</Text>
                {project.external ? <FaExternalLinkAlt size={12} /> : <FaArrowRight size={12} />}
              </HStack>
            </VStack>
          </Box>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}

export default WorkGrid;
