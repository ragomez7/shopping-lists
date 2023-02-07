import React from 'react';
import { Typography } from "@mui/material";

const CategoryName = ({ name }) => {
    return (
        <Typography
            sx={{
                fontSize: '18px',
                lineHeight: '22.5px',
                fontWeight: '700',
                color: '#34333A',
                fontFamily: 'Quicksand',
                marginTop: '57px'
            }}

        >
            {name}
        </Typography>
    )
};

export default CategoryName;