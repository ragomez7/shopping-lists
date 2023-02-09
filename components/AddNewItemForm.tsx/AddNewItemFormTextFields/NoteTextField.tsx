import React, { FC } from 'react';
import TextField from "@mui/material/TextField";
import AddNewItemFormTextFieldTitle from './AddNewItemFormTextFieldTitle';

interface NoteTextFieldProps {
    note: string
    setNote: (newString: string) => void
}
const NoteTextField: FC<NoteTextFieldProps> = ({ note, setNote }) => {
    return (
        <>
            <AddNewItemFormTextFieldTitle title="Note" marginTop="30px" />
            <TextField
                multiline
                rows={4}
                id="note-field"
                name="note-field"
                type="text"
                placeholder="Enter a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-[100%] h-[61.25px] mt-[7px]"
                InputProps={{
                    className: "rounded-xl"
                }}
            />
        </>
    )
};

export default NoteTextField;