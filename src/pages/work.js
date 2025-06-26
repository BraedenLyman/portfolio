import { useState } from 'react';
import { 
  Heading, 
  Box, 
  Flex, 
  Divider, 
  VStack, 
  Link as ChakraLink,
  Image,
  useColorModeValue,
  useBreakpointValue,
  Text
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Work() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const dividerColor = useColorModeValue("gray.300", "white");
  const categoryColor = useColorModeValue("gray.600", "gray.400");
  const isMobile = useBreakpointValue({base: true, md: true, lg: false, xl: false});

  const workItems = [
    { title: "Quote Kong", link: "/work/quote-kong", imageUrl: "/images/QK/qk.png", category: "Web Dev" },
    { title: "Airplane Identification", link: "/work/airplane-identification", imageUrl: "/images/cwhm.png", category: "Machine Learning" },
    { title: "ViB Digital", link: "/work/vib-digital", imageUrl: "/images/vib.png", category: "Mobile App" },
    { title: "Lyman Rentals", link: "/work/lyman-rentals", imageUrl: "/images/lr.png", category: "Web Dev" },
    { title: "Windrush Technical", link: "/work/windrush-tech", imageUrl: "/images/wt.png", category: "Web Dev" },
    { title: "ParentPal", link: "/work/parent-pal", imageUrl: "/images/pp.png", category: "Mobile App" },
    { title: "Haletale", link: "/work/haletale", imageUrl: "/images/Haletale/ht.png", category: "Mobile App"}
  ];

  return (
    <Flex  
      position={isMobile ? "relative" : "fixed"}
      bottom="0"    
      zIndex="1"  
      width={{base: "95%", md: "95%", lg: "98%", xl: "85%"}} 
      flexDirection={{base: "column", md: "column", lg: "row"}}
      left={{base: "50%", md: "50%", lg: "auto"}}
      transform={{base: "translateX(-50%)", md: "translateX(-50%)", lg: "auto"}}
    >
     
      <Box 
        width={{base: "80%", md: "80%", lg: "60%"}}
        height={{base: "200px", md: "200px", lg: "550px"}}
        ml="auto"
        mr="auto"
        position={isMobile ? "relative" : "sticky"} 
        bottom="0"
        borderRadius={{base: "10", md: "10", lg: "0 50px 0 0"}}
        overflow="hidden"
        alignSelf="flex-end"
      >
        {!isMobile && hoveredProject && (
          <Image 
            src={hoveredProject?.imageUrl} 
            alt={hoveredProject?.title}
            objectFit="fill"
            width="100%" 
            height="100%"
            _hover={{ transform: "scale(1.02)" }}
          />
        )}
      </Box>

      <Flex 
        direction="column"   
        ml={{base: 0, md: 0, lg: 50}}
        alignSelf="center"
        width={{base: "100%", md: "100%", lg: "40%"}}
        px={{base: 4, md: 0}} 
      >
        <Flex justify="space-between" align="center" mb="-2" mt={{base: 10, md: 10, lg: 0}}>
          <Heading fontSize="48px">My Work</Heading>
          <Heading fontSize="30px" alignSelf="flex-end">
            {workItems.length}
          </Heading>
        </Flex>
        
        <Divider 
          width="100%" 
          borderColor={dividerColor} 
          borderWidth="1px" 
          borderRadius="10px" 
          my={4}
        />
        <Box 
          flex="1"
          overflowY="auto"
          maxHeight={{base: "400px", md: "400px", lg: "400px"}}
          pr={3}
        >
          <VStack 
            divider={
              <Divider 
                borderColor={dividerColor}
                borderWidth="1px" 
                borderRadius="10px" 
              />
            }
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
                px={3}
                _hover={{ 
                  textDecoration: "none", 
                  transform: "translateX(-5px)",
                }}
                transition="all 0.2s"
                onMouseEnter={() => setHoveredProject(item)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Box width="100%">
                  <Flex justify="space-between" align="center">
                    <Heading fontSize="28px">{item.title}</Heading>
                    <Text 
                      align="right"
                      fontSize="sm" 
                      color={categoryColor}
                      textTransform="uppercase"
                    >
                      {item.category}
                    </Text>
                  </Flex>
              </Box>
              </ChakraLink>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Work;