import Box from '@mui/material/Box';
import Link from 'next/link';
import ListName from './ListName';
import ListInfo from './ListInfo';

const ListHistoryButtonBox = ({ list, parsedDate, currentShoppingListId }) => {
    return (
        <Link href={{
            pathname: `/shopping/${list._id}`,
            query: `currentShoppingList=${currentShoppingListId}`
        }}>
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
                    <ListName listName={list.name} />
                    <ListInfo listStatus={list.status} parsedDate={parsedDate} />
                </Box>
            </button>
        </Link>
    )
};

export default ListHistoryButtonBox;