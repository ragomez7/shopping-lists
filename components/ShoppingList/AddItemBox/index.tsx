import React from 'react';
import { Box, Icon, Typography } from "@mui/material"
import AddItemButton from "./AddItemButton";

const AddItemBox = () => {
    return (
        <Box className="min-w-[300px] h-[130px] rounded-3xl bg-[#80485B] relative ">
            <Icon className="w-[100px] h-[155px] text-center absolute left-[15px] bottom-[0px]">
                <img src='https://res.cloudinary.com/dg8htxonw/image/upload/v1675553451/source_lvil20.svg' />
            </Icon>
            <p className="h-[40px] text-white pt-[18px] ml-[122px] font-sans font-bold text-base leading-[20px]">
                Didn't find what you need?
            </p>
            <AddItemButton />
        </Box>
    )
};

export default AddItemBox;