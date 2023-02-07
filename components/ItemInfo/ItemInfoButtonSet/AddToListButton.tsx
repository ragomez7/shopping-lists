import { Button } from "@mui/material"
import { useContext } from "react";
import { ItemInfoContext } from "..";
import { ShoppingDashboardContext } from "../../../pages/shopping";

const AddToListButton = () => {

    const { currentShoppingList, setUserIsViewingItem } = useContext(ShoppingDashboardContext);
    const { _id, categoryId } = useContext(ItemInfoContext);
    const handleAddToListButtonOnClick = async () => {
        const addItemToList = async () => {
            const response = await fetch(`/api/lists/${currentShoppingList._id}/categories?categoryId=${categoryId}&itemId=${_id}`, {
                method: "POST"
            })
            const json = await response.json();
        } 
        await addItemToList();
        setUserIsViewingItem(false);
    }
    return (
        <Button
            onClick={handleAddToListButtonOnClick}
            style={{
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                width: '124px',
                height: '61px',
                backgroundColor: '#F9A109',
                color: '#FFF',
                borderRadius: '12px',
                textTransform: 'none'
            }}
        >
            Add to list
        </Button>
    )
};

export default AddToListButton;