import React, { useEffect, useContext, useState } from 'react';
import { ShoppingDashboardContext } from '../../../../../pages/shopping';
import ItemCountTallyButton from './ItemCountTallyButton';
import ManageItemQtyController from './ManageItemQtyController';

const ManageItemQtyInListButton = ({ innerCountTally, setInnerCountTally, itemName, controllerId }) => {
    const { hasEditedItemQty, setHasEditedItemQty } = useContext(ShoppingDashboardContext);
    const [isEditingItemQty, setIsEditingItemQty] = useState<boolean>(false);
    console.log(isEditingItemQty)
    useEffect(() => {
        function listenForClicksOutsideController(e) {
            if (isEditingItemQty && !document?.getElementById(`item-qty-controller-${controllerId}`)?.contains(e.target)) {
                setIsEditingItemQty(false)
                setHasEditedItemQty(hasEditedItemQty + 1);
            }
        }
        const shoppingListElem = document.getElementById('shopping-list')
        shoppingListElem?.addEventListener('click', listenForClicksOutsideController)
        return () => {
            removeEventListener('click', listenForClicksOutsideController);
        }
    }, [isEditingItemQty])
    return (
        <>
            {isEditingItemQty ?
                <ManageItemQtyController 
                    itemName={itemName}
                    innerCountTally={innerCountTally}
                    setInnerCountTally={setInnerCountTally}
                    setIsEditingItemQty={setIsEditingItemQty}
                    controllerId={controllerId}
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