import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';
import { ShoppingListProps } from '../ShoppingList';
import DateTitle from './DateTitle';
import ListHistoryButtonBox from './ListHistoryButtonBox';

interface AllPastListsProps {
    lists: Array<ShoppingListProps>
    currentShoppingList?: ShoppingListProps
}
const AllPastLists: FC<AllPastListsProps> = ({ lists, currentShoppingList }) => {
    return (
        <>
        {lists.length ? lists.map((list) => {
            const dayOfWeekToString = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            let parsedDate: Date | string = new Date(list.createdAt);
            parsedDate = `${dayOfWeekToString[parsedDate.getDay()]}  ${parsedDate.getDate() + 1}.${parsedDate.getMonth() + 1}.${parsedDate.getFullYear()}`
            return (
                <Box 
                    sx={{
                        display: 'grid'
                    }}
                key={uuid()} >
                    <DateTitle />
                    <ListHistoryButtonBox 
                        list={list}
                        parsedDate={parsedDate}
                        currentShoppingListId={currentShoppingList?._id}
                    />
                </Box>
            )
        }): undefined}
        </>
    )
}

export default AllPastLists;