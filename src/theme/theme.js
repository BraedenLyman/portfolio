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
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    secondary: '#f59e0b',
    bgDark: '#0f172a',
    bgDarker: '#020617',
    textLight: '#f8fafc',
    textGray: '#94a3b8',
    glowColor: 'rgba(99, 102, 241, 0.3)',
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
      text: '#f8fafc',
      background: '#0f172a',
      backgroundDarker: '#020617',
      primary: '#6366f1',
      secondary: '#94a3b8',
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
      gradient: {
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '50px',
        fontWeight: '600',
        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-3px)',
          boxShadow: '0 15px 40px rgba(99, 102, 241, 0.6)',
        },
      },
      outline: {
        background: 'transparent',
        color: 'brand.textLight',
        border: '2px solid',
        borderColor: 'brand.primary',
        padding: '1rem 2rem',
        borderRadius: '50px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        _hover: {
          background: 'brand.primary',
          transform: 'translateY(-3px)',
        },
      },
    }
  }
};

// Global styles
const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? '#0f172a' : '#FFFFFF',
      color: props.colorMode === 'dark' ? '#f8fafc' : '#2D3748',
      transition: 'background-color 0.2s, color 0.2s',
      overflow: 'auto',
    },
    '*': {
      scrollBehavior: 'smooth',
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