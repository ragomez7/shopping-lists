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
            <SvgIcon className="text-lightgrey">
                <CalendarMonthIcon />
            </SvgIcon>
            <Typography className="w-[81px] h-[15px] font-sans font-semibold text-xs leading-[15px] text-lightgrey ml-[13px]">
                {parsedDate}
            </Typography>
        </>
    )
};

export default ListCreationDate;