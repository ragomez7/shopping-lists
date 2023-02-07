import React from 'react';
import { useContext } from 'react';
import { ShoppingDashboardContext } from '../../pages/shopping';
import { Button } from "@mui/material"


const BackButton = () => {
    const { setUserIsViewingItem, setItemThatIsBeingViewed } = useContext(ShoppingDashboardContext);
    const handleBackButtonOnClick = () => {
        setUserIsViewingItem(false);
        setItemThatIsBeingViewed({});
    }
    return (
            <Button
                onClick={handleBackButtonOnClick}
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17.5px',
                    color: '#F9A109',
                    textTransform: 'none'
                }}
            >
                back
            </Button>
    )
};

export default BackButton;