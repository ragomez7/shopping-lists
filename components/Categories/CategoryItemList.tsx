import React from "react";
import { v4 as uuid } from 'uuid';
import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem";

const CategoryItemList = ({ category, isListReviewCategory }) => {
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
        };
        const itemCountsArray: object[] = [];
        for (const [itemName, itemCount] of Object.entries(categoryItemCount)) {
            const itemCountObject = {
                name: itemName,
                count: itemCount
            };
            itemCountsArray.push(itemCountObject);
        }
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {category?.items?.length ?
                    itemCountsArray.map((item, index) => (
                        <CategoryItem
                            key={uuid()}
                            name={item.name}
                            firstOfLine={index % 4 === 0}
                            belongsToFirstLine={index < 4}
                            isListReviewCategory
                            count={item.count}
                        />
                    ))
                    :
                    undefined}
            </Box>
        )
    }
    return (
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
                ))
                :
                undefined}
        </Box>
    )
};

export default CategoryItemList;