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
import axios from "axios";
import { Link } from "react-router-dom";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState("left");
  const [prod, setProd] = React.useState([]);

  //adding the price
  let sum = 0;
  let arr = [];

  prod.map((ele) => {
    arr.push(ele.price);
  });

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  //Fetching the data:
  const getProd = () => {
    axios
      .get(`http://localhost:8000/cart`)
      .then((res) => {
        console.log(res.data);
        setProd(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getProd();
  }, []);

  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <Image
          style={{ padding: "0px 05px", width: "40px" }}
          src="https://user-images.githubusercontent.com/107903370/220424087-fa4e1280-5e7e-4960-ad1e-eca6d083bf7a.png"
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
        onClick={() => setPlacement("left")}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
          <DrawerBody>
            {prod.map((ele) => (
              <div>
                <img style={{ width: "40%" }} src={ele.image} alt="img" />
              </div>
            ))}
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

export default DrawerExample;
