import { Box, Typography } from "@mui/material"
import { v4 as uuid } from 'uuid'
import AddItemBox from "./AddItemBox";
import InListCategory from "./InListCategory";

const ShoppingList = ({currentShoppingList}) => {
    return (
        <Box className="ShoppingList"
                sx={{
                    width: '389px',
                    backgroundColor: '#fff0dd',
                    paddingLeft: '49px',
                    paddingTop: '43px',
                    paddingRight: '40px'
                }}
            >
                <AddItemBox />
                <Typography
                    sx={{
                        width: '159px',
                        height: '30px',
                        fontFamily: 'Quicksand',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '30px',
                        marginTop: '44px'
                    }}
                >
                    {currentShoppingList?.name}
                </Typography>
                {currentShoppingList?.categories?.map((category) => (
                    <InListCategory 
                        key={uuid()}
                        category={category} 
                    />
                ))}
            </Box>
    )
};

export default ShoppingList;