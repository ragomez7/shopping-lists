import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import { ShoppingDashboardContext } from '../../../../../../pages/shopping';
import { ListCategoryContext } from '../../..';

const AddOneUnitButton = ({ itemName, innerCountTally, setInnerCountTally }) => {
    const handleAddOneUnitButtonOnClick = async () => {
        try {
            console.log(`https://shopping-lists-api.herokuapp.com/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${itemName}`)
            const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${itemName}`, {
                method: 'POST'
            });
            const json = await response.json();
            setInnerCountTally(innerCountTally + 1);
        } catch (err) {
            console.log(err)
        }   
    }
    const { categoryId } = useContext(ListCategoryContext);
    const { currentShoppingList } = useContext(ShoppingDashboardContext);
    const { _id: listId } = currentShoppingList;

    return (
        <IconButton
            onClick={handleAddOneUnitButtonOnClick}
            sx={{
                padding: 0
            }}
        >
            <AddIcon />
        </IconButton>
    )
};

export default AddOneUnitButton;