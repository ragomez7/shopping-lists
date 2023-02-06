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
    const { _id: listId } = currentShoppingList;
    const handleDeleteButtonOnClick = async () => {
        console.log(_id, name, categoryId)
        const deleteItemFromList = async () => {
            const response = await fetch(`http://localhost:3000/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${name}`, {
                method: 'DELETE'
            });
            const json = await response.json();
            console.log(json)
        }
        const deleteItemFromCategory = async () => {
            const response = await fetch(`http://localhost:3000/api/categories/${categoryId}/items?itemId=${_id}`, {
                method: 'DELETE'
            })
            const json = await response.json();
            console.log(json)
        };
        console.log('1')
        await deleteItemFromList();
        await deleteItemFromCategory();
        setUserIsViewingItem(false);
        console.log('2')
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