import { useContext, useState } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SvgIcon } from '@mui/material';
import Link from 'next/link';
import { createBrowserRouter,
        RouterProvider } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import ShoppingList from '../ShoppingList';
import ItemInfo from '../ItemInfo';
import AddNewItemForm from '../AddNewItemForm.tsx';
import Category from '../Categories'
import { ShoppingDashboardContext } from '../../pages/shopping';


const ListHistory = ({ lists }) => {
    const { searchTerm,
        setSearchTerm,
        categories,
        userIsAddingNewItem,
        userIsViewingItem,
        itemThatIsBeingViewed,
        currentShoppingList
    } = useContext(ShoppingDashboardContext);
    const [isViewingListHistory, setIsViewingListHistory] = useState<boolean>(false)
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
                    let parsedDate = new Date(list.createdAt);
                    parsedDate = `${dayOfWeekToString[parsedDate.getDay()]}  ${parsedDate.getDate() + 1}.${parsedDate.getMonth() + 1}.${parsedDate.getFullYear()}`
                    return (
                        <>
                            <Typography
                                sx={{
                                    marginTop: '41px',
                                    fontFamily: 'Quicksand',
                                    fontWeight: 700,
                                    fontSize: '12px',
                                    lineHeight: '15px'
                                }}
                            >
                                Month
                            </Typography>
                            <Link href={{
                                pathname: `/shopping/${list._id}`,
                                query: `currentShoppingList=${currentShoppingList._id}`
                            }} >
                                <button>
                                    <Box
                                        sx={{
                                            width: '812px',
                                            height: '63.5px',
                                            borderRadius: '12px',
                                            backgroundColor: '#FFF',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            paddingX: '21px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Quicksand',
                                                fontWeight: 700,
                                                fontSize: '16px',
                                                lineHeight: '20px',
                                                color: '#000'
                                            }}
                                        >
                                            {list.name}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <SvgIcon
                                                sx={{
                                                    color: '#C1C1C4'
                                                }}
                                            >
                                                <CalendarMonthIcon />
                                            </SvgIcon>
                                            <Typography
                                                sx={{
                                                    width: '81px',
                                                    height: '15px',
                                                    fontFamily: 'Quicksand',
                                                    fontWeight: 600,
                                                    fontSize: '12px',
                                                    lineHeight: '15px',
                                                    color: '#C1C1C4',
                                                    marginLeft: '13px'
                                                }}
                                            >
                                                {parsedDate}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    width: '76px',
                                                    height: '24px',
                                                    border: `1px solid ${list.status === 'pending' ?
                                                        '#F9A109' : list.status === 'completed' ?
                                                            '#56CCF2' : list.status === 'cancelled' ?
                                                                '#EB5757' : undefined}`,
                                                    borderRadius: '8px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontFamily: 'Quicksand',
                                                    fontWeight: 600,
                                                    fontSize: '12px',
                                                    lineHeight: '15px',
                                                    color: list.status === 'pending' ?
                                                        '#F9A109' : list.status === 'completed' ?
                                                            '#56CCF2' : list.status === 'cancelled' ?
                                                                '#EB5757' : undefined,
                                                    marginLeft: '26px'
                                                }}
                                            >
                                                {list.status}
                                            </Typography>
                                            <SvgIcon
                                                sx={{
                                                    color: '#F9A109',
                                                    marginLeft: '32px'
                                                }}
                                            >
                                                <ArrowForwardIosIcon />
                                            </SvgIcon>
                                        </Box>
                                    </Box>
                                </button>
                            </Link>
                        </>
                    )
                }): undefined}
            </Box>
            <ShoppingList currentShoppingList={currentShoppingList} />
        </>
    )
}

export default ListHistory;