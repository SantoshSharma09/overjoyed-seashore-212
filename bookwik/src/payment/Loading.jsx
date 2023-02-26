import HashLoader from "react-spinners/HashLoader";
import { Box, Center } from "@chakra-ui/react";
function Loading({ lod }) {
  return (
    <Center>
      <Box mt="80" mb="80">
        <HashLoader size={60} color={"#e40046"} loading={lod} />
      </Box>
    </Center>
  );
}
export default Loading;
