import React, { useContext } from "react";
import { Button } from "@mui/material"
import { ShoppingDashboardContext } from "../../../pages/shopping";

const AddItemButton = () => {
    const { setUserIsAddingNewItem } = useContext(ShoppingDashboardContext);

    return (
        <Button
            onClick={() => setUserIsAddingNewItem(true)}
            style={{
                marginLeft: '122px',
                width: '120px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '17.5px',
                marginTop: '25px'
            }}
        >
            Add Item
        </Button>
    )
};
export default AddItemButton;