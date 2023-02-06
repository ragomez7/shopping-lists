import React from "react";
import { v4 as uuid } from 'uuid';
import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem";

const CategoryItemList = ({ category }) => {
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