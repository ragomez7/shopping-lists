import { Button } from "@mui/material"
import { useContext } from "react";
import { ShoppingDashboardContext } from "../../../pages/shopping";


const CancelButton = () => {
    const { setUserIsAddingNewItem } = useContext(ShoppingDashboardContext);
    return (
        <Button
            onClick={() => setUserIsAddingNewItem(false)}
            style={{
                width: "87px",
                height: '61px',
                color: 'black',
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                textTransform: 'none',
                borderRadius: '12px',
                border: '1px solid black'
            }}
        >
            cancel
        </Button>
    )
};

export default CancelButton;