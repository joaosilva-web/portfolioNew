import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

import seta from "../../assets/seta.svg";
import personagem2 from "../../assets/personagem2.svg";

export default function Experiencias() {
    return(
        <Box w="100%" height="100vh" bg="primary" display="flex" justifyContent="center" position="relative">
            <Grid
            color="white"
                templateRows="repeat(auto, .25fr)"
                templateColumns="repeat(2, 1fr)"
                w="686px"
                gap="0"
            >
                <GridItem alignSelf="top" w="351px" h="202px">
                    <Heading fontSize="24px">
                        Viação sorriso de Toledo S/A
                    </Heading>
                    <p><strong>Cargo:</strong> Assitente de TI</p>
                    <p><strong>Atribuições:</strong> Assistenciar o maior profissional de TI  que já conheci na minha vida!</p>
                    <p><strong>Período:</strong> 11/2022 - Atualmente</p>
                </GridItem>
                <GridItem colStart={2} rowStart={1} rowEnd={2} alignSelf="end" w="351px" h="100%" display="flex" alignItems="end">
                    <Image src={seta} alt="" minHeight="80%"/>
                </GridItem>
                <GridItem colStart={2} rowStart={2} w="351px" display="flex" alignItems="center" flexDirection="column">
                    <Heading fontSize="24px">Quer ser meu novo chefe?</Heading>
                    <Button variant="link" color="secondary">Contact me</Button>
                </GridItem>
            </Grid>
            <Image src={personagem2} position="absolute" bottom="0" left="10px"/>
        </Box>
    );
}