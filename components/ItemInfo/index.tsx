import React, { createContext, FC } from 'react';
import { Box } from "@mui/material"
import BackButton from "./BackButton";
import ItemInfoButtonSet from "./ItemInfoButtonSet";
import ItemNote from './ItemNote';
import ItemCategory from './ItemCategory';
import ItemName from './ItemName';
import ItemImage from './ItemImage';

export interface ItemProps {
    _id?: string
    name?: string
    categoryName?: string
    categoryId?: string
    note?: string
    imageUrl?: string
}
export interface ItemInfoProps {
    itemThatIsBeingViewed: ItemProps
}
export const ItemInfoContext = createContext<ItemProps>({})
const ItemInfo: FC<ItemInfoProps> = ({ itemThatIsBeingViewed }) => {
    const itemInfoContext = {
        ...itemThatIsBeingViewed
    }
    return (
        <ItemInfoContext.Provider value={itemInfoContext}>
            <Box className="ItemInfo"
                sx={{
                    width: '389px',
                    backgroundColor: '#FFF',
                    paddingLeft: '49px',
                    paddingTop: '28px',
                    paddingRight: '40px'
                }}
            >
                <BackButton />
                <ItemImage imageUrl={itemThatIsBeingViewed.imageUrl} />
                <ItemName name={itemThatIsBeingViewed.name} />
                <ItemCategory categoryName={itemThatIsBeingViewed.categoryName} />
                <ItemNote note={itemThatIsBeingViewed.note} />
                <ItemInfoButtonSet />
            </Box>
        </ItemInfoContext.Provider>
    )
};

export default ItemInfo;