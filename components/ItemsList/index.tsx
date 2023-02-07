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

const ItemsList = () => {
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
            <Box className="ItemsList"
                sx={{
                    width: '957px',
                    backgroundColor: '#faf9fe',
                    paddingLeft: "80.5px",
                    paddingRight: "90px",
                    paddingY: '28px'
                }}
            >
                <Box sx={{
                    display: 'flex'
                }}>

                    <Typography
                        sx={{
                            fontSize: '26px',
                            lineHeight: '32.59px',
                            fontWeight: '700',
                            color: '#34333A',
                            width: '450.3px',
                            fontFamily: 'Quicksand',
                            marginTop: '10px'

                        }}
                    >
                        <span style={{
                            color: '#F9A109'
                        }}>Shopper{' '}</span>
                        allows you take your shopping list where you go
                    </Typography>
                    <TextField
                        id="search-item-field"
                        name="search-item-field"
                        placeholder="search item"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{
                            width: '276px',
                            height: '51px',
                            borderRadius: '12px',
                            backgroundColor: 'white',
                            marginLeft: '45px',
                            border: null
                        }}
                    />
                </Box>

                {categories.length ? categories.map((category) => (
                    <Category
                        key={uuid()}
                        category={category}
                    />
                )) : undefined}
            </Box>
            {
                userIsAddingNewItem ?
                    <AddNewItemForm categories={categories} /> :
                userIsViewingItem ?
                    <ItemInfo itemThatIsBeingViewed={itemThatIsBeingViewed} /> :
                    <ShoppingList currentShoppingList={currentShoppingList} />
            }
        </>
    )
}

export default ItemsList;