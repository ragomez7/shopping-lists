import { Typography } from "@mui/material";
import React from "react";
import { v4 as uuid } from 'uuid';
import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem";

export interface CategoryItemProps {
    _id?: string
    name: string
    categoryName?: string
    categoryId?: string
    note?: string
    imageUrl?: string
    firstOfLine: boolean
    belongsToFirstLine: boolean
} 

interface TryProps {
    name?: string;
    items?: Array<CategoryItemProps>;
    _id: string;
}

interface CategoryProps {
    category: TryProps;
}
const Category: React.FC<CategoryProps> = ({category}) => {
    return (
        <Box>
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
                {category?.name}
            </Typography>
            <Box  
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
            {category?.items?.length ? 
                category.items.map((item, index) => (
                    <CategoryItem 
                        key={uuid()}
                        _id={item._id}
                        name={item.name}
                        categoryName={category?.name}
                        categoryId={category?._id}
                        note={item.note}
                        imageUrl={item.imageUrl}
                        firstOfLine={index % 4 === 0}
                        belongsToFirstLine={index < 4}
                    />
                ) ) 
            : 
                undefined}
            </Box>
        </Box>
    )
};
export default Category;