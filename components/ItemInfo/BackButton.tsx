import React from 'react';
import { useContext } from 'react';
import { ShoppingDashboardContext } from '../../pages/shopping';
import { Button } from "@mui/material"


const BackButton = () => {
    const { setUserIsViewingItem, setItemThatIsBeingViewed } = useContext(ShoppingDashboardContext);
    const handleBackButtonOnClick = () => {
        setUserIsViewingItem(false);
        setItemThatIsBeingViewed({
            name: ""
        });
    }
    return (
            <Button className="font-sans font-bold font-sm leading-[17.5px] text-orange normal-case"
                onClick={handleBackButtonOnClick}
            >
                back
            </Button>
    )
};

export default BackButton;