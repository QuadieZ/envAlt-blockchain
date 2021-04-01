import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import React from "react";

const SaveEnButtons = (props) => {
    const { label, color, hcolor, mw, p, f, fw } = props;
    return (
        <Button
            bg={color}
            _hover={{ bg: `${hcolor}` }}
            minWidth={mw}
            fontWeight={fw}
            fontSize={f}
            py={p}
            borderRadius="50"
            boxShadow="0px 5px 0px rgba(0, 0, 0, 0.2);"
            position="relative"
        >
            {label}</Button>
    )
}

export const ViewButton = () => {
    return (
        <Link to="/select">
            <SaveEnButtons color="#F9CFCF" hcolor="#F8C3C3" mw="110" f="sm" py="4" label="View" fw="semibold" />
        </Link>
    )
}

export const SpecificButton = () => {
    return (
        <Link to='/branch' _hover={{ textDecoration: "none" }}>
            <SaveEnButtons
                label="Specific Branch"
                color="#ABF9D3"
                hcolor="#96EDC3"
                mw="350"
                p="12"
                f="3xl">
            </SaveEnButtons>
        </Link>
    )
}

export const OverallButton = () => {
    return (
        <SaveEnButtons
            label="Overall"
            color="#FDC4C4"
            hcolor="#F7BCBC"
            mw="350"
            p="12"
            f="3xl">
        </SaveEnButtons>
    )
}