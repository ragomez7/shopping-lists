import React, { FC } from 'react';
import { Typography } from "@mui/material";

interface CategoryNameProps {
    name: string
}
const CategoryName: FC<CategoryNameProps> = ({ name }) => {
    return (
        <p className="text-lg leading-[22.5px] font-bold text-[#34333A] font-['Quicksand'] mt-[57px] ">
            {name}
        </p>
    )
};

export default CategoryName;