import { HStack, Text, Input, Button, VStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Blocks } from "../components/Blocks";
import BlockchainService from "../services/BlockchainService";
import { useState, useEffect } from "react";
import { BranchTable } from "../components/InfoTable";
import * as React from 'react'
import moment from "moment";

// const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const blockchainService = new BlockchainService();

export const BranchPage = () => {
  const [visible, setVisible] = useState(false);

  const [blocks, setBlocks] = useState([]);
  const [carbonfootprint, setCarbonfootprint] = useState([]);
  const [locationBranch, setLocationBranch ] = useState("");
  let location = React.createRef();

  useEffect(() => {
    async function fetchData() {
      if (blocks.length == 0) {
        const responseBlocks = await blockchainService.getBlocks();
        

        console.log("call api");
        console.log(responseBlocks);
        let tempBlocks = [];
        tempBlocks = responseBlocks.map((res) => ({
          number: res.header.number,
          prev_hash: res.header.previous_hash,
          hash: res.header.data_hash,
        }));
        console.log("---tempBlocks---");
        console.log(tempBlocks);

        setBlocks(tempBlocks);
      }
    }
    fetchData();
    
  });

  async function getCarbonfootprint() {
    const responseCarbonfootprint = await blockchainService.getCarbonfootprint(location.current.value);
    // for (let carbonfootprint of responseCarbonfootprint) {
    //     carbonfootprint = carbonfootprint.sort(
    //       (a, b) => moment(a.carbonfootprint.date).unix() - moment(b.carbonfootprint.date).unix()
    //     );
    //   }

    setCarbonfootprint(responseCarbonfootprint);
  }

  return (
    <>
      <VStack w="100%" h="100vh" justify="center" spacing={10} pb={28}>
        <HStack>
          <Text fontSize="2xl">Select Branch</Text>
          <Input placeholder="Search Location" width="60vh" ref={location}/>
          <Button
            onClick={() => {
              setVisible(true);
              setLocationBranch(location.current.value);
              getCarbonfootprint();
            }}
          >
            Search
          </Button>
        </HStack>
        <HStack  paddingTop={10}  display={visible ? "flex" : "none"}>
        <Text fontSize="2xl">Branch:</Text>
        <Text fontSize="2xl"> {locationBranch} </Text>
        </HStack>
        <HStack  display={visible ? "flex" : "none"}>
          <BranchTable data={carbonfootprint} />
        </HStack>
      </VStack>

      <HStack
        width="100%"
        position="absolute"
        bottom="0"
        height="30vh"
        bgColor="#A8F8E4"
        left="0"
        overflowX="scroll"
        whiteSpace="nowrap"
        overflowY="hidden"
        px={8}
        py={2}
        spacing={4}
      >
        {blocks.map((block) => {
          return <Blocks data={block} />;
        })}
      </HStack>
    </>
  );
};
