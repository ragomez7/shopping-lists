import React from 'react';
import { Box } from "@mui/material"
import AddToListButton from "./AddToListButton";
import DeleteButton from "./DeleteButton";

const ItemInfoButtonSet = () => {
    return (
        <Box className="mt-[34px] flex justify-around">
            <DeleteButton />
            <AddToListButton />
        </Box>
    )
};

export default ItemInfoButtonSet;