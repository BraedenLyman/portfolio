import React, {useState} from 'react';
import { ChakraProvider, ColorModeScript, Box, Flex, Spacer, IconButton, Tooltip } from '@chakra-ui/react';
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
        <Box p={4}>
          <Flex align="center">
            <Spacer />

            {/* Theme Color Toggle */}
            <ColorToggle />

            {/* Menu Button */}
            <Tooltip label={showNav ? "Close navigation" : "Open navigation"}>
              <IconButton 
                icon={showNav ? <FiX /> : <FiMenu />}  
                aria-label={showNav ? "Close menu" : "Open menu"}  
                variant="ghost" 
                onClick={toggleNav}
                fontSize="24px"
                _hover={{
                  transform: 'scale(1.1)',
            
                  color: showNav ? 'red.500' : 'blue.500' // color change based on state
                }}
                _active={{
                  transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              />
            </Tooltip>
          </Flex>
        </Box>

        {showNav ? <Navigation /> : <Home />}
      </ChakraProvider>
    </>
  );
}

export default App;