import React, { FC } from 'react';
import Box from '@mui/material/Box';

interface ItemImageProps {
    imageUrl?: string
}
const ItemImage: FC<ItemImageProps> = ({ imageUrl }) => {
    return (
        <Box
            component="img"
            src={imageUrl}
            sx={{
                width: '300px',
                height: '220px',
                borderRadius: '25px',
            }}
        />
    )
};

export default ItemImage;