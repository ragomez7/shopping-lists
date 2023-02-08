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
            <Box
                id="shopping-list"
                className="ShoppingList"
                sx={{
                    width: '389px',
                    backgroundColor: '#fff0dd',
                    paddingLeft: '49px',
                    paddingTop: '43px',
                    paddingRight: '40px'
                }}
            >
                <AddItemBox />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '44px',
                    }}
                >
                    <Typography
                        sx={{
                            width: '159px',
                            height: '30px',
                            fontFamily: 'Quicksand',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '30px'
                        }}
                    >
                        {currentShoppingList?.name}
                    </Typography>
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