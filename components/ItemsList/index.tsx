import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";
import ShoppingList from "../ShoppingList";
import ItemInfo from "../ItemInfo";
import AddNewItemForm from "../AddNewItemForm.tsx";
import Category from "../Categories";
import { ShoppingDashboardContext } from "../../pages/shopping";

const ItemsList = () => {
    const { searchTerm,
        setSearchTerm,
        categories,
        userIsAddingNewItem,
        userIsViewingItem,
        itemThatIsBeingViewed,
        currentShoppingList
    } = useContext(ShoppingDashboardContext);
    return (
        <Box className="grid grid-cols-[auto_389px]">
            <Box className="bg-backgroundgrey pl-[80.5px] pr-[90px] py-[28px]">
                <Box className="flex">
                    <p className="text-[26px] leading-8 font-bold text-black w-[450px] font-sans mt-[10px]">
                        <span className="text-orange">Shopper{' '}</span>
                        allows you to take your shopping list where you go
                    </p>
                    <TextField
                        className="w-[276px] h-[51px] rounded-xl bg-white ml-[45px]"
                        id="search-item-field"
                        name="search-item-field"
                        placeholder="search item"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Box>

                {categories?.length ? categories.map((category) => (
                    <Category
                        key={uuid()}
                        category={category}
                    />
                )) : undefined}
            </Box>
            {
                userIsAddingNewItem ?
                    <AddNewItemForm categories={categories} /> :
                userIsViewingItem ?
                    <ItemInfo itemThatIsBeingViewed={itemThatIsBeingViewed} /> :
                    <ShoppingList currentShoppingList={currentShoppingList} />
            }
        </Box>
    )
}

export default ItemsList;