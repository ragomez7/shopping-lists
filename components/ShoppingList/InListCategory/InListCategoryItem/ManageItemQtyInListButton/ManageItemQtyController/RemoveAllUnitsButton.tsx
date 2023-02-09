import React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const RemoveAllUnitsButton = () => {
    return (
        <IconButton className="w-[37px] h-[45px] bg-orange rounded-xl p-0">
            <SvgIcon className="text-white">
                <DeleteOutlineIcon />
            </SvgIcon>
        </IconButton>
    )
};

export default RemoveAllUnitsButton;