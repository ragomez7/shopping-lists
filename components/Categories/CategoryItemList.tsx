import React, { FC } from "react";
import { v4 as uuid } from 'uuid';
import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem";
import { CategoryProps, CategoryItemProps } from ".";

interface CategoryItemListProps {
    category: CategoryProps
    isListReviewCategory?: boolean
}
const CategoryItemList: FC<CategoryItemListProps> = ({ category, isListReviewCategory }) => {
    if (isListReviewCategory) {
        const categoryItemCount = {};
        const seenItems = new Set();
        for (const item of category.items) {
            if (seenItems.has(item.name)) {
                categoryItemCount[item.name] += 1;
            } else {
                categoryItemCount[item.name] = 1;
                seenItems.add(item.name)
            }
        }
        const itemCountsArray: Array<CategoryItemProps> = [];
        for (const [itemName, itemCount] of Object.entries(categoryItemCount)) {
            const itemCountObject = {
                name: itemName,
                count: itemCount
            };
            itemCountsArray.push(itemCountObject);
        }
        return (
            <Box className="flex flex-wrap">
                {category?.items?.length ?
                    itemCountsArray.map((item, index) => (
                        <CategoryItem
                            key={uuid()}
                            name={item.name}
                            firstOfLine={index % 4 === 0}
                            belongsToFirstLine={index < 4}
                            count={item.count}
                            isListReviewCategory
                        />
                    ))
                    :
                    undefined}
            </Box>
        )
    }
    return (
        <Box className="flex flex-wrap">
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
                    />
                ))
                :
                undefined}
        </Box>
    )
};

export default CategoryItemList;