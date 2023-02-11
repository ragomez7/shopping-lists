import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import AddNewItemFormTextFieldTitle from "./AddNewItemFormTextFieldTitle";

interface NameTextFieldProps {
    name: string
    setName: (newName: string) => void
}
const NameTextField: FC<NameTextFieldProps> = ({name, setName}) => {
    return (
        <>
            <AddNewItemFormTextFieldTitle title="Name" marginTop="34px" />
            <TextField
                required
                id="item-field"
                name="item-field"
                type="text"
                placeholder="Enter item's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[100%] h-[61.25px] mt-[7px]"
                InputProps={{
                    className: "rounded-xl"
                }}
            />
        </>
    )
};

export default NameTextField;