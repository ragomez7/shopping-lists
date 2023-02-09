import React, { useContext } from 'react';
import Box from '@mui/material/Box'
import ShoppingList from '../ShoppingList';
import { ShoppingDashboardContext } from '../../pages/shopping';

const ListStatistics = () => {
    const { currentShoppingList } = useContext(ShoppingDashboardContext);
    return (
        <Box className="grid grid-cols-[auto_389px]">
            <Box className="bg-backgroundgrey pl-[80.5px] pr-[90px] py-[28px]">
                List Statistics
            </Box>
            <ShoppingList currentShoppingList={currentShoppingList} />
        </Box>
    )
}

export default ListStatistics;