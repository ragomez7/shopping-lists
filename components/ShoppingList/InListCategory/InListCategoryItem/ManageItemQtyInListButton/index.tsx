import { useEffect, useState } from 'react';
import ItemCountTallyButton from './ItemCountTallyButton';
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