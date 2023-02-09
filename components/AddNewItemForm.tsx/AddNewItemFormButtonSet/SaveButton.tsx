import React, { FC } from 'react';
import { Button } from "@mui/material"

interface SaveButtonProps {
    handleAddNewItemOnClick: () => void
}
const SaveButton: FC<SaveButtonProps> = ({ handleAddNewItemOnClick }) => {
    return (
        <Button
            className="w-[87px] h-[61px] bg-[#F9A109] text-white font-['Quicksand'] font-bold text-base leading-5 normal-case rounded-xl"
            onClick={handleAddNewItemOnClick}

        >
            Save
        </Button>
    )
};

export default SaveButton;