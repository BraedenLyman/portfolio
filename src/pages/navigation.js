import { Stack, Heading, IconButton, Tooltip, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
function Navigation() {
  return (
    <div>
        <Heading size="md" ml='200' mb='10'>Braeden Lyman</Heading>
        <Stack gap="2" align="flex-start" ml='200'>
            <Heading size="2xl" ml='3'>1. Home</Heading>
            <Heading size="2xl">2. Work</Heading>
            <Heading size="2xl">3. About</Heading>
            <Heading size="2xl">4. Contact</Heading>
       <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
            <Tooltip label="Open Gmail">
                <Link href="mailto:braedenlyman7@gmail.com" isExternal>
                    <IconButton icon={<FaEnvelope />} aria-label="gmail" variant="ghost"/>
                </Link>
            </Tooltip>
            <Tooltip label="Open LinkedIn">
                <Link href="https://www.linkedin.com/in/braedenlyman/" isExternal>
                    <IconButton icon={<FaLinkedin />} aria-label="gmail" variant="ghost"/>
                </Link>
            </Tooltip>
            <Tooltip label="Open GitHub">
                <Link href="https://github.com/BraedenLyman" isExternal>
                    <IconButton icon={<FaGithub />} aria-label="gmail" variant="ghost"/>
                </Link>
            </Tooltip>
            <Tooltip label="Open Facebook">
                <Link href="https://www.facebook.com/brae.lyman.1" isExternal>
                    <IconButton icon={<FaFacebook />} aria-label="gmail" variant="ghost"/>
                </Link>
            </Tooltip>
            </div>
        </Stack>
       
    </div>
  );
}

export default Navigation;