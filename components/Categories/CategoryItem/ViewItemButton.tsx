import React, { FC, useContext } from "react";
import IconButton from "@mui/material/IconButton"
import ViewIcon from "@mui/icons-material/Add";
import { ShoppingDashboardContext } from "../../../pages/shopping";
import { ItemProps } from "../../ItemInfo";

const ViewItemButton: FC<ItemProps> = ({
    _id,
    name,
    categoryName,
    categoryId,
    note,
    imageUrl
}) => {
    const { setItemThatIsBeingViewed, setUserIsViewingItem } = useContext(ShoppingDashboardContext);
    const handleViewItemOnClick = () => {
        setItemThatIsBeingViewed(itemInfo);
        setUserIsViewingItem(true);
    }
    const itemInfo = {
        _id,
        name,
        categoryName,
        categoryId,
        note,
        imageUrl
    }
    return (
        <IconButton className="p-0"
            onClick={handleViewItemOnClick}
        >
            <ViewIcon />
        </IconButton>
    )
}
export default ViewItemButton;