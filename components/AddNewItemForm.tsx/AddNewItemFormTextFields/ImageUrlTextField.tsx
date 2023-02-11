import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import AddNewItemFormTextFieldTitle from "./AddNewItemFormTextFieldTitle";

interface ImageUrlTextFieldProps {
    url: string
    setUrl: (newUrl: string) => void
}
const ImageUrlTextField: FC<ImageUrlTextFieldProps> = ({ url, setUrl }) => {
    return (
        <>
            <AddNewItemFormTextFieldTitle
                title="Image (optional)"
                marginTop="90px"
            />
            <TextField
                className="w-[100%] h-[61.25px] mt-[7px]"
                id="image-url-field"
                name="image-url-field"
                type="text"
                placeholder="Enter an image url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                InputProps={{
                    className: "rounded-xl"
                }}
            />
        </>
    )
};

export default ImageUrlTextField;