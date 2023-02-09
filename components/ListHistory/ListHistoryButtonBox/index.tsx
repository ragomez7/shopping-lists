import React, { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import ListName from './ListName';
import ListInfo from './ListInfo';
import { ShoppingListProps } from '../../ShoppingList';
import { ShoppingDashboardContext } from '../../../pages/shopping';
interface ListHistoryButtonBoxProps {
    list: ShoppingListProps
    parsedDate: string
    currentShoppingListId?: string
}
const ListHistoryButtonBox: FC<ListHistoryButtonBoxProps> = ({ list, parsedDate }) => {
    const { setIsViewingListHistoryDetail, setListBeingViewedId } = useContext(ShoppingDashboardContext);
    const handleButtonClick = () => {
        setIsViewingListHistoryDetail(true)
        setListBeingViewedId(list._id || "")
    }
    return (
            <button
                onClick={handleButtonClick}
            >
                <Box className="h-[63.5px] rounded-xl bg-white flex items-center justify-between px-[21px]">
                    <ListName listName={list.name} />
                    <ListInfo listStatus={list.status} parsedDate={parsedDate} />
                </Box>
            </button>
    )
};

export default ListHistoryButtonBox;