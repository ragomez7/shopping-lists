import { Box, Typography } from "@mui/material"
import React from "react";

interface CategoryItemProps {
    _id?: string,
    name: string
    firstOfLine: boolean
    belongsToFirstLine: boolean
} 
const CategoryItem: React.FC<CategoryItemProps> = ({name, firstOfLine, belongsToFirstLine}) => {
    return (
        <Typography
            sx={{
                width: '175px',
                height: '50px',
                backgroundColor: 'white',
                marginLeft: firstOfLine ? null : '20px',
                marginTop: belongsToFirstLine ? '18px': '46px',
                paddingTop: '13px',
                paddingLeft: '16px',
                fontFamily: 'Quicksand',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
                color: "#000"
            }}
        >
            {name}
        </Typography>
    )
};

export default CategoryItem