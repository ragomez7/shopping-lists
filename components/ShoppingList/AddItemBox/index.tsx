import React from 'react';
import { Box, Icon, Typography } from "@mui/material"
import AddItemButton from "./AddItemButton";

const AddItemBox = () => {
    return (
        <Box
            sx={{
                minWidth: '300px',
                height: '130px',
                borderRadius: '24px',
                backgroundColor: "#80485B",
                position: 'relative'
            }}
        >
            <Icon
                sx={{
                    width: '100px',
                    height: '155px',
                    textAlign: 'center',
                    position: 'absolute',
                    left: 15,
                    bottom: 0
                }}
            >
                <img src='https://res.cloudinary.com/dg8htxonw/image/upload/v1675553451/source_lvil20.svg' />
            </Icon>
            <Typography
                sx={{
                    widht: '159px',
                    height: '40px',
                    color: '#FFF',
                    paddingTop: '18px',
                    marginLeft: '122px',
                    fontFamily: 'Quicksand',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px'
                }}
            >
                Didn't find what you need?
            </Typography>
            <AddItemButton />
        </Box>
    )
};

export default AddItemBox;