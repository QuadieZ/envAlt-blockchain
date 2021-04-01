import { HStack } from "@chakra-ui/react";
import { SpecificButton, OverallButton } from '../components/SaveEnButton'

export const SelectPage = () => {
    return (
        <HStack w="100%" h="100vh" justify="center" spacing={28}>
           <SpecificButton/>
           <OverallButton/>
        </HStack >
    )
}