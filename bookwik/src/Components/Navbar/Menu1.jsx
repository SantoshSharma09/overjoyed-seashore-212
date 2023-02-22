import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const Menu1 = () => {
  return (
    <>
    <Menu>
  {/* <MenuButton >
    All
  </MenuButton> */}
  <Button as={MenuButton} colorScheme='#6c757d' variant='ghost'>All</Button>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    </>
  )
}

export default Menu1