import React, { createContext, FC } from 'react';
import { Typography } from "@mui/material";
import { v4 as uuid } from 'uuid'
import InListCategoryItem from "./InListCategoryItem";
import { CategoryItemProps } from '../../Categories';
import { CategoryProps } from '../../Categories';

export interface LisCategoryContextProps {
    categoryId?: string
}

export const ListCategoryContext = createContext<LisCategoryContextProps>({});

interface InListCategoryProps {
    category: CategoryProps
    isInEditingMode: boolean
}
const InListCategory: FC<InListCategoryProps> = ({ category, isInEditingMode }) => {
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
    const itemCountsArray: CategoryItemProps [] = [];
    for ( const [itemName, itemCount] of Object.entries(categoryItemCount)) {
        const itemCountObject = {
            name: itemName,
            count: itemCount
        };
        itemCountsArray.push(itemCountObject);
    }
    const inListCategoryContextObject = {
        categoryId: category._id?.toString()
    }
    return (
        <ListCategoryContext.Provider value={inListCategoryContextObject}>
            <Typography className="mt-[40px] font-sans font-medium text-sm leading-[17.5px] text-[#828282]">
                {category.name}
            </Typography>
            {itemCountsArray?.map((item) =>  {
                const key = uuid();
                return (
                <InListCategoryItem
                    key={key}
                    name={item?.name}
                    count={item?.count}
                    isInEditingMode={isInEditingMode}
                    controllerId={key}
                />
                )
            })}
        </ListCategoryContext.Provider>
    )
};

export default InListCategory;