import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon"
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Tooltip from "@mui/material/Tooltip";
import { ShoppingDashboardContext } from "../../../pages/shopping";

const StatisticsMenuItem = () => {
    const { setCurrentUI } = useContext(ShoppingDashboardContext);
    return (
        <Box className="h-[90px] w-[100%] flex justify-center items-center">
            <Tooltip title="Statistics" placement="right" >
            <IconButton className="p-0 h-[18.5px] w-[15px]"
                onClick={() => setCurrentUI("ListStatistics")}
            >
                <SvgIcon>
                    <QueryStatsIcon />
                </SvgIcon>
            </IconButton>
            </Tooltip>
        </Box>
    )
};

export default StatisticsMenuItem;