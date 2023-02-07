import React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const RemoveAllUnitsButton = () => {
    return (
        <IconButton
            style={{
                width: '37px',
                height: '45px',
                backgroundColor: '#F9A109',
                borderRadius: '12px',
                padding: 0
            }}
        >
            <SvgIcon
                sx={{
                    color: '#FFF'
                }}
            >
                <DeleteOutlineIcon />
            </SvgIcon>
        </IconButton>
    )
};

export default RemoveAllUnitsButton;