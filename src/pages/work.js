import { useState } from 'react';
import { Heading, Box, Flex, Divider, VStack, Link, Image } from "@chakra-ui/react";

function Work() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const workItems = [
    { title: "Quote Kong", link: "#", imageUrl: "/images/qk.png" },
    { title: "Project 2", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+2" },
    { title: "Project 3", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+3" },
    { title: "Project 4", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+4" },
    { title: "Project 5", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+5" },
    { title: "Project 6", link: "#", imageUrl: "https://via.placeholder.com/400x300?text=Project+6" }
  ];

  return (
    <Box minH="60vh">
      <Flex
        direction="row" // Changed to row to accommodate left image
        justify="space-between"
        style={{ marginRight: "200px", marginTop: "200px" }}
      >
        {/* Image container on the left */}
        <Box width="750px" height="514px" position="sticky" top="200px">
          {hoveredProject ? (
            <Image 
              src={hoveredProject.imageUrl} 
              alt={hoveredProject.title}
              objectFit="cover"
              width="100%"
              height="100%"
              borderRadius="0px 50px 0px 0px"
              opacity={0}
              animation="fadeIn 0.3s ease-out forwards"
              css={{
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "scale(0.95)" },
                  "100%": { opacity: 1, transform: "scale(1)" }
                }
              }}
              _hover={{ transform: "scale(1.02)" }}
              transition="all 0.3s ease-out"
            />
          ) : (<Box/>
          )}
        </Box>

        {/* Projects list on the right */}
        <Flex direction="column" align="flex-end">
          <div style={{display: "flex"}}>
            <Heading size="2xl" mr="60">
              My Work
            </Heading>
            <Heading size="lg" style={{alignContent: "flex-end"}}>
              {workItems.length}
            </Heading>
          </div>
          <Divider 
            width="450px"
            borderColor="white"
            borderWidth="2px"
            borderRadius="10px"
            mt={2}
            mb={4} 
          />
          {/* Scrollable work items container */}
          <Box 
            maxH="40vh" 
            overflowY="auto" 
            width="450px"
            pr={4}
          >
            <VStack spacing={0} align="stretch" divider={<Divider borderColor="white" borderWidth="1px" borderRadius="10px"/>}>
              {workItems.map((item, index) => (
                <Link 
                  key={index} 
                  as={Link}
                  href={item.link} 
                  _hover={{ 
                    textDecoration: "none",
                    transform: "translateX(-5px)"
                  }}
                  transition="all 0.2s"
                  onMouseEnter={() => setHoveredProject(item)}
                  onMouseLeave={() => setHoveredProject(null)}
                  width="100%"
                  py={4} 
                  display="flex"
                  alignItems="center"
                >
                  <Box p={2}>
                    <Heading
                      size="md" // Changed from "md" to "xl" for larger text
                    >
                      {item.title}
                    </Heading>
                  </Box>
                </Link>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Work;