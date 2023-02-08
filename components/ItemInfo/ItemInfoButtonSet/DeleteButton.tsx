import React from 'react';
import { useContext } from 'react';
import { ItemInfoContext } from '..';
import { Button } from "@mui/material"
import { ShoppingDashboardContext } from '../../../pages/shopping';

const DeleteButton = () => {
    const {
        _id,
        name,
        categoryId
    } = useContext(ItemInfoContext);
    const { setUserIsViewingItem, currentShoppingList } = useContext(ShoppingDashboardContext);
    const listId = currentShoppingList?._id
    const handleDeleteButtonOnClick = async () => {
        const deleteItemFromList = async () => {
            try {
                const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${name}&deleteAllInstances=true`, {
                    method: 'DELETE'
                });
                await response.json();
            } catch (err) {
                console.log(err)
            }
            
        }
        const deleteItemFromCategory = async () => {
            try {
                const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/categories/${categoryId}/items?itemId=${_id}`, {
                    method: 'DELETE'
                })
                await response.json();
            } catch (err) {
                console.log(err)
            }
            
        };
        await deleteItemFromList();
        await deleteItemFromCategory();
        setUserIsViewingItem(false);
    }
    return (
            <Button
                onClick={handleDeleteButtonOnClick}
                style={{
                    fontFamily: 'Quicksand',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px',
                    width: '124px',
                    height: '61px',
                    color: '#000',
                    borderRadius: '12px',
                    textTransform: 'none',
                    border: '1px solid black'
                }}
            >
                delete
            </Button>
        
    )
};

export default DeleteButton;