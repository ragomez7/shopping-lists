import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';


import RemoveOneUnitButton from './ManageItemQtyController/RemoveOneUnitButton';
import AddOneUnitButton from './ManageItemQtyController/AddOneUnitButton';
import ItemCountTallyButton from './ItemCountTallyButton';
import RemoveAllUnitsButton from './ManageItemQtyController/RemoveAllUnitsButton';
import ManageItemQtyController from './ManageItemQtyController';

const ManageItemQtyInListButton = ({ count, itemName }) => {
    const [isEditingItemQty, setIsEditingItemQty] = useState(false);
    const [innerCountTally, setInnerCountTally] = useState(count);
    useEffect(() => {
        const shoppingListElem = document.getElementById('shopping-list')
        shoppingListElem?.addEventListener('click', (e) => {
            console.log("click detected")
            console.log(`isEditing? ${isEditingItemQty}`)
            if (isEditingItemQty && !document?.getElementById('item-qty-controller')?.contains(e.target)) {
                console.log(true)
                setIsEditingItemQty(false)
            }
        })
    }, [isEditingItemQty])
    return (
        <>
            {isEditingItemQty ?
                <ManageItemQtyController 
                    itemName={itemName}
                    innerCountTally={innerCountTally}
                    setInnerCountTally={setInnerCountTally}
                    setIsEditingItemQty={setIsEditingItemQty}
                /> :
                <ItemCountTallyButton
                    innerCountTally={innerCountTally}
                    isActive
                    setIsEditingItemQty={setIsEditingItemQty}
                />
            }
        </>
    )
};
export default ManageItemQtyInListButton;