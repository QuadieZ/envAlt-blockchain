import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react"
import { useEffect, useState } from "react";

const tempData = [
    // {
    //     branchId: "b0001",
    //     date: "",
    //     value: ""
    // },
    // {
    //     branchId: "b0002",
    //     date: "",
    //     value: ""
    // },
]


const InfoTable = (props) => {
    const { color, column, children } = props;
    return (
        <Table variant="simple" fontSize="md">
            <Thead bgColor={color}  >
                <Tr>
                    <Th textAlign="center" fontSize="md" py={4}>Date</Th>
                    <Th textAlign="center" fontSize="md" py={4}>{column}</Th>
                </Tr>
            </Thead>
            <Tbody bgColor="white">
                {children}
            </Tbody>
        </Table>
    )
}

export const BranchTable = ({ data }) => {
    const [dataTable, setDataTable] = useState(tempData)
    

    useEffect(() => {
        if (data !== []) {
            setDataTable(data)
        }

    },[data])

    return (
        <InfoTable column="CO2 Releasing" color="#8BD9EB">
            {dataTable.map((row) => {
                return (
                    <Tr>
                        <Td textAlign="center">{row.date}</Td>
                        <Td textAlign="center">{row.value}</Td>
                    </Tr>
                )
            })}
        </InfoTable>
    )
}