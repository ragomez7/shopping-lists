import React, { FC } from 'react';
import Box from '@mui/material/Box';

interface ItemImageProps {
    imageUrl?: string
}
const ItemImage: FC<ItemImageProps> = ({ imageUrl }) => {
    return (
        <Box className="w-[300px] h-[220px] rounded-3xl "
            component="img"
            src={imageUrl}
        />
    )
};

export default ItemImage;