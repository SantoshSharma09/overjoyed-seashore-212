import { useState } from "react";
import { Center } from "@chakra-ui/react";

import { Box, PinInput, PinInputField, Button, Text } from "@chakra-ui/react";

import PaymentSuccess from "./PaymentSuccess";

function Otp() {
  const [success, setSucces] = useState(false);
  const [verify, setverify] = useState(false);
  const handlClick = () => {
    setverify(true);

    setTimeout(() => {
      setverify(false);
      setSucces(true);
    }, 3000);
  };

  if (success) {
    return <PaymentSuccess />;
  }

  return (
    <Box background={"white"} w="9xl" h="4xl">
      <Center>
        <Box
          mt="200"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          padding={"50px"}
          borderRadius={"10px"}
        >
          <Text
            align={"center"}
            fontWeight={"black"}
            mb="4"
            fontSize={"30"}
            color="black"
          >
            Please Enter OTP
          </Text>
          <Box display={"flex"} justifyContent="center">
            <PinInput size={"lg"} otp>
              <PinInputField borderColor={"black"} />
              <PinInputField ml="2" borderColor={"black"} />
              <PinInputField ml="2" borderColor={"black"} />
              <PinInputField ml="2" borderColor={"black"} />
            </PinInput>
          </Box>
          <Box display={"flex"} justifyContent="center">
            <Button
              color={"white"}
              backgroundColor={"#e40046"}
              ml="3"
              isLoading={verify === true}
              loadingText="verifying"
              onClick={handlClick}
              marginTop="20px"
              size={"lg"}
            >
              Verify
            </Button>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default Otp;
