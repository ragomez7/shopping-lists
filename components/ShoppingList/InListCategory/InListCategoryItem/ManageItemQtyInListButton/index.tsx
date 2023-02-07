import { useEffect, useContext } from 'react';
import { ShoppingDashboardContext } from '../../../../../pages/shopping';
import ItemCountTallyButton from './ItemCountTallyButton';
import ManageItemQtyController from './ManageItemQtyController';

const ManageItemQtyInListButton = ({ innerCountTally, setInnerCountTally, itemName }) => {
    const { isEditingItemQty, setIsEditingItemQty } = useContext(ShoppingDashboardContext);
    useEffect(() => {
        const shoppingListElem = document.getElementById('shopping-list')
        shoppingListElem?.addEventListener('click', (e) => {
            if (isEditingItemQty && !document?.getElementById('item-qty-controller')?.contains(e.target)) {
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