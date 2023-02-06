import React from "react";
import { Box, Typography } from "@mui/material"
import { CategoryItemProps } from "..";
import ViewItemButton from "./ViewItemButton";


const CategoryItem: React.FC<CategoryItemProps> = ({ 
    _id,
    name, 
    categoryName,
    categoryId,
    note,
    imageUrl,
    firstOfLine, 
    belongsToFirstLine 
}) => {
    return (
        <Typography
            sx={{
                width: '175px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FFF',
                marginLeft: firstOfLine ? null : '20px',
                marginTop: belongsToFirstLine ? '18px' : '46px',
                paddingY: '13px',
                paddingX: '16px',
                fontFamily: 'Quicksand',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
                color: "#000",
                borderRadius: '12px',
                boxShadow: "0px 2px 2px"
            }}
        >
            {name}
            <ViewItemButton 
                _id={_id}
                name={name}
                categoryName={categoryName}
                categoryId={categoryId}
                note={note}
                imageUrl={imageUrl}
            />
        </Typography>
    )
};

export default CategoryItem