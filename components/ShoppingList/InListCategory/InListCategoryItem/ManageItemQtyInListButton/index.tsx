import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ManageItemQtyInListButton = ({ count }) => {
    const [isEditingItemQty, setIsEditingItemQty] = useState<boolean>(false);
    return (
        <>
            {isEditingItemQty ? <Box
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
                <IconButton
                    sx={{
                        padding: 0,
                        marginLeft: '10px'
                    }}
                >
                    <RemoveIcon />
                </IconButton>
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
                <IconButton
                    sx={{
                        padding: 0
                    }}
                >
                    <AddIcon />
                </IconButton>
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