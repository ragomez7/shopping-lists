import React, { FC } from "react";

interface SaveButtonProps {
    handleAddNewItemOnClick: () => void
}
const SaveButton: FC<SaveButtonProps> = ({ handleAddNewItemOnClick }) => {
    return (
        <button
            className="w-[87px] h-[61px] bg-[#F9A109] text-white font-['Quicksand'] font-bold text-base leading-5 normal-case rounded-xl"
            onClick={handleAddNewItemOnClick}

        >
            Save
        </button>
    )
};

export default SaveButton;