import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface ListStatusProps {
    listStatus?: string
}
const ListStatus: FC<ListStatusProps> = ({ listStatus }) => {
    const color = listStatus === 'pending' ?
                        '#F9A109' : listStatus === 'completed' ?
                        '#56CCF2' : listStatus === 'cancelled' ?
                        '#EB5757' : undefined;
    return (
        <p className={`w-[76px] h-6 border border-solid border-color-[${color}] rounded-lg flex items-center justify-center font-sans font-semibold text-xs leading-[15px] ml-[26px]`}
            style={{
                color: listStatus === 'pending' ?
                    '#F9A109' : listStatus === 'completed' ?
                        '#56CCF2' : listStatus === 'cancelled' ?
                            '#EB5757' : undefined,
            }}
        >
            {listStatus}
        </p>
    )
};

export default ListStatus;