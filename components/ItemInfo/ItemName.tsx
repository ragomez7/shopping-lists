import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ItemNameProps {
    name: string
}
const ItemName: FC<ItemNameProps> = ({ name }) => {
    return (
        <>
            <Typography className="font-sans font-medium text-xs leading-[15px] text-lightgrey mt-[54px]">
                name
            </Typography>
            <Typography className="font-sans font-medium text-2xl mt-[11px]">
                {name}
            </Typography>
        </>
    )
};

export default ItemName;