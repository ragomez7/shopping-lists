import React from "react";
import { useContext } from "react";
import { ShoppingDashboardContext } from "../../pages/shopping";

const BackButton = () => {
    const { setUserIsViewingItem, setItemThatIsBeingViewed } = useContext(ShoppingDashboardContext);
    const handleBackButtonOnClick = () => {
        setUserIsViewingItem(false);
        setItemThatIsBeingViewed({
            name: ""
        });
    }
    return (
            <button className="font-sans font-bold font-sm leading-[17.5px] text-orange normal-case"
                onClick={handleBackButtonOnClick}
            >
                back
            </button>
    )
};

export default BackButton;