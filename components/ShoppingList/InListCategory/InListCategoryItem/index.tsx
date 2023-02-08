import React, { useState, FC } from 'react';
import { Typography, Box } from "@mui/material";
import ManageItemQtyInListButton from "./ManageItemQtyInListButton";

export interface InListCategoryItemProps {
    name?: string
    count?: number
    isInEditingMode?: boolean
    controllerId?: string
}

const InListCategoryItem: FC<InListCategoryItemProps> = ({ name, count, isInEditingMode, controllerId }) => {
    const [innerCountTally, setInnerCountTally] = useState(count || 0);
    return (
        <Box
            sx={{
                width: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '30px',
                height: '32px'
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '22.5px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100px'
                }}
            >
                {name}
            </Typography>
            {isInEditingMode ?
                <ManageItemQtyInListButton 
                    innerCountTally={innerCountTally} 
                    setInnerCountTally={setInnerCountTally}
                    itemName={name} 
                    controllerId={controllerId}
                /> :
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        width: '68px',
                        height: '32px',
                        border: '2px solid grey',
                        borderRadius: '24px',
                        color: 'grey',
                        textTransform: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        fontWeight: 500
                    }}
                >
                    {innerCountTally} pcs
                </Typography>
            }


        </Box>
    )
};

export default InListCategoryItem;