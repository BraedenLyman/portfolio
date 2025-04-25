import React, {useState} from 'react';
import { ChakraProvider, ColorModeScript, Box, Flex, Spacer, IconButton, Tooltip, Slide } from '@chakra-ui/react';
import theme from './theme/theme';
import './theme/fonts/fonts.css';
import ColorToggle from './theme/colorModeToggle';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Home from './pages/home';
import Navigation from './pages/navigation';

function App() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }
  
    return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
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
          <Navigation />
        </Slide>

        {!showNav && <Home />}
      </ChakraProvider>
    </>
  );
}

export default App;