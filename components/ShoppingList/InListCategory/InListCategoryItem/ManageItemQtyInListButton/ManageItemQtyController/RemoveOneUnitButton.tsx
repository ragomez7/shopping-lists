import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon'
import RemoveIcon from '@mui/icons-material/Remove';
import { ListCategoryContext } from '../../..';
import { ShoppingDashboardContext } from '../../../../../../pages/shopping';

const RemoveOneUnitButton = ({ itemName, innerCountTally, setInnerCountTally }) => {
    const handleRemoveOneUnitButtonOnClick = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${itemName}`, {
                method: 'DELETE'
            });
            const json = await response.json();
            setInnerCountTally(innerCountTally - 1);
        } catch (err) {
            console.log(err)
        }
        
    }
    const { categoryId } = useContext(ListCategoryContext);
    const { currentShoppingList } = useContext(ShoppingDashboardContext);
    const { _id: listId } = currentShoppingList;
    return (
        <IconButton
            onClick={handleRemoveOneUnitButtonOnClick}
            sx={{
                padding: 0,
                marginLeft: '10px'
            }}
        >
            <SvgIcon>
                <RemoveIcon />
            </SvgIcon>

        </IconButton>
    )
};

export default RemoveOneUnitButton;