import React from 'react';
import Box from '@mui/material/Box';
import RemoveAllUnitsButton from './RemoveAllUnitsButton';
import RemoveOneUnitButton from './RemoveOneUnitButton';
import AddOneUnitButton from './AddOneUnitButton';
import ItemCountTallyButton from '../ItemCountTallyButton';
const ManageItemQtyController = ({ itemName, innerCountTally, setInnerCountTally, setIsEditingItemQty, controllerId }) => {
    return (
        <Box
            id={`item-qty-controller-${controllerId}`}
            sx={{
                width: '174px',
                height: '45px',
                backgroundColor: '#FFF',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center'
            }}
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