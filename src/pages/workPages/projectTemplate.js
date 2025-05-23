import { Heading, Box, Image, Divider, Text, Grid, Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ProjectTemplate = ({
    imageUrl,
    title,
    category,
    year,
    description,
    children,
    nextProject, 
    prevProject
}) => {

    const textColor = useColorModeValue("gray.800", "white");
    const dividerColor = useColorModeValue("gray.300", "white");
    const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
    const iconColor = useColorModeValue("gray.600", "white");

    return (
        <Box maxW={{ base: "100%", md: "container.xl" }} mx="auto">
            <Box position="relative">
                <Image 
                    src={imageUrl}
                    objectFit="cover"
                    width={{base: "87%", md: "65%", lg: "65%", xl: "65%", }}
                    height={{base: "100%", md: "100%", lg: "100%", xl: "520px"}}
                    alt={title}
                    borderRadius={{base: "25px", md: "0px 0px 50px 50px", lg: "0px 0px 50px 50px", xl: "0px 0px 50px 50px"}}
                    mx="auto"
                    display="block"
                    marginTop={{base: "0", md: "-132px", lg: "-132px", xl: "-132px"}}
                /> 
                <Box 
                    width={{ base: "87%", md: "85%", lg: "85%", xl: "65%" }}
                    transform={{base: "translateX(8%)", md: "translateX(9%)", lg: "translateX(9%)", xl: "translateX(27%)"}}
                    mt={8}
                >
                    <Heading            
                        color={textColor}
                        size="2xl"
                    >
                        {title}
                    </Heading>
                    
                    <Divider 
                        borderColor={dividerColor}
                        borderWidth="1px" 
                        borderRadius="10px" 
                        my={4}
                        mx="auto"
                    />

                    <Grid 
                        templateColumns={{ base: "1fr 1fr", md: "20% 20% 60%" }}
                        gap={10}
                        alignItems="flex-start"
                    >
                        <Box>
                            <Heading size="md" mb="2" color={textColor}>Category</Heading>
                            <Heading size="md" mb="2" color={textColor}>Year</Heading>
                        </Box>
                        <Box>
                            <Text mb="2" color={textColor}>{category}</Text>
                            <Text mb="2" color={textColor}>{year}</Text>
                        </Box>
                        <Box gridColumn={{base: "1 / span 2", md: "auto"}} mr={{md: "5"}}>
                            <Text color={textColor}>{description}</Text>
                            {children}
                        </Box>
                    </Grid>

                    <Flex justify="space-between" mt="16" mb="8" align="center">
                        {prevProject && (
                            <Flex align="center" as="a" href={prevProject.url} textDecoration="none" _hover={{ textDecoration: "none"}}>
                                <IconButton icon={<ChevronLeftIcon />} aria-label="Previous Project" variant="ghost" color={iconColor} fontSize="2xl" mr="2"/>
                                <Box textAlign="left">
                                    <Text fontSize="sm" color={secondaryTextColor}>Previous</Text>
                                    <Text color={secondaryTextColor}>{prevProject.name}</Text>
                                </Box>
                            </Flex>
                        )}
                        {nextProject && (
                            <Flex align="center" as="a" href={nextProject.url} textDecoration="none" _hover={{ textDecoration: "none" }}>
                                <Box textAlign="right">
                                    <Text fontSize="sm" color={secondaryTextColor}>Next</Text>
                                    <Text color={secondaryTextColor}>{nextProject.name}</Text>
                                </Box>
                                <IconButton icon={<ChevronRightIcon />} aria-label="Next Project" variant="ghost" color={iconColor} fontSize="2xl" mr="2"/>
                            </Flex>
                        )}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectTemplate;
