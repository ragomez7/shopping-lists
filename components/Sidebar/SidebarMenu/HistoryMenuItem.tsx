import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon"
import ReplayIcon from "@mui/icons-material/Replay";
import Tooltip from "@mui/material/Tooltip";
import { ShoppingDashboardContext } from "../../../pages/shopping";

const HistoryMenuItem = () => {
    const { 
        setCurrentUI,
        isViewingListHistoryDetail,
        setIsViewingListHistoryDetail,
        setListBeingViewedId
    } = useContext(ShoppingDashboardContext);
    const handleHistoryButtonClick = () => {
        if (isViewingListHistoryDetail) {
            setIsViewingListHistoryDetail(false);
            setListBeingViewedId("")
        }
        if (setCurrentUI) {
            setCurrentUI("ListHistory")
        } 
    }
    return (
        <Box className="h-[90px] w-[100%] flex justify-center items-center ">
            <Tooltip title="History" placement="right" >
                <IconButton className="p-0 h-[18.5px] w-[15px] "
                    onClick={handleHistoryButtonClick}
                >
                    <SvgIcon
                    >
                        <ReplayIcon />
                    </SvgIcon>
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default HistoryMenuItem;