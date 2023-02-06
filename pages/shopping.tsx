import { useState, useEffect, createContext } from 'react'
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box, Button } from "@mui/material"
import { v4 as uuid } from 'uuid';
import Category from '../components/Categories';
import ShoppingList from '../components/ShoppingList';
import AddNewItemForm from '../components/AddNewItemForm.tsx';
import ItemInfo from '../components/ItemInfo';


interface IShoppingDashboardContext {
    userIsAddingNewItem?: boolean
    setUserIsAddingNewItem: (newState: boolean) => void
    userIsViewingItem?: boolean
    setUserIsViewingItem: (newState: boolean) => void
    itemThatIsBeingViewed: object
    setItemThatIsBeingViewed: (newState: object) => void
    currentShoppingList: object
}
export const ShoppingDashboardContext = createContext<IShoppingDashboardContext>({});
const ShoppingDashboardPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categories, setCategories] = useState<Array<object>>([{}]);
    const [userIsAddingNewItem, setUserIsAddingNewItem] = useState<boolean>(false);
    const [itemThatIsBeingViewed, setItemThatIsBeingViewed] = useState<object>({});
    const [currentShoppingList, setCurrentShoppingList] = useState<object>({});
    const [ userIsViewingItem, setUserIsViewingItem ] = useState<boolean>(false);
    console.log(currentShoppingList)
    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('http://localhost:3000/api/categories', {
                headers: {
                    'Accept': "application/json"
                }
            });
            const categories = await response.json();
            console.log(categories)
            setCategories(categories);
        }
        fetchCategories()

        async function fetchPendingListOrCreateOne() {
            const response = await fetch('http://localhost:3000/api/lists');
            const lists = await response.json();
            // console.log(lists)
            const pendingList = lists?.find((list) => list.status === 'pending');
            // console.log(pendingList)
            if (pendingList) {
                setCurrentShoppingList(pendingList);
            } else {
                // create new list
                const response = await fetch(`http://localhost:3000/api/lists?name=Shopping List`);
                const newList = await response.json();
                setCurrentShoppingList(newList);
            }
        }
        fetchPendingListOrCreateOne()

    }, [userIsAddingNewItem, userIsViewingItem])
    const contextObject = {
        userIsAddingNewItem,
        setUserIsAddingNewItem,
        userIsViewingItem,
        setUserIsViewingItem,
        itemThatIsBeingViewed,
        setItemThatIsBeingViewed,
        currentShoppingList
    }
    return (
        <ShoppingDashboardContext.Provider value={contextObject}>
            <Box sx={{
                height: '100%',
                display: 'flex'
            }} >
                <Box
                    className="SideBar"
                    sx={{
                        height: '907px',
                        width: '94px',
                        backgroundColor: 'black'
                    }}
                >
                </Box>
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
                            }} >Shoppingify{' '}</span>
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
                {userIsAddingNewItem ?
                    <AddNewItemForm categories={categories} /> :
                    userIsViewingItem ?
                    <ItemInfo itemThatIsBeingViewed={itemThatIsBeingViewed} /> :
                    <ShoppingList currentShoppingList={currentShoppingList} />
                }
            </Box>
        </ShoppingDashboardContext.Provider>
    )
};

export default ShoppingDashboardPage