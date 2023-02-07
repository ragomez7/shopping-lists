import { useContext } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { v4 as uuid } from 'uuid';
import ShoppingList from '../ShoppingList';
import ItemInfo from '../ItemInfo';
import AddNewItemForm from '../AddNewItemForm.tsx';
import Category from '../Categories'
import { ShoppingDashboardContext } from '../../pages/shopping';

const ListStatistics = () => {
    const { searchTerm,
        setSearchTerm,
        categories,
        userIsAddingNewItem,
        userIsViewingItem,
        itemThatIsBeingViewed,
        currentShoppingList
    } = useContext(ShoppingDashboardContext);
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