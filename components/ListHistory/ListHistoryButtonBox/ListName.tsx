import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ListNameProps {
    listName?: string
}
const ListName: FC<ListNameProps> = ({ listName }) => {
    return (
        <Typography
            sx={{
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#000'
            }}
        >
            {listName}
        </Typography>
    )
};

export default ListName;