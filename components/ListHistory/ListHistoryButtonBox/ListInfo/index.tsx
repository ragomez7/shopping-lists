import React, { FC } from 'react';
import Box from '@mui/material/Box';
import ArrowForwardIcon from './ArrowForwardIcon';
import ListStatus from './ListStatus';
import ListCreationDate from './ListCreationDate';

interface ListInfoProps {
    listStatus?: string
    parsedDate: string
}
const ListInfo: FC<ListInfoProps> = ( {listStatus, parsedDate} ) => {
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