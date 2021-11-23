import { Box, Button, Container, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Header from "../Header";
import background from "../../assets/bg.png";
import eu from "../../assets/eu.png";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <Box
      bgImage={background}
      bgRepeat="no-repeat"
      bgSize="cover"
      color="white"
      height="100vh"
    >
      <Header />
      <Box>
        <HStack justify="space-between">
          <Image position="relative" bottom="-7px" maxH="95vh" src={eu} />
          <Container maxW="small" display="flex" justifyContent="center" alignItems="center">
           <Stack w="609px">
           <Text  fontSize="42px" textAlign="left">
              João Silva, And i’m a web developer, with focus in front-end and i
              Develop with ReactJs
            </Text>
            <HStack justify="space-between">
              <Button variant="default" w="256px"
              >
                Contact me
              </Button>
              <Button variant="defaultLink" leftIcon={<FaDownload />}>
                Download my resume
              </Button>
            </HStack>
           </Stack>
          </Container>
        </HStack>
      </Box>
    </Box>
  );
}
