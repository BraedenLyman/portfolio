import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  Textarea,
  Tooltip,
  VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';

const MotionBox = motion(Box);

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
  viewport: { once: true, amount: 0.2 }
};

const socialLinks = [
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:braedenlyman7@gmail.com', aria: 'Email' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/braedenlyman/', aria: 'LinkedIn' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/BraedenLyman', aria: 'GitHub' },
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/brae.lyman.1', aria: 'Facebook' }
];

function Contact() {
  const accentGradient = 'linear-gradient(128deg, #0ea5e9 0%, #14b8a6 55%, #22d3ee 100%)';
  const sectionSurface = 'rgba(15, 23, 42, 0.55)';
  const sectionBorder = 'rgba(148, 163, 184, 0.22)';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, success: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thanks for reaching out. I'll get back to you shortly."
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please email me directly at braedenlyman7@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <SiteHeader sectionBorder={sectionBorder} currentPath="/contact" />

        <MotionBox pt={{ base: 16, md: 24 }} {...sectionReveal}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            <Box>
              <Heading fontSize={{ base: '4xl', md: '6xl' }} bgGradient={accentGradient} bgClip="text" mb={4}>
                Contact Me
              </Heading>
              <Text color="brand.textGray" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" mb={6}>
                If you&apos;re looking to hire a full-time developer or need support building a portfolio site, business platform, or custom application, reach out here and include your goals, scope, and timeline.
              </Text>

              <HStack spacing={3} flexWrap="wrap">
                {socialLinks.map((link) => (
                  <Tooltip key={link.label} label={link.label} placement="top">
                    <ChakraLink href={link.href} isExternal>
                      <IconButton
                        icon={link.icon}
                        aria-label={link.aria}
                        size="lg"
                        bg="rgba(15, 23, 42, 0.6)"
                        color="brand.textGray"
                        border="1px solid"
                        borderColor={sectionBorder}
                        borderRadius="12px"
                        _hover={{ bg: 'rgba(34, 211, 238, 0.14)', color: 'brand.textLight' }}
                      />
                    </ChakraLink>
                  </Tooltip>
                ))}
              </HStack>
            </Box>

            <Box
              as="form"
              onSubmit={handleSubmit}
              bg={sectionSurface}
              border="1px solid"
              borderColor={sectionBorder}
              borderRadius="20px"
              p={{ base: 5, md: 6 }}
            >
              <VStack align="stretch" spacing={5}>
                <FormControl isRequired>
                  <FormLabel color="brand.textLight">Name</FormLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    bg="rgba(2, 6, 23, 0.62)"
                    border="1px solid"
                    borderColor="rgba(148, 163, 184, 0.24)"
                    borderRadius="12px"
                    color="brand.textLight"
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px rgba(34, 211, 238, 0.45)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="brand.textLight">Email</FormLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    bg="rgba(2, 6, 23, 0.62)"
                    border="1px solid"
                    borderColor="rgba(148, 163, 184, 0.24)"
                    borderRadius="12px"
                    color="brand.textLight"
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px rgba(34, 211, 238, 0.45)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="brand.textLight">Message</FormLabel>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    bg="rgba(2, 6, 23, 0.62)"
                    border="1px solid"
                    borderColor="rgba(148, 163, 184, 0.24)"
                    borderRadius="12px"
                    minH="150px"
                    resize="vertical"
                    color="brand.textLight"
                    _focus={{ borderColor: 'brand.primary', boxShadow: '0 0 0 1px rgba(34, 211, 238, 0.45)' }}
                  />
                </FormControl>

                <Button type="submit" variant="gradient" size="lg" isLoading={isSubmitting} loadingText="Sending">
                  Send Message
                </Button>

                {formStatus.submitted && (
                  <Box
                    p={3}
                    borderRadius="12px"
                    bg={formStatus.success ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)'}
                    border="1px solid"
                    borderColor={formStatus.success ? 'rgba(16, 185, 129, 0.35)' : 'rgba(239, 68, 68, 0.35)'}
                  >
                    <Text color={formStatus.success ? '#6ee7b7' : '#fca5a5'} fontSize="sm">
                      {formStatus.message}
                    </Text>
                  </Box>
                )}
              </VStack>
            </Box>
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Contact;
