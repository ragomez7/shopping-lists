import Box from '@mui/material/Box';
import ArrowForwardIcon from './ArrowForwardIcon';
import ListStatus from './ListStatus';
import ListCreationDate from './ListCreationDate';

const ListInfo = ( {listStatus, parsedDate} ) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            
            <ListCreationDate parsedDate={parsedDate} />
            <ListStatus listStatus={listStatus} />
            <ArrowForwardIcon />
        </Box>
    )
};

export default ListInfo;