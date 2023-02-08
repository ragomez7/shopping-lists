import { useState, useEffect, createContext } from 'react'
import ItemsList from '../../components/ItemsList';
import ListHistory from '../../components/ListHistory';
import ListStatistics from '../../components/ListStatistics';
import Layout from '../../components/Layout';
import { ItemProps } from '../../components/ItemInfo';
import { ShoppingListProps } from '../../components/ShoppingList';
import { CategoryProps } from '../../components/Categories';

interface IShoppingDashboardContext {
    userIsAddingNewItem?: boolean
    setUserIsAddingNewItem?: (newState: boolean) => void
    userIsViewingItem?: boolean
    setUserIsViewingItem?: (newState: boolean) => void
    itemThatIsBeingViewed?: ItemProps
    setItemThatIsBeingViewed?: (newState: ItemProps) => void
    currentShoppingList?: ShoppingListProps
    searchTerm?: string
    setSearchTerm?: (newState: string) => void
    categories?: CategoryProps []
    currentUI?: string
    setCurrentUI?: (newState: string) => void
    hasEditedItemQty?: number
    setHasEditedItemQty?: (newState: number) => void
}
export const ShoppingDashboardContext = createContext<any>({});
const ShoppingDashboardPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categories, setCategories] = useState<Array<CategoryProps>>([{}]);
    const [userIsAddingNewItem, setUserIsAddingNewItem] = useState<boolean>(false);
    const [itemThatIsBeingViewed, setItemThatIsBeingViewed] = useState<ItemProps>({});
    const [currentShoppingList, setCurrentShoppingList] = useState<ShoppingListProps>({});
    const [ userIsViewingItem, setUserIsViewingItem ] = useState<boolean>(false);
    const [hasEditedItemQty, setHasEditedItemQty] = useState<number>(0);
    const [ currentUI, setCurrentUI ] = useState<string>("ItemsList");
    const [ allLists, setAllLists ] = useState<object>({})
    useEffect(() => {
        document.title = "Shopper"
        async function fetchCategories() {
            const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/categories`, {
                headers: {
                    'Accept': "application/json"
                }
            });
            const categories = await response.json();
            setCategories(categories);
        }
        fetchCategories()

        async function fetchAllListsAndCheckIfPendingListExistsElseCreateOne() {
            const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists`);
            const lists = await response.json();
            const pendingList = lists?.length ? [...lists].find((list) => list.status === 'pending') : [];
            if (pendingList) {
                setCurrentShoppingList(pendingList);
            } else {
                const response = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists?name=Shopping List`);
                const newList = await response.json();
                setCurrentShoppingList(newList);
            }
            setAllLists(lists);
        }
        if (userIsViewingItem === false) {
            fetchAllListsAndCheckIfPendingListExistsElseCreateOne()
        }
        
        if(document.location.toString().includes('redirectToHistory')) {
            setCurrentUI("ListHistory")
        }
    }, [userIsAddingNewItem, userIsViewingItem, hasEditedItemQty])
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
        setCurrentUI,
        hasEditedItemQty,
        setHasEditedItemQty  
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