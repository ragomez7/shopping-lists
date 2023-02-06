import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveOneUnitButton from './RemoveOneUnitButton';
import AddOneUnitButton from './AddOneUnitButton';

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
                <Box
                    id="item-qty-controller"
                    sx={{
                        width: '174px',
                        height: '45px',
                        backgroundColor: '#FFF',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <IconButton
                        style={{
                            width: '37px',
                            height: '45px',
                            backgroundColor: '#F9A109',
                            borderRadius: '12px',
                            padding: 0
                        }}
                    >
                        <SvgIcon
                            sx={{
                                color: '#FFF'
                            }}
                        >
                            <DeleteOutlineIcon />
                        </SvgIcon>
                    </IconButton>
                    <RemoveOneUnitButton itemName={itemName}
                        innerCountTally={innerCountTally}
                        setInnerCountTally={setInnerCountTally}
                    />
                    <Button
                        style={{
                            fontFamily: 'Quicksand',
                            width: '68px',
                            height: '32px',
                            border: '2px solid #F9A109',
                            borderRadius: '24px',
                            color: '#F9A109',
                            textTransform: 'none'
                        }}
                    >
                        {innerCountTally} pcs
                    </Button>
                    <AddOneUnitButton 
                        itemName={itemName}
                        innerCountTally={innerCountTally}
                        setInnerCountTally={setInnerCountTally}
                    />
                </Box> :
                <Button
                    onClick={() => setIsEditingItemQty(true)}
                    style={{
                        fontFamily: 'Quicksand',
                        width: '68px',
                        height: '32px',
                        border: '2px solid #F9A109',
                        borderRadius: '24px',
                        color: '#F9A109',
                        textTransform: 'none'
                    }}
                >
                    {count} pcs
                </Button>
            }
        </>
    )
};
export default ManageItemQtyInListButton;