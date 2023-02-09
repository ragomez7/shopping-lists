import React, { FC } from 'react';
import Typography from '@mui/material/Typography'

interface AddNewItemFormTextFieldTitleProps {
    title: string
    marginTop: string
}
const AddNewItemFormTextFieldTitle: FC<AddNewItemFormTextFieldTitleProps> = ({ title, marginTop }) => {
    return (
        <Typography className={`font-['Quicksand'] font-medium text-sm leading-[17.5px] text-[#34333A] ml-0.5`}
            sx={{
                marginTop,
            }}
        >
            {title}
        </Typography>

    )
}

export default AddNewItemFormTextFieldTitle;