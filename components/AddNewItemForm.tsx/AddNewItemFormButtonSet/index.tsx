import React from 'react';
import { Box } from "@mui/material"
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";

const AddNewItemFormButtonSet = ({handleAddNewItemOnClick}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '310px',
                paddingX: '30px',
                marginTop: '50px'
            }}
        >
            <CancelButton />
            <SaveButton handleAddNewItemOnClick={handleAddNewItemOnClick} />
        </Box>
    )
};
export default AddNewItemFormButtonSet;