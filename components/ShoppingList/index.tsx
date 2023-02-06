import { Box, Typography } from "@mui/material"
import { useState } from "react";
import { v4 as uuid } from 'uuid'
import AddItemBox from "./AddItemBox";
import EditShoppingListButton from "./EditShoppingListButton";
import InListCategory from "./InListCategory";

const ShoppingList = ({ currentShoppingList }) => {
    const [ isInEditingMode, setIsInEditingMode ] = useState<boolean>(false);
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '44px',
                }}
            >
                <Typography
                    sx={{
                        width: '159px',
                        height: '30px',
                        fontFamily: 'Quicksand',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '30px'
                    }}
                >
                    {currentShoppingList?.name}
                </Typography>
                <EditShoppingListButton isInEditingMode={isInEditingMode} setIsInEditingMode={setIsInEditingMode} />
            </Box>
            {currentShoppingList?.categories?.map((category) => (
                <InListCategory
                    key={uuid()}
                    category={category}
                    isInEditingMode={isInEditingMode}
                />
            ))}
        </Box>
    )
};

export default ShoppingList;