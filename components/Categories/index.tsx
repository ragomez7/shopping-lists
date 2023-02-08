import React from "react";
import { Box } from "@mui/material"
import CategoryName from "./CategoryName";
import CategoryItemList from "./CategoryItemList";
import { ItemProps } from "../ItemInfo";

export interface CategoryItemProps extends ItemProps {
    firstOfLine?: boolean
    belongsToFirstLine?: boolean
    isListReviewCategory?: boolean
    count?: any
}

export interface CategoryProps {
    name: string;
    items: Array<CategoryItemProps>;
    _id?: string;
}


interface CategoryComponentProps {
    category: CategoryProps
    isListReviewCategory?: boolean
}
const Category: React.FC<CategoryComponentProps> = ({ category, isListReviewCategory }) => {
    return (
        <Box>
            <CategoryName name={category?.name} />
            <CategoryItemList category={category} isListReviewCategory={isListReviewCategory} />
        </Box>
    )
};
export default Category;