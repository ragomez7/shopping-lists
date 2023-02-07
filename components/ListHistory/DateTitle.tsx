import React from 'react';
import Typography from '@mui/material/Typography';

const DateTitle = () => {
    return (
        <Typography
            sx={{
                marginTop: '41px',
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '15px'
            }}
        >
            Month
        </Typography>
    )
};

export default DateTitle;