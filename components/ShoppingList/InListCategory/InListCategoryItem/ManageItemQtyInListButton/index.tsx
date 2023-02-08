import { refType } from '@mui/utils';
import React, { useEffect, useContext, useState, useRef } from 'react';
import { ShoppingDashboardContext } from '../../../../../pages/shopping';
import ItemCountTallyButton from './ItemCountTallyButton';
import ManageItemQtyController from './ManageItemQtyController';

const ManageItemQtyInListButton = ({ innerCountTally, setInnerCountTally, itemName, controllerId }) => {
    const { hasEditedItemQty, setHasEditedItemQty } = useContext(ShoppingDashboardContext);
    const [isEditingItemQty, setIsEditingItemQty] = useState<boolean>(false);
    const controllerRef = useRef(null);
    useEffect(() => {
        console.log(isEditingItemQty)
        function listenForClicksOutsideController(e) {
            if (isEditingItemQty && controllerRef.current && !controllerRef.current?.contains(e.target)) {
                setIsEditingItemQty(false)
                setHasEditedItemQty(hasEditedItemQty + 1);
            }
        }
        const shoppingListElem = document.getElementById('shopping-list')
        shoppingListElem?.addEventListener('click', listenForClicksOutsideController)
        return () => {
            removeEventListener('click', listenForClicksOutsideController);
        }
    }, [controllerRef, isEditingItemQty])
    return (
        <>
            {isEditingItemQty ?
                <ManageItemQtyController 
                refForward={controllerRef}
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