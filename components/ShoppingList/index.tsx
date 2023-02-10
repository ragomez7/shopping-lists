import React, { useState, FC } from 'react';
import { Box, Typography } from "@mui/material"
import { v4 as uuid } from 'uuid'
import AddItemBox from "./AddItemBox";
import EditShoppingListButton from "./EditShoppingListButton";
import InListCategory from "./InListCategory";
import { CategoryProps } from '../Categories';

export interface ShoppingListProps {
    _id?: string
    name?: string
    status?: string
    categories?: Array<CategoryProps>
    createdAt: string
    updatedAt?: string
}

interface ShoppingListComponentProps {
    currentShoppingList?: ShoppingListProps
}

const ShoppingList: FC<ShoppingListComponentProps> = ({ currentShoppingList }) => {
    const [isInEditingMode, setIsInEditingMode] = useState<boolean>(false);
    return (
            <Box className="w-[389px] bg-[#FFF0DD] pl-[49px] pt-[43px] pr-[40px]"
                id="shopping-list"
            >
                <AddItemBox />
                <Box className="flex justify-between mt-[44px]">
                    <p className="w-[159px] h-[30px] font-sans font-bold text-2xl leading-[30px]">
                        {currentShoppingList?.name}
                    </p>
                    <EditShoppingListButton isInEditingMode={isInEditingMode} setIsInEditingMode={setIsInEditingMode} />
                </Box>
                {currentShoppingList?.categories?.map((category) => (
                    <InListCategory
                        key={uuid()}
                        category={category}
                        isInEditingMode={isInEditingMode}
                    />
                ))}
            </Box>

    )
};

export default ShoppingList;