import React, { useContext } from 'react';
import Box from '@mui/material/Box'
import ShoppingList from '../ShoppingList';
import { ShoppingDashboardContext } from '../../pages/shopping';

const ListStatistics = () => {
    const { currentShoppingList } = useContext(ShoppingDashboardContext);
    return (
        <>
            <Box className="ListHistory"
                sx={{
                    width: '957px',
                    backgroundColor: '#faf9fe',
                    paddingLeft: "80.5px",
                    paddingRight: "90px",
                    paddingY: '28px'
                }}
            >
                List Statistics
            </Box>
            <ShoppingList currentShoppingList={currentShoppingList} />
        </>
    )
}

export default ListStatistics;