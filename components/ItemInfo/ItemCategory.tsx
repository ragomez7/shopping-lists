import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ItemCategoryProps {
    categoryName?: string
}
const ItemCategory: FC<ItemCategoryProps> = ({categoryName}) => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#C1C1C4',
                    marginTop: '33px'
                }}
            >
                category
            </Typography>
            <Typography
                noWrap
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '22.5px',
                    marginTop: '11px',
                    width: '100%'
                }}
            >
                {categoryName}
            </Typography>
        </>
    )
};

export default ItemCategory;