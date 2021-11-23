import { whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
    variants: {
        default: {
            bg: "secondary",
            transition: "all 0.5s ease",
            _hover: {
                bg: whiten("secondary", 5),
                transform: "translateY(-4px)"
            },
            _focus: {
                boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.05)",
            }
        },
        defaultGhost: {
            bg: "transparent",
            transition: "all 0.5s ease",
            _hover: {
                bg: "transparent",
                transform: "scale(1.1)"
            },
            _focus: {
                boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.05)",
            }
        },
        defaultLink: {
            bg: "transparent",
            color: "secondary",
            transition: "all 0.5s ease",
            _hover: {
                bg: "transparent",
                color: whiten("secondary", 5),
                textDecoration: "underline",
                transform: "translateY(-4px)"
            },
            _focus: {
                boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.05)",
            }
        },
    }
};