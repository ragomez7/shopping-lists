import React from "react";
import { useContext } from "react";
import { ShoppingDashboardContext } from "../../../pages/shopping";

const CancelButton = () => {
    const { setUserIsAddingNewItem } = useContext(ShoppingDashboardContext);
    return (
        <button
            className="w-[87px] h-[61px] text-black font-['Quicksand'] font-bold text-base leading-5 normal-case rounded-xl border border-solid border-black"
            onClick={() => setUserIsAddingNewItem(false)}
        >
            cancel
        </button>
    )
};

export default CancelButton;