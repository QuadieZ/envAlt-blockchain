import { VStack, Text, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const tempData = {
    data:{
        number: "0",
        prev_hash: "",
        hash: "",
    }
 
}

export const Blocks = (data) => {
const [block, setBlock] = useState(tempData);

  useEffect(() => {
      setBlock(data);
  });

  return (   
    <VStack p={5} align="left" minWidth="30vh" h="80%" bgColor="#C7FFF5">
      <HStack fontSize="lg" h="30%" color="#000000" spacing={2}>
        <Text>Block No.:</Text>
        <Text>{block.data.number}</Text>
      </HStack>
      <HStack fontSize="sm" color="#000000" spacing={2}>
        <Text>Previous Hash:</Text>
        <Text isTruncated>{block.data.prev_hash}</Text>
      </HStack>
      <HStack fontSize="sm" color="#000000" spacing={2}>
        <Text>Hash:</Text>
        <Text isTruncated>{block.data.hash}</Text>
      </HStack>
    </VStack>
  );
};
