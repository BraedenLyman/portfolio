import { useColorMode, Tooltip, IconButton } from '@chakra-ui/react';
import { LuSun, LuMoon } from 'react-icons/lu';
import React from 'react';

const ColorModeToggle = React.forwardRef((props, ref) => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Tooltip label="Change theme color">
      <IconButton 
        ref={ref} 
        icon={colorMode === 'light' ? <LuMoon /> : <LuSun />} 
        onClick={toggleColorMode} 
        aria-label="Toggle theme color mode" 
        variant="ghost" 
        fontSize="24px"
        _hover={{
          transform: 'scale(1.1)',
          color: colorMode === 'light' ? 'purple.500' : 'yellow.400'
        }}
        _active={{
          transform: 'scale(0.95)'
        }}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        {...props} />
    </Tooltip>
  );
});

ColorModeToggle.displayName = 'ColorModeToggle';

export default ColorModeToggle;