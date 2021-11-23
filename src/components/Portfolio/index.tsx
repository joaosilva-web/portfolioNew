import { Box, Heading, Grid, HStack, Button, Image } from "@chakra-ui/react";
import personagem1 from "../../assets/personagem1.svg";


export default function Portfolio() {
    return(
        <Box w="100%" h="100vh" bg="primary" display="flex" justify="center" flexDirection="column" position="relative">
            <Heading color="white" textAlign="center" pt="54px">Portfólio</Heading>
                <HStack color="white" textAlign="center" margin="0 auto">
                    <Button bg="secondary">All</Button>
                    <Button bg="transparent" _hover={{bg: "secondary"}}  _focus={{bg: "secondary"}}>Web app</Button>
                    <Button bg="transparent" _hover={{bg: "secondary"}}  _focus={{bg: "secondary"}}>Mobile app</Button>
                    <Button bg="transparent" _hover={{bg: "secondary"}}  _focus={{bg: "secondary"}}>Design</Button>
                </HStack>
            <Grid
                paddingTop="34px"
                margin="0 auto"
                w="767px"
                templateRows="repeat(auto, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap="60px"
            >
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
                <Box w="200px" borderRadius="10px" height="120px" bg="white"></Box>
            </Grid>

            <Image position="absolute" right="0" bottom="0" src={personagem1}/>
        </Box>
    );
}