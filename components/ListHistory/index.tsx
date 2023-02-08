import React, { useContext } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { v4 as uuid } from 'uuid';
import ShoppingList from '../ShoppingList';
import { ShoppingDashboardContext } from '../../pages/shopping';
import DateTitle from './DateTitle';
import ListHistoryButtonBox from './ListHistoryButtonBox';

const ListHistory = ({ lists }) => {
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
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 700,
                        fontSize: '26px',
                        lineHeight: '32.5px',
                        color: '#34333A',
                        marginTop: '10px'
                    }}
                >
                    Shopping History
                </Typography>
                {lists.length ? lists.map((list) => {
                    const dayOfWeekToString = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                    let parsedDate: Date | string = new Date(list.createdAt);
                    parsedDate = `${dayOfWeekToString[parsedDate.getDay()]}  ${parsedDate.getDate() + 1}.${parsedDate.getMonth() + 1}.${parsedDate.getFullYear()}`
                    return (
                        <Box key={uuid()} >
                            <DateTitle />
                            <ListHistoryButtonBox 
                                list={list}
                                parsedDate={parsedDate}
                                currentShoppingListId={currentShoppingList._id}
                            />
                        </Box>
                    )
                }): undefined}
            </Box>
            <ShoppingList currentShoppingList={currentShoppingList} />
        </>
    )
}

export default ListHistory;