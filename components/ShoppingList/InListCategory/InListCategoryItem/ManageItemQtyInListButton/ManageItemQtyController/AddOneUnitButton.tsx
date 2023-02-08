import React, { useContext, FC } from 'react';
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import { ShoppingDashboardContext } from '../../../../../../pages/shopping';
import { ListCategoryContext } from '../../..';
import { MutateItemQtytButtonProps } from './RemoveOneUnitButton';

const AddOneUnitButton : FC<MutateItemQtytButtonProps>= ({ itemName, innerCountTally, setInnerCountTally }) => {
    const handleAddOneUnitButtonOnClick = async () => {
        try {
            console.log(`https://shopping-lists-api.herokuapp.com/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${itemName}`)
            const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${itemName}`, {
                method: 'POST'
            });
            await response.json();
            setInnerCountTally(innerCountTally + 1);
        } catch (err) {
            console.log(err)
        }   
    }
    const { categoryId } = useContext(ListCategoryContext);
    const { currentShoppingList } = useContext(ShoppingDashboardContext);
    const listId = currentShoppingList?._id;

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