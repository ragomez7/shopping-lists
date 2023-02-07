import React from 'react';
import { Box } from "@mui/material"
import AddToListButton from "./AddToListButton";
import DeleteButton from "./DeleteButton";

const ItemInfoButtonSet = () => {
    return (
        <Box
            sx={{
                marginTop: '34px',
                display: 'flex',
                justifyContent: 'space-around'
            }}
        >
            <DeleteButton />
            <AddToListButton />
        </Box>
    )
};

export default ItemInfoButtonSet;