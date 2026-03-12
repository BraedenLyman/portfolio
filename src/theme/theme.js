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
    primary: '#0ea5e9',
    primaryDark: '#0284c7',
    secondary: '#14b8a6',
    bgDark: '#020617',
    bgDarker: '#020617',
    textLight: '#f8fafc',
    textGray: '#cbd5e1',
    glowColor: 'rgba(14, 165, 233, 0.28)',
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
      primary: '#0ea5e9',
      secondary: '#cbd5e1',
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
        background: 'linear-gradient(135deg, #0ea5e9, #14b8a6, #22d3ee)',
        color: 'white',
        padding: '0.95rem 1.75rem',
        borderRadius: '14px',
        fontWeight: '600',
        boxShadow: '0 12px 28px rgba(14, 165, 233, 0.28)',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: '0 16px 34px rgba(14, 165, 233, 0.38)',
        },
      },
      outline: {
        background: 'transparent',
        color: 'brand.textLight',
        border: '1px solid',
        borderColor: 'brand.primary',
        padding: '0.95rem 1.75rem',
        borderRadius: '14px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        _hover: {
          background: 'rgba(14, 165, 233, 0.12)',
          transform: 'translateY(-2px)',
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
