import { Heading, Box, Image, Divider, Flex, Text, SimpleGrid } from "@chakra-ui/react";

function QuoteKong() {
    const imageUrl = "/images/qk.png";
    return (
        <Box>
            <Image 
                src={imageUrl}
                objectFit="cover" 
                backgroundColor="green"
                width="100%"
                height="90%"
                maxWidth="600px"
                alt="Quote Kong Project"
                borderRadius="0px 0px 50px 50px"
                mx="auto"
                display="block"
                marginTop="-72px"
            />
       
        <SimpleGrid columns={[2, null, 3]} gap="20px">
            <Box border="2px solid black" height="20" />
            <Box border="2px solid black" height="20" />
            <Box border="2px solid black" height="20" />
            <Box border="2px solid black" height="20" />
            <Box border="2px solid black" height="20" />
            <Box border="2px solid black" height="20" />
        </SimpleGrid> 
        
        </Box>
    );
}

export default QuoteKong;