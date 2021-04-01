import { HStack, Text, Input, Button, VStack, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Blocks } from '../components/Blocks'

const blocks = [1,2,3,4,5,6,7,8,9,10,11,12]

export const BranchPage = () => {
    const [visible,setVisible] = useState(false)

    return (
        <>
            <HStack w="100%" h="100vh" justify="center" spacing={10} pb={28}>
                <Text fontSize="2xl">Select Branch</Text>
                <Input placeholder="Search Location" width="60vh" />
                <Button onClick={()=>{setVisible(true)}}>Search</Button>
            </HStack >

            <HStack display={visible ? "flex" : "none"} width="100%" position="absolute" bottom="0" height="30vh" bgColor="#A8F8E4" left="0" overflowX="scroll" whiteSpace="nowrap" overflowY="hidden" px={8} py={2} spacing={4}>
                {blocks.map(b=>{return <Blocks/>})}
            </HStack>
        </>
    )
}