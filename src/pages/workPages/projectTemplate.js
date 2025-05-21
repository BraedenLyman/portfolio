import { Heading, Box, Image, Divider, Text, Grid } from "@chakra-ui/react";

const ProjectTemplate = ({
    imageUrl,
    title,
    category,
    year,
    description,
    children
}) => {
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
                        color="white"
                        size="2xl"
                    >
                        {title}
                    </Heading>
                    
                    <Divider 
                        borderColor="white" 
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
                            <Heading size="md" mb="2">Category</Heading>
                            <Heading size="md" mb="2">Year</Heading>
                        </Box>
                        <Box>
                            <Text mb="2">{category}</Text>
                            <Text mb="2">{year}</Text>
                        </Box>
                        <Box gridColumn={{base: "1 / span 2", md: "auto"}}>
                            <Text>{description}</Text>
                            {children}
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectTemplate;