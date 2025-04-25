import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark', 
  useSystemColorMode: false,
};

const fonts = {
    heading: `'K2D', sans-serif`,
    body: `'K2D', sans-serif`,
  };

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  modes: {
    light: {
      text: '#2D3748',
      background: '#FFFFFF',
      primary: '#3182CE',
      secondary: '#4A5568',
    },
    dark: {
      text: '#FFFFFF',
      background: '#1A202C',
      primary: '#90CDF4',
      secondary: '#CBD5E0',
    },
  },
};

const components = {
  Button: {
    variants: {
      themeAware: ({ colorMode }) => ({
        _hover: {
          transform: 'scale(1.1)',
          color: colorMode === 'light' ? 'orange.500' : 'blue.500'
        },
      }),
    }
  }
};

// Global styles
const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'modes.dark.background' : 'modes.light.background',
      color: props.colorMode === 'dark' ? 'modes.dark.text' : 'modes.light.text',
      transition: 'background-color 0.2s, color 0.2s',
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  components,
  styles,
  fonts,
});

export default theme;