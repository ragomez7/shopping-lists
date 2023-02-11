import React, { FC } from "react";
import { Box } from "@mui/material"
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";

interface AddNewItemFormButtonSetProps {
    handleAddNewItemOnClick: () => void
}

const AddNewItemFormButtonSet: FC<AddNewItemFormButtonSetProps> = ({handleAddNewItemOnClick}) => {
    return (
        
        <Box className = "w-[310px] px-[30px] mt-[50px] flex justify-around">
            <CancelButton />
            <SaveButton handleAddNewItemOnClick={handleAddNewItemOnClick} />
        </Box>
    )
};
export default AddNewItemFormButtonSet;