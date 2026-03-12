import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About Me', to: '/about-me' },
  { label: 'Contact Me', to: '/contact' }
];

function SiteHeader({ sectionBorder, currentPath = '/' }) {
  return (
    <Box
      position="sticky"
      top={3}
      zIndex={20}
      mt={4}
      bg="rgba(2, 6, 23, 0.8)"
      border="1px solid"
      borderColor={sectionBorder}
      borderRadius="16px"
      backdropFilter="blur(14px)"
      px={{ base: 4, md: 6 }}
      py={3}
    >
      <Flex align={{ base: 'start', md: 'center' }} justify="space-between" gap={4} direction={{ base: 'column', md: 'row' }}>
        <VStack align="start" spacing={0}>
          <Text fontWeight="700" fontSize="lg" color="brand.textLight">Braeden Lyman</Text>
          <Text fontSize="xs" letterSpacing="0.08em" textTransform="uppercase" color="brand.textGray">Full-Stack Developer</Text>
        </VStack>

        <HStack spacing={2} flexWrap="wrap">
          {navItems.map((item) => {
            const isActive = item.to === currentPath;
            return (
              <Button
                key={item.label}
                as={RouterLink}
                to={item.to}
                variant="ghost"
                color={isActive ? 'brand.textLight' : 'brand.textGray'}
                _hover={{ color: 'brand.textLight' }}
              >
                {item.label}
              </Button>
            );
          })}
        </HStack>

        <Button
          as="a"
          href="/Resume/Braeden-Lyman-Resume.pdf"
          download="Braeden-Lyman-Resume.pdf"
          size={{ base: 'sm', md: 'md' }}
          variant="outline"
          leftIcon={<FaDownload />}
        >
          Resume
        </Button>
      </Flex>
    </Box>
  );
}

export default SiteHeader;
