import React, { useContext, FC, createContext } from 'react';
import Box from '@mui/material/Box'
import ShoppingList, { ShoppingListProps } from '../ShoppingList';
import { ShoppingDashboardContext } from '../../pages/shopping';
import AllPastLists from './AllPastLists';
import ListHistoryPageTitle from './ListHistoryPageTitle';
import ListReview from './ListReview';

interface ListHistoryProps {
    lists: Array<ShoppingListProps>
}

export const ListHistoryContext = createContext(null);
const ListHistory: FC<ListHistoryProps> = ({ lists }) => {
    const { currentShoppingList,
        isViewingListHistoryDetail,
        setIsViewingListHistoryDetail,
        listBeingViewedId,
        setListBeingViewedId
    
    } = useContext(ShoppingDashboardContext);

    const listHistoryContextObject: any = {
        isViewingListHistoryDetail,
        setIsViewingListHistoryDetail,
        setListBeingViewedId
    }
    return (
        <Box className="grid grid-cols-[auto_389px]">
            <ListHistoryContext.Provider value={listHistoryContextObject}>
                {isViewingListHistoryDetail ? 
                <ListReview listId={listBeingViewedId || ""} /> :
                <Box className="bg-backgroundgrey pl-[80.5px] pr-[90px] py-[28px]">
                    <ListHistoryPageTitle />
                    <AllPastLists
                        lists={lists}
                        currentShoppingList={currentShoppingList}
                    />
                </Box>}
            </ListHistoryContext.Provider>
            <ShoppingList currentShoppingList={currentShoppingList} />
        </Box>
    )
}

export default ListHistory;