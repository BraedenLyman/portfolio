import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import theme from './theme/theme';
import './theme/fonts/fonts.css';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/home';
import QuoteKong from './pages/workPages/quoteKong';
import AirplaneAI from './pages/workPages/airplaneAI';
import ViBDigital from './pages/workPages/vibDigital';
import LymanRentals from './pages/workPages/lymanRentals';
import WindrushTech from './pages/workPages/windrushTech';
import ParentPal from './pages/workPages/parentPal';
import Haletale from './pages/workPages/haletale';
import Integr8 from './pages/workPages/integr8functionalHealth';

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="4px"
      bg="rgba(255, 255, 255, 0.1)"
      zIndex={9999}
    >
      <Box
        height="100%"
        bg="linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)"
        width={`${scrollProgress}%`}
        transition="width 0.3s ease"
      />
    </Box>
  );
};

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
        <Route path="/work/quote-kong" element={<AnimatedRoute><QuoteKong /></AnimatedRoute>} />
        <Route path="/work/airplane-identification" element={<AnimatedRoute><AirplaneAI /></AnimatedRoute>} />
        <Route path="/work/vib-digital" element={<AnimatedRoute><ViBDigital /></AnimatedRoute>} />
        <Route path="/work/lyman-rentals" element={<AnimatedRoute><LymanRentals /></AnimatedRoute>} />
        <Route path="/work/windrush-tech" element={<AnimatedRoute><WindrushTech /></AnimatedRoute>} />
        <Route path="/work/parent-pal" element={<AnimatedRoute><ParentPal /></AnimatedRoute>} />
        <Route path="/work/haletale" element={<AnimatedRoute><Haletale /></AnimatedRoute>} />
        <Route path="/work/integr8-functional-Health" element={<AnimatedRoute><Integr8 /></AnimatedRoute>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {

    return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Router>
          <>
            <ScrollProgress />
            <ParticleBackground />
            <AnimatedRoutes />
          </> 
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;