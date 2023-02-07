import React from 'react';
import { Typography } from "@mui/material"

const AddNewItemFormTitle = () => {
    return (
        <Typography
        sx={{
            width: '176px',
            height: '30px',
            fontFamily: 'Quicksand',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#000000'
        }}
    >
        Add New Item
    </Typography>
    )
};

export default AddNewItemFormTitle;