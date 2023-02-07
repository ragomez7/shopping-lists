import React, { useState } from 'react';
import { Typography, Box } from "@mui/material";
import ManageItemQtyInListButton from "./ManageItemQtyInListButton";

const InListCategoryItem = ({ name, count, isInEditingMode }) => {
    const [innerCountTally, setInnerCountTally] = useState(count);
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