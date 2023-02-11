import React, { FC } from "react";

interface AddNewItemFormTextFieldTitleProps {
    title: string
    marginTop: string
}
const AddNewItemFormTextFieldTitle: FC<AddNewItemFormTextFieldTitleProps> = ({ title, marginTop }) => {
    return (
        <p className={"font-['Quicksand'] font-medium text-sm leading-[17.5px] text-[#34333A] ml-0.5"}
            style={{
                marginTop,
            }}
        >
            {title}
        </p>

    )
}

export default AddNewItemFormTextFieldTitle;