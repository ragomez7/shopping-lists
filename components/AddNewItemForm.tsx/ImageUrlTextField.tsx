import React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const ImageUrlTextField = ({ url, setUrl }) => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Quicksand",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17.5px',
                    color: '#34333A',
                    marginTop: '90px',
                    marginLeft: '2px'
                }}
            >
                Image (optional)
            </Typography>
            <TextField
                id="note-field"
                name="note-field"
                type="text"
                placeholder="Enter a note"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{
                    width: '310px',
                    height: '61.25px',
                    marginTop: '7px'
                }}
                InputProps={{
                    sx: {
                        borderRadius: '12px',
                    }
                }}
            />
        </>
    )
};

export default ImageUrlTextField;