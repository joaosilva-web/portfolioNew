import { Box, Button, FormControl, Grid, GridItem, Heading, HStack, Input, Link, Textarea, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return(
        <VStack color="white" bg="primary" w="100%" height="100vh" justifyContent="center">
            <Heading>Contact Me</Heading>
            <Grid
                paddingTop="68px" 
                templateRows="repeat(auto, 1fr)"
                templateColumns="repeat(2, 1fr)"
                w="100%"
            >
                <GridItem>
                    <VStack alignItems="flex-start" w="535px" margin="0 auto">
                            
                        <Link fontSize="24px" display="flex" alignItems="center"><FaWhatsapp/> (44) 99700-5614</Link>
                        <Link fontSize="24px" display="flex" alignItems="center"><FaGithub fontSize="24px"/> https://github.com/joaosilva-web</Link>
                        
                        <Link fontSize="24px" display="flex" alignItems="center"><FaLinkedin/>www.linkedin.com/in/joão-silva-dev-web</Link>
                    </VStack>
                </GridItem>
                <GridItem>
                    <FormControl as={Grid} 
                         margin="0 auto"
                         w="608px"
                         templateRows="repeat(auto, 1fr)"
                         templateColumns="repeat(2, 1fr)"
                         gap="8px"
                    >
                        <GridItem colSpan={1}>
                            <Input h="64px" bg="#221e24" borderColor="#221e24" fontSize="24px" color="white" placeholder="nome..." _placeholder={{color: "white", fontSize: "24px"}} _hover={{borderColor: "secondary"}}/>
                        </GridItem>
                        <GridItem colStart={2}>
                            <Input h="64px" bg="#221e24" borderColor="#221e24" fontSize="24px" color="white" placeholder="sobrenome..." _placeholder={{color: "white", fontSize: "24px"}} _hover={{borderColor: "secondary"}}/>
                        </GridItem>
                        <GridItem rowStart={2} colStart={1} colEnd={3}>
                            <Input h="64px" bg="#221e24" borderColor="#221e24" fontSize="24px" color="white" placeholder="email..." _placeholder={{color: "white", fontSize: "24px"}} _hover={{borderColor: "secondary"}}/>
                        </GridItem>
                        <GridItem rowStart={3} colStart={1} colEnd={3}>
                            <Textarea bg="#221e24" borderColor="#221e24" color="white" fontSize="24px" height="240px" resize="none" placeholder="Deixe sua mensagem.." _placeholder={{color: "white", fontSize: "24px"}} _hover={{borderColor: "secondary"}}/>
                        </GridItem>
                        <GridItem display="flex" justifyContent="center" rowStart={4} colStart={1} colEnd={3}>
                            <Button bg="success" w="224px" h="64px">Enviar!</Button>
                        </GridItem>
                    </FormControl>
                </GridItem>
            </Grid>
        </VStack>
    );
}