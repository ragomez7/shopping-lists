import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ListNameProps {
    listName?: string
}
const ListName: FC<ListNameProps> = ({ listName }) => {
    return (
        <Typography className="font-sans font-bold text-base leading-[20px] text-black">
            {listName}
        </Typography>
    )
};

export default ListName;