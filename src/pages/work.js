import { useState } from 'react';
import { 
  Heading, 
  Box, 
  Flex, 
  Divider, 
  VStack, 
  Link as ChakraLink,
  Image
} from "@chakra-ui/react";
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

function Work() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const workItems = [
    { title: "Quote Kong", link: "/work/quote-kong", imageUrl: "/images/qk.png" },
    { title: "Airplane Identification", link: "#", imageUrl: "/images/ai.png" },
    { title: "ViB Digital", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+3" },
    { title: "Lyman Rentals", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+4" },
    { title: "Windrush Technical", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+5" },
    { title: "ParentPal", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+6" }
  ];

  const fadeIn = keyframes`
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  `;

  return (
    <Box 
      position="fixed"
      bottom="0"    
      left="0"      
      right="0"
      display="flex"
      justifyContent="flex-start"
      zIndex="1"  
    >
      <Flex 
        width="100%" 
      >
        <Box 
          width="750px" 
          height="514px" 
          position="sticky" 
          bottom="0"
          borderRadius="0 50px 0 0"
          overflow="hidden"
          alignSelf="flex-end"
        >
          {hoveredProject && (
            <Image 
              src={hoveredProject.imageUrl} 
              alt={hoveredProject.title}
              objectFit="cover" 
              width="100%" 
              height="100%"
              animation={`${fadeIn} 0.3s ease-out forwards`}
              transition="all 0.3s ease-out"
              _hover={{ transform: "scale(1.02)" }}
            />
          )}
        </Box>
        
        <Flex 
          direction="column" 
          ml={4}
          alignSelf="flex-end"
          mb={4}          
        >
          <Flex justify="space-between" align="center">
            <Heading fontSize="48px">My Work</Heading>
            <Heading fontSize="30px" alignSelf="flex-end">
              {workItems.length}
            </Heading>
          </Flex>
          
          <Divider 
            width="450px" 
            borderColor="white" 
            borderWidth="2px" 
            borderRadius="10px" 
            my={4}
          />
          
          <Box 
            maxHeight="40vh" 
            overflowY="auto" 
            width="450px" 
            pr={4}
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'white',
                borderRadius: '24px',
              },
            }}
          >
            <VStack 
              spacing={0} 
              divider={
                <Divider 
                  borderColor="white" 
                  borderWidth="1px" 
                  borderRadius="10px" 
                />
              }
              align="stretch"
            >
              {workItems.map((item, index) => (
                <ChakraLink
                  key={index} 
                  as={Link}
                  to={item.link}
                  href={item.link}
                  display="flex" 
                  alignItems="center" 
                  width="100%" 
                  py={3}
                  _hover={{ 
                    textDecoration: "none", 
                    transform: "translateX(-5px)",
                  }}
                  transition="all 0.2s"
                  onMouseEnter={() => setHoveredProject(item)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Box px={3}>
                    <Heading fontSize="20px">{item.title}</Heading>
                  </Box>
                </ChakraLink>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Work;