import React, { FC } from "react";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import EditIcon from "@mui/icons-material/Edit";

interface EditShoppingListButtonProps {
    isInEditingMode: boolean
    setIsInEditingMode: (newBool: boolean) => void
}
const EditShoppingListButton: FC<EditShoppingListButtonProps> = ({isInEditingMode, setIsInEditingMode}) => {
    return (
        <IconButton className="p-0 h-[24px]"
            onClick={() => setIsInEditingMode(!isInEditingMode)}
        >
            <SvgIcon className={`${isInEditingMode ? "text-orange" : "text-grey"}`}
                sx={{
                    ":hover path": {
                        fill: "#F9A109",
                    }
                }}
            >
                <EditIcon />
            </SvgIcon>
        </IconButton>
    )
};
export default EditShoppingListButton;