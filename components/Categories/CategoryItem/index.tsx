import React from "react";
import { Typography, Box } from "@mui/material"
import { CategoryItemProps } from "..";
import ViewItemButton from "./ViewItemButton";

const CategoryItem: React.FC<CategoryItemProps> = ({ 
    _id,
    name, 
    categoryName,
    categoryId,
    note,
    imageUrl,
    isListReviewCategory,
    count
}) => {
    return (
        <Box
            className="w-[175px] flex items-center justify-between bg-[#FFFFFF] mr-10 mt-[30px] py-[13px] pl-4 pr-[5px] font-['Quicksand'] font-semibold text-base text-[#000] rounded-xl shadow-[0px_2px_2px]"
        >
            {name}
            { isListReviewCategory ? 
                <Typography className="w-[45px] font-['Quicksand'] font-semibold text-xs text-[#F9A10A]"
                >
                    {count} pcs
                </Typography> :
                <ViewItemButton 
                _id={_id}
                name={name}
                categoryName={categoryName}
                categoryId={categoryId}
                note={note}
                imageUrl={imageUrl}
            />
            }
        </Box>
    )
};

export default CategoryItem