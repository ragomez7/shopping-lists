import React, { FC } from 'react';
import { Box } from "@mui/material"
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";

interface AddNewItemFormButtonSetnProps {
    handleAddNewItemOnClick: () => void
}

const AddNewItemFormButtonSet: FC<AddNewItemFormButtonSetnProps> = ({handleAddNewItemOnClick}) => {
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