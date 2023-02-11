import React, { FC } from "react";

interface ListNameProps {
    listName?: string
}
const ListName: FC<ListNameProps> = ({ listName }) => {
    return (
        <p className="font-sans font-bold text-base leading-[20px] text-black">
            {listName}
        </p>
    )
};

export default ListName;