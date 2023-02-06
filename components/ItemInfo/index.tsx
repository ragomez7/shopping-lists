import { createContext } from 'react';
import { Box, Button, Typography } from "@mui/material"
import { v4 as uuid } from 'uuid'
import BackButton from "./BackButton";
import ItemInfoButtonSet from "./ItemInfoButtonSet";

export interface ItemInfoContextInterface {
    _id: string
    name: string
    categoryId: string
}

export const ItemInfoContext = createContext<ItemInfoContextInterface>({})
const ItemInfo = ({ itemThatIsBeingViewed }) => {
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
                <Box
                    component="img"
                    src={itemThatIsBeingViewed.imageUrl}
                    sx={{
                        width: '300px',
                        height: '220px',
                        borderRadius: '25px',
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#C1C1C4',
                        marginTop: '54px'
                    }}
                >
                    name
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '30px',
                        marginTop: '11px'
                    }}
                >
                    {itemThatIsBeingViewed.name}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#C1C1C4',
                        marginTop: '33px'
                    }}
                >
                    category
                </Typography>
                <Typography
                    noWrap
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '22.5px',
                        marginTop: '11px',
                        width: '100%'
                    }}
                >
                    {itemThatIsBeingViewed.categoryName}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#C1C1C4',
                        marginTop: '36px'
                    }}
                >
                    note
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Quicksand',
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '22.5px',
                        marginTop: '11px',
                        height: '207px',
                        width: '296px',
                        wordWrap: 'break-word'
                    }}
                >
                    {itemThatIsBeingViewed.note}
                </Typography>
                <ItemInfoButtonSet />
            </Box>
        </ItemInfoContext.Provider>
    )
};

export default ItemInfo;