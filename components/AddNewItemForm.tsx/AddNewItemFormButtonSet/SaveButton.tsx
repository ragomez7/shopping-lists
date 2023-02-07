import React from 'react';
import { Button } from "@mui/material"

const SaveButton = ({handleAddNewItemOnClick}) => {
    return (
        <Button
            onClick={handleAddNewItemOnClick}
            style={{
                width: "87px",
                height: '61px',
                backgroundColor: '#F9A109',
                color: 'white',
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                textTransform: 'none',
                borderRadius: '12px'
            }}
        >
            Save
        </Button>
    )
};

export default SaveButton;