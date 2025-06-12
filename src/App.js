import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box, Flex, Spacer, IconButton, Tooltip, Image, Center } from '@chakra-ui/react'; // Removed Spinner
import { motion, AnimatePresence } from 'framer-motion';
import theme from './theme/theme';
import './theme/fonts/fonts.css';
import ColorToggle from './theme/colorModeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import Home from './pages/home';
import Work from './pages/work';
import About from './pages/about';
import Contact from './pages/contact';
import Navigation from './pages/navigation';
import QuoteKong from './pages/workPages/quoteKong';
import AirplaneAI from './pages/workPages/airplaneAI';
import ViBDigital from './pages/workPages/vibDigital';
import LymanRentals from './pages/workPages/lymanRentals';
import WindrushTech from './pages/workPages/windrushTech';
import ParentPal from './pages/workPages/parentPal';
import Haletale from './pages/workPages/haletale';

const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
        <Route path="/work" element={<AnimatedRoute><Work /></AnimatedRoute>} />
        <Route path="/about" element={<AnimatedRoute><About /></AnimatedRoute>} />
        <Route path="/contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
        <Route path="/work/quote-kong" element={<AnimatedRoute><QuoteKong /></AnimatedRoute>} />
        <Route path="/work/airplane-identification" element={<AnimatedRoute><AirplaneAI /></AnimatedRoute>} />
        <Route path="/work/vib-digital" element={<AnimatedRoute><ViBDigital /></AnimatedRoute>} />
        <Route path="/work/lyman-rentals" element={<AnimatedRoute><LymanRentals /></AnimatedRoute>} />
        <Route path="/work/windrush-tech" element={<AnimatedRoute><WindrushTech /></AnimatedRoute>} />
        <Route path="/work/parent-pal" element={<AnimatedRoute><ParentPal /></AnimatedRoute>} />
        <Route path="/work/haletale" element={<AnimatedRoute><Haletale /></AnimatedRoute>} />
      </Routes>
    </AnimatePresence>
  );
};

// --- Updated LoadingScreen Component ---
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--chakra-colors-chakra-body-bg)', // Use Chakra's body background color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <Center flexDirection="column">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }} // Fade in (0 to 1) then fade out (1 to 0)
          transition={{
            duration: 1.5, // Total duration for one cycle of fade in and out
            repeat: Infinity, // Repeat indefinitely
            repeatDelay: 0.5 // Delay before repeating the animation
          }}
        >
          <Image
            src='/images/logo.png' // Your logo image path
            alt="Loading Logo"
            maxH="150px" // Adjust size as needed
            maxW="150px"
          />
        </motion.div>
        {/* You can keep or remove "Loading..." text here */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.div>
      </Center>
    </motion.div>
  );
};
// --- End Updated LoadingScreen Component ---

function App() {
    const [showNav, setShowNav] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Increased duration to allow logo animation to play a few times

      return () => clearTimeout(timer);
    }, []);

    return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
      <Router>
        {/* Loading Screen */}
          <AnimatePresence>
            {isLoading && <LoadingScreen />}
          </AnimatePresence>

          {/* Main App Content (only visible after loading) */}
          {!isLoading && (
          <>
            <Box 
              p={4} 
              position="sticky" 
              top="0" 
              zIndex="sticky"
              width="100%"
            >
              <Flex align="flex-start">
                <Link to="/">
                  <Image
                    src='/images/logo.png'
                    maxH="100px"
                    alt="Logo"
                    mt={0}
                  />
                </Link>
                <Spacer />

                <Flex align="flex-start" mt={0}>
                  <ColorToggle />
                  <Tooltip label={showNav ? "Close navigation" : "Open navigation"}>
                    <IconButton
                      icon={showNav ? <FiX /> : <FiMenu />}
                      aria-label="Toggle menu"
                      variant="ghost"
                      onClick={toggleNav}
                      fontSize="24px"
                      _hover={{ transform: 'scale(1.1)',
                        color: showNav ? 'red.500' : 'blue.500'
                      }}
                      mt={0}
                    />
                  </Tooltip>
                </Flex>
              </Flex>
            </Box>

            {/* Framer Motion Navigation */}
            <AnimatePresence>
              {showNav && (
                <motion.div
                  initial={{ y: -1000, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -1000, opacity: 0 }}
                  transition={{ type: 'spring', damping: 30, stiffness: 150 }}
                  style={{
                    zIndex: 10,
                    position: 'fixed',
                    top: '0',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
                    paddingTop: '80px',
                    overflow: 'auto'
                  }}
                >
                  <Navigation onClose={() => setShowNav(false)} />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatedRoutes />
            </>
          )}
          </Router>
      </ChakraProvider>
    </>
  );
}

export default App;