import React, { useState, FC } from 'react';
import { Typography, Box } from "@mui/material";
import ManageItemQtyInListButton from "./ManageItemQtyInListButton";

export interface InListCategoryItemProps {
    name?: string
    count?: number
    isInEditingMode?: boolean
    controllerId?: string
}

const InListCategoryItem: FC<InListCategoryItemProps> = ({ name, count, isInEditingMode, controllerId }) => {
    const [innerCountTally, setInnerCountTally] = useState(count || 0);
    return (
        <Box className="flex items-center justify-between mt-[30px] h-[32px]">
            <Typography className="font-sans font-bold text-base leading-[22.5px] h-[100%] flex items-center w-[100px] ">
                {name}
            </Typography>
            {isInEditingMode ?
                <ManageItemQtyInListButton 
                    innerCountTally={innerCountTally} 
                    setInnerCountTally={setInnerCountTally}
                    itemName={name} 
                    controllerId={controllerId}
                /> :
                <Typography className="font-sans w-[68px] h-[32px] border-2 border-solid border-grey rounded-3xl text-grey normal-case flex justify-center items-center text-sm font-medium">
                    {innerCountTally} pcs
                </Typography>
            }


        </Box>
    )
};

export default InListCategoryItem;