import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface ListCreationDateProps {
    parsedDate: string
}
const ListCreationDate: FC<ListCreationDateProps> = ({ parsedDate }) => {
    return (
        <>
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
        </>
    )
};

export default ListCreationDate;