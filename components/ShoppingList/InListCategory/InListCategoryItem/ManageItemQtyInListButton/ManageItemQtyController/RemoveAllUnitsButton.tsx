import React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const RemoveAllUnitsButton = () => {
    return (
        <button className="w-[37px] h-[45px] bg-orange rounded-xl p-0">
            <span className="text-white">
                <DeleteOutlineIcon />
            </span>
        </button>
    )
};

export default RemoveAllUnitsButton;