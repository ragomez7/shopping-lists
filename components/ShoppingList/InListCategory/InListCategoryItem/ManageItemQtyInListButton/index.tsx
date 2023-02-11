import React, { useEffect, useContext, useState, useRef, FC } from "react";
import { ShoppingDashboardContext } from "../../../../../pages/shopping";
import ItemCountTallyButton from "./ItemCountTallyButton";
import ManageItemQtyController from "./ManageItemQtyController";
import { MutateItemQtytButtonProps } from "./ManageItemQtyController/RemoveOneUnitButton";
export interface NodeRef {
    current: any
}

export interface ManageQtyInListButtonProps extends MutateItemQtytButtonProps {
    controllerId?: string
}

const ManageItemQtyInListButton: FC<ManageQtyInListButtonProps> = ({ innerCountTally, setInnerCountTally, itemName, controllerId }) => {
    const { hasEditedItemQty, setHasEditedItemQty } = useContext(ShoppingDashboardContext);
    const [isEditingItemQty, setIsEditingItemQty] = useState<boolean>(false);
    const controllerRef: NodeRef = useRef<NodeRef>(null);
    useEffect(() => {
        function listenForClicksOutsideController(e) {
            if (isEditingItemQty && controllerRef.current && !controllerRef.current?.contains(e.target)) {
                setIsEditingItemQty(false)
                setHasEditedItemQty(hasEditedItemQty ? hasEditedItemQty + 1 : 1);
            }
        }
        const shoppingListElem = document.getElementById("shopping-list")
        shoppingListElem?.addEventListener("click", listenForClicksOutsideController)
        return () => {
            removeEventListener("click", listenForClicksOutsideController);
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