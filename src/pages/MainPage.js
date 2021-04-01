import { HStack, Text, Stack, Flex } from "@chakra-ui/react";
import { ViewButton } from "../components/SaveEnButton";

export const MainPage = () => {
    return (
        <HStack w="100%" h="100vh" justify="center" spacing={40}>
            <Text fontSize="4xl">CO2 Footprint</Text>
            <Stack align="flex-start" width="30vh" spacing={3} boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" px={5} pb={7} pt={4}>
                <Text>
                    CO2 release recorded from Electrical appliance
                </Text>
                <Flex position="relative" width="100%" justify="center">
                    <ViewButton />
                </Flex>
            </Stack>
        </HStack >
    )
}