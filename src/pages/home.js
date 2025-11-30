import { useState } from 'react';
import {
  Heading,
  Box,
  Flex,
  Button,
  HStack,
  VStack,
  Text,
  useBreakpointValue,
  Container,
  SimpleGrid,
  Image,
  Badge,
  Tooltip,
  IconButton,
  Link as ChakraLink,
  Input,
  Textarea,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaMapMarkerAlt, FaBriefcase, FaDownload } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

function Home() {
  const buttonSpacing = useBreakpointValue({ base: 4, md: 6 });
  const headingSize = useBreakpointValue({ base: "4xl", md: "4xl", lg: "4xl" });
  const subheadingSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  const descriptionSize = useBreakpointValue({ base: "md", md: "lg" });

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again or email me directly at braedenlyman7@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const workItems = [
    {
      title: "Quote Kong",
      link: "/work/quote-kong",
      imageUrl: "/images/QK/qk.png",
      category: "Web Dev",
      //description: "A full-featured web application for managing and sharing quotes",
    },
    {
      title: "Lyman Rentals",
      link: "/work/lyman-rentals",
      imageUrl: "/images/lr.png",
      category: "Web Dev",
      //description: "Property rental management platform with booking system",
    },
    {
      title: "Integr8 Functional Health",
      link: "/work/integr8-functional-Health",
      imageUrl: "/images/Integr8.png",
      category: "Web Dev",
      //description: "",
    },
    {
      title: "ViB Digital",
      link: "/work/vib-digital",
      imageUrl: "/images/vib.png",
      category: "Mobile App",
      //description: "Mobile application for digital marketing and brand management",
    },
    {
      title: "Windrush Technical",
      link: "/work/windrush-tech",
      imageUrl: "/images/wt.png",
      category: "Web Dev",
      //description: "Service website for a local Arborist",
    },
    {
      title: "Haletale",
      link: "/work/haletale",
      imageUrl: "/images/Haletale/ht.png",
      category: "Mobile App",
      //description: "Property managment company that makes life easier for managing properties",
    },
    {
      title: "ParentPal",
      link: "/work/parent-pal",
      imageUrl: "/images/pp.png",
      category: "Mobile App",
      //description: "Parenting app to track your childrens development",
    },
    {
      title: "Airplane Identification",
      link: "/work/airplane-identification",
      imageUrl: "/images/cwhm.png",
      category: "Machine Learning",
      //description: "AI-powered aircraft identification system using yolo",
    },
  ];

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:braedenlyman7@gmail.com",
      aria: "Email"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/braedenlyman/",
      aria: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/BraedenLyman",
      aria: "GitHub"
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://www.facebook.com/brae.lyman.1",
      aria: "Facebook"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: "braedenlyman7@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Ontario, Canada"
    },
    {
      icon: <FaBriefcase />,
      text: "Available for freelance work"
    }
  ];

  return (
    <Box overflowX="hidden" width="100%">
      {/* Hero Section */}
      <Box
        id="home"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { base: '300px', md: '600px' },
          height: { base: '300px', md: '600px' },
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          px={{ base: 4, md: 8 }}
          textAlign="center"
          maxW="800px"
          zIndex={1}
        >
          <VStack spacing={{ base: 6, md: 8 }}>
            <MotionHeading
              size={headingSize}
              bgGradient="linear(135deg, #6366f1, #8b5cf6, #06b6d4)"
              bgClip="text"
              fontWeight="800"
              letterSpacing="-0.02em"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              textShadow="0 0 50px rgba(99, 102, 241, 0.3)"
            >
              Braeden Lyman
            </MotionHeading>

            <MotionText
              fontSize={subheadingSize}
              color="brand.textGray"
              fontWeight="500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Full-Stack Software Developer
            </MotionText>

            <MotionText
              fontSize={descriptionSize}
              color="brand.textGray"
              maxW="600px"
              lineHeight="1.8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Passionate about creating innovative solutions and building exceptional digital experiences.
              I specialize in modern web technologies and love turning complex problems into simple, elegant code.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <HStack
                spacing={buttonSpacing}
                mt={{ base: 6, md: 8 }}
                flexWrap="wrap"
                justify="center"
              >
                <Button
                  onClick={() => scrollToSection('work')}
                  variant="gradient"
                  size="lg"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 7 }}
                  fontSize={{ base: "md", md: "lg" }}
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 7 }}
                  fontSize={{ base: "md", md: "lg" }}
                >
                  Get In Touch
                </Button>
              </HStack>
            </MotionBox>
          </VStack>
        </Flex>
      </Box>

      {/* About Section */}
      <Box id="about" py={{ base: 12, md: 20 }}>
        <Container maxW="1200px" px={{ base: 4, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              textAlign="center"
              mb={12}
              bgGradient="linear(135deg, #6366f1, #8b5cf6, #06b6d4)"
              bgClip="text"
              fontWeight="700"
            >
              About Me
            </Heading>
          </MotionBox>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, md: 16 }}
            alignItems="center"
          >
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              position="relative"
              overflow="hidden"
              px={{ base: 6, md: 0 }}
            >
              <Box
                position="absolute"
                top="-20px"
                left={{ base: "10px", md: "-20px" }}
                right={{ base: "-10px", md: "20px" }}
                bottom="20px"
                bgGradient="linear(135deg, #6366f1, #8b5cf6, #06b6d4)"
                borderRadius="20px"
                opacity={0.3}
                zIndex={0}
              />
              <Image
                src="/images/me2.jpg"
                alt="picture of Braeden"
                objectFit="cover"
                width="100%"
                maxW={{ base: "300px", md: "400px" }}
                height="auto"
                aspectRatio={3 / 4}
                borderRadius="20px"
                boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"
                mx="auto"
                position="relative"
                zIndex={1}
              />
            </MotionBox>

            <MotionVStack
              align="flex-start"
              spacing={6}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.8"
                color="brand.textGray"
              >
                Hi, I'm Braeden Lyman — a software developer passionate about
                crafting fast, intuitive, and visually polished apps and websites.
                With React, React Native, and JavaScript, I build responsive web
                applications and cross-platform mobile experiences that prioritize
                clean code, smooth UX, and scalable architecture.
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.8"
                color="brand.textGray"
              >
                Whether I'm collaborating with a team or bringing a solo project to
                life, I thrive on turning ideas into functional, user-friendly digital
                solutions.
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.8"
                color="brand.textGray"
              >
                Let's create something great together.
              </Text>

              <HStack mt={4}>
                <Tooltip label="Download Resume" placement="top">
                  <IconButton
                    as="a"
                    href="/Resume/Braeden-Lyman-Resume.pdf"
                    download="Braeden_Lyman_Resume.pdf"
                    icon={<FaDownload />}
                    aria-label="Download Resume"
                    size="lg"
                    fontSize="24px"
                    bg="rgba(255, 255, 255, 0.05)"
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    color="brand.primary"
                    borderRadius="12px"
                    _hover={{
                      transform: 'translateY(-3px)',
                      bg: 'brand.primary',
                      color: 'white',
                      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'
                    }}
                    _active={{ transform: 'scale(0.95)' }}
                    transition="all 0.3s ease"
                  />
                </Tooltip>
              </HStack>
            </MotionVStack>
          </SimpleGrid>

          {/* Skills Section */}
          <Box mt={{ base: 16, md: 24 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Heading
                fontSize={{ base: "3xl", md: "4xl" }}
                textAlign="center"
                mb={12}
                bgGradient="linear(135deg, #6366f1, #8b5cf6, #06b6d4)"
                bgClip="text"
                fontWeight="700"
              >
                Skills & Technologies
              </Heading>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {[
                {
                  icon: "🚀",
                  title: "Frontend Development",
                  description: "React, Next.js, JavaScript, TypeScript, HTML/CSS"
                },
                {
                  icon: "⚙️",
                  title: "Backend Development",
                  description: "Node.js, Express, RESTful APIs, Database Design"
                },
                {
                  icon: "☁️",
                  title: "Cloud & DevOps",
                  description: "Firebase, Git, CI/CD, Deployment Automation"
                },
                {
                  icon: "📱",
                  title: "Mobile Development",
                  description: "Cross-platform apps with React Native, iOS & Android"
                }
              ].map((skill, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Box
                    bg="rgba(255, 255, 255, 0.05)"
                    borderRadius="20px"
                    p={6}
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    transition="all 0.3s ease"
                    position="relative"
                    overflow="hidden"
                    h="100%"
                    _hover={{
                      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <Text fontSize="3xl" mb={3}>
                      {skill.icon}
                    </Text>
                    <Heading size="md" mb={3} color="brand.textLight">
                      {skill.title}
                    </Heading>
                    <Text color="brand.textGray" lineHeight="1.6" fontSize="sm">
                      {skill.description}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="work" py={{ base: 12, md: 20 }}>
        <Container maxW="1200px" px={{ base: 4, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              textAlign="center"
              mb={4}
              bgGradient="linear(135deg, #6366f1, #8b5cf6, #06b6d4)"
              bgClip="text"
              fontWeight="700"
            >
              Featured Projects
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              color="brand.textGray"
              mb={12}
            >
              Explore my portfolio of web and mobile applications
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
            {workItems.map((project, index) => (
              <MotionBox
                key={index}
                as={Link}
                to={project.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Box
                  bg="rgba(255, 255, 255, 0.05)"
                  borderRadius="20px"
                  overflow="hidden"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.1)"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                    borderColor: 'brand.primary',
                    transform: 'translateY(-10px)'
                  }}
                  cursor="pointer"
                  h="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Box
                    position="relative"
                    height="250px"
                    overflow="hidden"
                    bg="linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)"
                  >
                    <Flex
                      align="center"
                      justify="center"
                      h="100%"
                      fontSize="6xl"
                      color="white"
                      position="relative"
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        position="absolute"
                        top={0}
                        left={0}
                        transition="all 0.3s ease"
                        _groupHover={{
                          transform: 'scale(1.05)'
                        }}
                      />
                      <Text
                        fontSize="6xl"
                        position="relative"
                        zIndex={2}
                        textShadow="0 2px 10px rgba(0,0,0,0.3)"
                      >
                        {project.icon}
                      </Text>
                    </Flex>
                  </Box>

                  <Box p={6} flex="1" display="flex" flexDirection="column">
                    <HStack justify="space-between" align="start" mb={3}>
                      <Heading size="lg" color="brand.textLight">
                        {project.title}
                      </Heading>
                      <Badge
                        bg="rgba(99, 102, 241, 0.2)"
                        color="brand.primary"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="600"
                        textTransform="uppercase"
                      >
                        {project.category}
                      </Badge>
                    </HStack>

                    <Text
                      color="brand.textGray"
                      lineHeight="1.6"
                      mb={4}
                      flex="1"
                    >
                      {project.description}
                    </Text>

                    <Text
                      color="brand.primary"
                      fontWeight="600"
                      fontSize="sm"
                      transition="all 0.3s ease"
                    >
                      View Project →
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={{ base: 12, md: 20 }}>
        <Container maxW="1200px" px={{ base: 4, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              textAlign="center"
              mb={4}
              bgGradient="linear(135deg, #6366f1, #8b5cf6, #06b6d4)"
              bgClip="text"
              fontWeight="700"
            >
              Get In Touch
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              color="brand.textGray"
              mb={12}
            >
              Let's connect and build something amazing together
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="start">
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="20px"
                p={{ base: 6, md: 8 }}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                h="100%"
              >
                <Heading size="lg" mb={6} color="brand.textLight">
                  Let's Connect
                </Heading>

                <VStack align="stretch" spacing={6} mb={8}>
                  {contactInfo.map((info, index) => (
                    <Flex key={index} align="center" gap={4}>
                      <Box
                        color="brand.primary"
                        fontSize="xl"
                        minW="24px"
                      >
                        {info.icon}
                      </Box>
                      <Text color="brand.textGray" fontSize={{ base: "sm", md: "md" }}>
                        {info.text}
                      </Text>
                    </Flex>
                  ))}
                </VStack>

                <HStack spacing={4} flexWrap="wrap">
                  {socialLinks.map((link, index) => (
                    <Tooltip key={index} label={link.label} placement="top">
                      <ChakraLink href={link.href} isExternal>
                        <IconButton
                          icon={link.icon}
                          aria-label={link.aria}
                          size="lg"
                          fontSize="20px"
                          bg="rgba(255, 255, 255, 0.05)"
                          backdropFilter="blur(10px)"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.1)"
                          color="brand.textGray"
                          borderRadius="12px"
                          _hover={{
                            transform: 'translateY(-3px)',
                            bg: 'brand.primary',
                            color: 'white',
                            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'
                          }}
                          _active={{ transform: 'scale(0.95)' }}
                          transition="all 0.3s ease"
                        />
                      </ChakraLink>
                    </Tooltip>
                  ))}
                </HStack>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                as="form"
                onSubmit={handleSubmit}
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="20px"
                p={{ base: 6, md: 8 }}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
              >
                <VStack spacing={6} align="stretch">
                  <FormControl isRequired>
                    <FormLabel color="brand.textLight" fontWeight="600">
                      Name
                    </FormLabel>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      borderRadius="10px"
                      p={6}
                      color="brand.textLight"
                      backdropFilter="blur(10px)"
                      _focus={{
                        borderColor: 'brand.primary',
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                      }}
                      _hover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="brand.textLight" fontWeight="600">
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      borderRadius="10px"
                      p={6}
                      color="brand.textLight"
                      backdropFilter="blur(10px)"
                      _focus={{
                        borderColor: 'brand.primary',
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                      }}
                      _hover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="brand.textLight" fontWeight="600">
                      Message
                    </FormLabel>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      borderRadius="10px"
                      p={6}
                      color="brand.textLight"
                      backdropFilter="blur(10px)"
                      minH="120px"
                      resize="vertical"
                      _focus={{
                        borderColor: 'brand.primary',
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                      }}
                      _hover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    w="100%"
                    py={7}
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>

                  {formStatus.submitted && (
                    <Box
                      mt={4}
                      p={4}
                      borderRadius="10px"
                      bg={formStatus.success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'}
                      border="1px solid"
                      borderColor={formStatus.success ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}
                    >
                      <Text
                        color={formStatus.success ? '#22c55e' : '#ef4444'}
                        fontSize="sm"
                        textAlign="center"
                      >
                        {formStatus.message}
                      </Text>
                    </Box>
                  )}
                </VStack>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;