import React from 'react';
import Typography from '@mui/material/Typography';

const ListHistoryPageTitle = () => {
    return (
        <Typography
            sx={{
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '26px',
                lineHeight: '32.5px',
                color: '#34333A',
                marginTop: '10px'
            }}
        >
            Shopping History
        </Typography>
    )
};

export default ListHistoryPageTitle;