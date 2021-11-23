import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./buttonStyles";

export const myTheme = extendTheme({
    styles: {
        global: {
            h1: {
                fontFamily: "Poppins",
            },
            body: {
                fontFamily: "Poppins",
            }
    
        },
    },
    colors: {
        primary: "#18151A",
        secondary: "#D90368",
        success: "#04A777",
    },
    components: {
        Button,
    },
});