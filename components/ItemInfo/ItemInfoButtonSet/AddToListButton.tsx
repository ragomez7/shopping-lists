import React, { useContext } from "react";
import { ItemInfoContext } from "..";
import { ShoppingDashboardContext } from "../../../pages/shopping";

const AddToListButton = () => {
    const { currentShoppingList, setUserIsViewingItem } = useContext(ShoppingDashboardContext);
    const { _id, categoryId } = useContext(ItemInfoContext);
    const handleAddToListButtonOnClick = async () => {
        const addItemToList = async () => {
            const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists/${currentShoppingList?._id}/categories?categoryId=${categoryId}&itemId=${_id}`, {
                method: "POST"
            })
            await response.json();
        } 
        await addItemToList();
        setUserIsViewingItem(false);
    }
    return (
        <button className="font-['Quicksand'] font-bold text-base leading-5 w-[124px] h-[61px] bg-orange text-[#FFF] rounded-xl normal-case"
            onClick={handleAddToListButtonOnClick}
        >
            Add to list
        </button>
    )
};

export default AddToListButton;