import { Typography } from "@mui/material";
import React from "react";
import { v4 as uuid } from 'uuid';
import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem";
import CategoryName from "./CategoryName";
import CategoryItemList from "./CategoryItemList";

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
const Category: React.FC<CategoryProps> = ({ category, isListReviewCategory }) => {
    return (
        <Box>
            <CategoryName name={category?.name} />
            <CategoryItemList category={category} isListReviewCategory={isListReviewCategory} />
        </Box>
    )
};
export default Category;