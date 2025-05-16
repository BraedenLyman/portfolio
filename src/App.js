import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box, Flex, Spacer, IconButton, Tooltip, Slide } from '@chakra-ui/react';
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

function App() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }
  
    return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
      <Router>
          {/* Header stays visible */}
          <Box p={4} position="relative" zIndex={20}>
            <Flex align="center">
              <Spacer />
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
                />
              </Tooltip>
            </Flex>
          </Box>

          {/* Navigation with built-in close button */}
          <Slide 
            direction="left" 
            in={showNav}
            style={{ 
              zIndex: 10,
              position: 'fixed',
              top: '80px',
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--chakra-colors-chakra-body-bg)'
            }}
          >
            <Navigation onClose={() => setShowNav(false)} />
          </Slide>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work/quote-kong" element={<QuoteKong />} />
            </Routes>
          </Router>
      </ChakraProvider>
    </>
  );
}

export default App;