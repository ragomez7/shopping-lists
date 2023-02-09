import React,  { FC } from 'react';
import Box from '@mui/material/Box';
import RemoveAllUnitsButton from './RemoveAllUnitsButton';
import RemoveOneUnitButton from './RemoveOneUnitButton';
import AddOneUnitButton from './AddOneUnitButton';
import ItemCountTallyButton from '../ItemCountTallyButton';
import { NodeRef } from '..';
import { MutateItemQtytButtonProps } from './RemoveOneUnitButton';

interface ManageItemQtyControllerProps extends MutateItemQtytButtonProps {
    refForward: NodeRef
    setIsEditingItemQty: (newVal: boolean) => void
    controllerId?: string
} 
const ManageItemQtyController: FC<ManageItemQtyControllerProps>  = ({ 
    refForward, 
    itemName, 
    innerCountTally, 
    setInnerCountTally, 
    setIsEditingItemQty, 
    controllerId 
}) => {
    return (
        <Box className="w-[174px] h-[45px] bg-white rounded-xl flex items-center "
            ref={refForward}
            id={`item-qty-controller-${controllerId}`}
        >
            <RemoveAllUnitsButton />
            <RemoveOneUnitButton itemName={itemName}
                innerCountTally={innerCountTally}
                setInnerCountTally={setInnerCountTally}
            />
            <ItemCountTallyButton
                innerCountTally={innerCountTally}
                setIsEditingItemQty={setIsEditingItemQty}
            />
            <AddOneUnitButton
                itemName={itemName}
                innerCountTally={innerCountTally}
                setInnerCountTally={setInnerCountTally}
            />
        </Box>
    )
};

export default ManageItemQtyController;