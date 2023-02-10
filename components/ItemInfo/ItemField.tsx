import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ItemCategoryProps {
    fieldName?: string
    fieldValue?: string
}
const ItemField: FC<ItemCategoryProps> = ({ fieldName, fieldValue }) => {
    const height = fieldName === 'note' ? '207px' : null;
    const wordWrap = fieldName === 'note' ? 'break-word' : null;
    return (
        <>
            <p className="font-sans font-medium text-xs leading-[15px] text-lightgrey mt-[33px]"
            >
                {fieldName}
            </p>
            <p className={`font-sans font-medium text-[18px] leading-[22.5px] mt-[11px] ${height ? "h-[207px]" : null} ${wordWrap ? "break-words" : null}`}
            >
                {fieldValue}
            </p>
        </>
    )
};

export default ItemField;