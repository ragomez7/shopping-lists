import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Tooltip from "@mui/material/Tooltip";
import { ShoppingDashboardContext } from "../../../pages/shopping";

const ListMenuItem = () => {
    const { setCurrentUI } = useContext(ShoppingDashboardContext);
    const handleListButtonClick = () => {
        if (setCurrentUI) setCurrentUI("ItemsList")
    }
    return (
        <Box className="h-[90px] w-[100%] flex justify-center items-center">
            <Tooltip title="Items" placement="right" >
                <IconButton className="p-0 h-[18.5px] w-[15px]"
                    onClick={handleListButtonClick}
                >
                    <SvgIcon>
                        <FormatListBulletedIcon />
                    </SvgIcon>
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default ListMenuItem;