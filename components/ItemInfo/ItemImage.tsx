import React from 'react';
import Box from '@mui/material/Box';

const ItemImage = ({ imageUrl }) => {
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