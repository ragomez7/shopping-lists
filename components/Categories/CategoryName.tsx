import React, { FC } from 'react';
import { Typography } from "@mui/material";

interface CategoryNameProps {
    name: string
}
const CategoryName: FC<CategoryNameProps> = ({ name }) => {
    return (
        <Typography className="text-lg leading-[22.5px] font-bold text-[#34333A] font-['Quicksand'] mt-[57px] ">
            {name}
        </Typography>
    )
};

export default CategoryName;