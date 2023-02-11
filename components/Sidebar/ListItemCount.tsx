import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { SvgIcon } from "@mui/material";
import Badge from "@mui/material/Badge";
const ListItemCount = () => {
    return (
        <Badge className="w-[42px] h-[42px] rounded-[20px] bg-orange flex items-center justify-center" 
            badgeContent={4} 
            color="error"
        >
            <SvgIcon className="text-white">
                <ShoppingCartCheckoutIcon />
            </SvgIcon>
        </Badge>
    )
};

export default ListItemCount;