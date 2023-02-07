import React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const NoteTextField = ({note, setNote}) => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Quicksand",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17.5px',
                    color: '#34333A',
                    marginTop: '20px',
                    marginLeft: '2px'
                }}
            >
                Note
            </Typography>
            <TextField
                multiline
                rows={4}
                id="note-field"
                name="note-field"
                type="text"
                placeholder="Enter a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
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

export default NoteTextField;