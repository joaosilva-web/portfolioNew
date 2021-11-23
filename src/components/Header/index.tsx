import { Box, Button, HStack, Text, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { FaBars, FaSun } from "react-icons/fa"

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <HStack justify="space-between" p="0 64px">
      <Text fontWeight="light" fontSize="">João Silva Dev Web</Text>

        <HStack>
            <Button onClick={() => toggleColorMode()} as={IconButton} variant="defaultGhost" icon={<FaSun/>}/>
        <Menu>
  <MenuButton
    as={IconButton}
    icon={<FaBars />}
    variant="defaultGhost"
  />
  <MenuList bg="primary" border="0">
    <MenuItem _hover={{bg: "secondary"}} _focus={{bg: "secondary"}}>
      Home
    </MenuItem>
    <MenuItem _hover={{bg: "secondary"}}  _focus={{bg: "secondary"}}>
      Portfólio
    </MenuItem>
    <MenuItem _hover={{bg: "secondary"}}  _focus={{bg: "secondary"}}>
      Contact
    </MenuItem>
  </MenuList>
</Menu>
        </HStack>
      </HStack>
    </Box>
  );
}
