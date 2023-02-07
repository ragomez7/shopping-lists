import { useState, useEffect, createContext } from 'react'
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box, Button } from "@mui/material"
import { v4 as uuid } from 'uuid';
import Category from '../../components/Categories';
import ShoppingList from '../../components/ShoppingList';
import AddNewItemForm from '../../components/AddNewItemForm.tsx';
import ItemInfo from '../../components/ItemInfo';
import SideBar from '../../components/Sidebar';
import ItemsList from '../../components/ItemsList';
import ListHistory from '../../components/ListHistory';
import ListStatistics from '../../components/ListStatistics';
import Layout from '../../components/Layout';


interface IShoppingDashboardContext {
    userIsAddingNewItem?: boolean
    setUserIsAddingNewItem: (newState: boolean) => void
    userIsViewingItem?: boolean
    setUserIsViewingItem: (newState: boolean) => void
    itemThatIsBeingViewed: object
    setItemThatIsBeingViewed: (newState: object) => void
    currentShoppingList: object
    searchTerm: string
    setSearchTerm: (newState: string) => void
    categories: object []
    currentUI: string
    setCurrentUI: (newState: string) => void
}
export const ShoppingDashboardContext = createContext<IShoppingDashboardContext>({});
const ShoppingDashboardPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categories, setCategories] = useState<Array<object>>([{}]);
    const [userIsAddingNewItem, setUserIsAddingNewItem] = useState<boolean>(false);
    const [itemThatIsBeingViewed, setItemThatIsBeingViewed] = useState<object>({});
    const [currentShoppingList, setCurrentShoppingList] = useState<object>({});
    const [ userIsViewingItem, setUserIsViewingItem ] = useState<boolean>(false);
    const [ currentUI, setCurrentUI ] = useState<string>("ItemsList");
    const [ allLists, setAllLists ] = useState<object>({})
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

        async function fetchAllListsAndCheckIfPendingListExistsElseCreateOne() {
            const response = await fetch('http://localhost:3000/api/lists');
            const lists = await response.json();
            const pendingList = lists?.length ? [...lists].find((list) => list.status === 'pending') : [];
            if (pendingList) {
                setCurrentShoppingList(pendingList);
            } else {
                const response = await fetch(`http://localhost:3000/api/lists?name=Shopping List`);
                const newList = await response.json();
                setCurrentShoppingList(newList);
            }
            setAllLists(lists);
        }
        fetchAllListsAndCheckIfPendingListExistsElseCreateOne()
        console.log(document.location)
        if(document.location.toString().includes('redirectToHistory')) {
            setCurrentUI("ListHistory")
        }
    }, [userIsAddingNewItem, userIsViewingItem])
    const contextObject = {
        userIsAddingNewItem,
        setUserIsAddingNewItem,
        userIsViewingItem,
        setUserIsViewingItem,
        itemThatIsBeingViewed,
        setItemThatIsBeingViewed,
        currentShoppingList,
        searchTerm,
        setSearchTerm,
        categories,
        currentUI,
        setCurrentUI
    }
    return (
        <ShoppingDashboardContext.Provider value={contextObject}>
            <Layout>
                {currentUI === "ItemsList" ?
                    <ItemsList /> :
                 currentUI === "ListHistory" ?
                    <ListHistory lists={allLists} /> :
                currentUI === "ListStatistics" ?
                    <ListStatistics /> :
                <ItemsList />
                    }
            </Layout>
        </ShoppingDashboardContext.Provider>
    )
};

export default ShoppingDashboardPage