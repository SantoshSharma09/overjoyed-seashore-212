import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function DrawerExample2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState("right");

  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <Image
          style={{ padding: "0px 05px", width: "40px" }}
          src="https://user-images.githubusercontent.com/107903370/220420024-ecdf194c-c242-42df-bc84-b9a1d5f17d78.png"
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
        onClick={() => setPlacement("right")}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample2;
