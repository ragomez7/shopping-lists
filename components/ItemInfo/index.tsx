import React, { createContext, FC } from "react";
import Box from "@mui/material/Box";
import BackButton from "./BackButton";
import ItemInfoButtonSet from "./ItemInfoButtonSet";
import ItemName from './ItemName';
import ItemImage from './ItemImage';
import ItemField from './ItemField';

export interface ItemProps {
    _id?: string
    name: string
    categoryName?: string
    categoryId?: string
    note?: string
    imageUrl?: string
}
export interface ItemInfoProps {
    itemThatIsBeingViewed?: ItemProps
}
export const ItemInfoContext = createContext<ItemProps>({
    name: ""
})
const ItemInfo: FC<ItemInfoProps> = ({ itemThatIsBeingViewed }) => {
    const itemInfoContext: any = {
        ...itemThatIsBeingViewed
    }
    return (
        <ItemInfoContext.Provider value={itemInfoContext}>
            <Box className="w-[389px] bg-white pl-[49px] pt-[28px] pr-[40px]">
                <BackButton />
                <ItemImage imageUrl={itemThatIsBeingViewed?.imageUrl} />
                <ItemName name={itemThatIsBeingViewed?.name || ""} />
                <ItemField 
                    fieldName="category"
                    fieldValue={itemThatIsBeingViewed?.categoryName}
                />
                <ItemField 
                    fieldName="note" 
                    fieldValue={itemThatIsBeingViewed?.note} 
                />
                
                <ItemInfoButtonSet />
            </Box>
        </ItemInfoContext.Provider>
    )
};

export default ItemInfo;