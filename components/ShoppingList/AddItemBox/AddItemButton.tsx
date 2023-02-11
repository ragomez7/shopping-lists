import React, { useContext } from "react";
import { ShoppingDashboardContext } from "../../../pages/shopping";

const AddItemButton = () => {
    const { setUserIsAddingNewItem } = useContext(ShoppingDashboardContext);

    return (
        <button className="ml-[122px] w-[120px] h-[40px] rounded-xl bg-white text-black font-sans font-bold text-sm leading-[17.5px] mt-[25px] "
            onClick={() => setUserIsAddingNewItem(true)}
        >
            Add Item
        </button>
    )
};
export default AddItemButton;