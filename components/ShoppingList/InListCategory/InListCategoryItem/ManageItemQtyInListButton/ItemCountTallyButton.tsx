import React, { FC } from "react";

interface ItemCountTallyButtonProps {
    innerCountTally?: number
    isActive?: boolean
    setIsEditingItemQty: (state: boolean) => void 
}

const ItemCountTallyButton: FC<ItemCountTallyButtonProps> = ({ innerCountTally, isActive, setIsEditingItemQty }) => {
    return (
        <button className="font-sans text-orange w-[68px] h-[32px] border-2 border-solid border-orange rounded-3xl normal-case "
            onClick={ isActive ? () => setIsEditingItemQty(true) : undefined}
        >
            {innerCountTally} pcs
        </button>
    )
};

export default ItemCountTallyButton;