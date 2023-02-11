import React, { useContext, FC } from "react";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon"
import RemoveIcon from "@mui/icons-material/Remove";
import { ListCategoryContext } from "../../..";
import { ShoppingDashboardContext } from "../../../../../../pages/shopping";

export interface MutateItemQtytButtonProps {
    itemName?: string
    innerCountTally: number
    setInnerCountTally: (newCount: number) => void
}
const RemoveOneUnitButton: FC<MutateItemQtytButtonProps> = ({ itemName, innerCountTally, setInnerCountTally }) => {
    const handleRemoveOneUnitButtonOnClick = async () => {
        try {
            const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists/${listId}/categories?categoryId=${categoryId}&itemName=${itemName}`, {
                method: "DELETE"
            });
            await response.json();
            setInnerCountTally(innerCountTally - 1);
        } catch (err) {
            console.log(err)
        }
        
    }
    const { categoryId } = useContext(ListCategoryContext);
    const { currentShoppingList } = useContext(ShoppingDashboardContext);
    const listId = currentShoppingList?._id;
    return (
        <IconButton className="p-0 ml-[10px]"
            onClick={handleRemoveOneUnitButtonOnClick}
        >
            <SvgIcon>
                <RemoveIcon />
            </SvgIcon>

        </IconButton>
    )
};

export default RemoveOneUnitButton;