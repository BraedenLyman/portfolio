import { Heading, Box, Image, Divider, Text, Grid, Flex, IconButton, useColorModeValue, Link } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ProjectTemplate = ({
    imageUrl,
    title,
    category,
    year,
    description,
    children,
    nextProject, 
    prevProject,
    embeddedUrl,
    embeddedHeading,
    websiteImages,
    websiteImagesHeading,
    videoHeading,
    videoUrl,
}) => {

    const textColor = useColorModeValue("gray.800", "white");
    const dividerColor = useColorModeValue("gray.300", "white");
    const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
    const iconColor = useColorModeValue("gray.600", "white");
    // Helper function to determine if the URL is a YouTube embed
    const isYouTubeEmbed = (url) => url && (url.includes("youtube.com/embed/") || url.includes("youtu.be/"));
    // Helper function to determine if the URL is a Vimeo embed
    const isVimeoEmbed = (url) => url && url.includes("player.vimeo.com/video/");


    return (
        <Box maxW={{ base: "100%", md: "container.xl" }} mx="auto">
            <Box position="relative">
                <Image 
                    src={imageUrl}
                    objectFit="fill"
                    width={{base: "400px", md: "600px", lg: "600px", xl: "600px", }}
                    height={{base: "350px", md: "550px", lg: "550px", xl: "550px"}}
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
                            <Text color={textColor} dangerouslySetInnerHTML={{ __html: description }}/>
                            {children}
                        </Box>
                    </Grid>
                </Box>

                {embeddedUrl && (
                    <Box mt={10} my={10} mx={10}>
                        {embeddedHeading && (
                            <Heading size="lg" mb={4} textAlign="center">
                                {embeddedHeading}
                            </Heading>
                        )}
                        <Flex
                            borderRadius="lg"
                            overflow="hidden" 
                            borderWidth="1px" 
                            borderColor={dividerColor}
                            position="relative"
                            width="100%"
                            paddingBottom="56.25%"
                            mt={8}
                            
                        >
                            <iframe
                                src={embeddedUrl}
                                title={`Embedded content for ${title}`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen 
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                <p>Your browser does not support iframes.</p>
                            </iframe>
                        </Flex>
                        <Text mt={4} textAlign="right">
                            <Link href={embeddedUrl} isExternal color="blue.500" _hover={{ textDecoration: "underline" }}>
                                View this content on its original website
                            </Link>
                        </Text>
                    </Box>
                )}
                
                {videoUrl && (
                    <Box mt={10} my={10} mx={10}>
                        {videoHeading && (
                            <Heading size="lg" mb={4} textAlign="center" color={textColor}>
                                {videoHeading}
                            </Heading>
                        )}
                        <Flex
                            borderRadius="lg"
                            overflow="hidden"
                            borderWidth="1px"
                            borderColor={dividerColor}
                            position="relative"
                            width="100%"
                            paddingBottom="56.25%" // 16:9 aspect ratio (height / width * 100)
                            mt={8}
                        >
                            {/* Conditional rendering for different video sources */}
                            {isYouTubeEmbed(videoUrl) || isVimeoEmbed(videoUrl) ? (
                                <iframe
                                    src={videoUrl}
                                    title={`Video for ${title}`}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                    }}
                                >
                                    <p>Your browser does not support iframes or embedded videos.</p>
                                </iframe>
                            ) : (
                                <video
                                    src={videoUrl}
                                    controls // Shows default video controls (play/pause, volume, fullscreen)
                                    width="100%"
                                    height="100%"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        objectFit: "cover", // Ensures the video covers the container
                                    }}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </Flex>
                        {/* Optional: Link to original video source if it's external */}
                        {(isYouTubeEmbed(videoUrl) || isVimeoEmbed(videoUrl)) && (
                            <Text mt={4} textAlign="right">
                                <Link href={videoUrl} isExternal color="blue.500" _hover={{ textDecoration: "underline" }}>
                                    Watch this video on its original platform
                                </Link>
                            </Text>
                        )}
                    </Box>
                )}

                {(websiteImages && websiteImages.length > 0) && (
                    <Box mt={10} my={10} mx={10}> 
                        {websiteImagesHeading && (
                            <Heading size="lg" mb={4} textAlign="center" color={textColor}>
                                {websiteImagesHeading}
                            </Heading>
                        )}
                        {websiteImages.map((imageSrc, index) => (
                            <Flex
                                key={index} 
                                overflow="hidden"
                                position="relative"
                                width="100%"
                                paddingBottom="56.25%" 
                                mt={index === 0 ? 8 : 10} 
                                mb={index < websiteImages.length - 1 ? 8 : 0} 
                            >
                                <Image
                                    src={imageSrc}
                                    alt={`${title} website screenshot ${index + 1}`} 
                                    objectFit="cover" 
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </Flex>
                        ))}
                    </Box>
                )}

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
    );
}

export default ProjectTemplate;
