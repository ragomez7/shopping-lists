import { useState, useEffect, createContext } from 'react'
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material"
import { v4 as uuid } from 'uuid';
import Category from '../components/Categories';
import ShoppingList from '../components/ShoppingList';


export const ShoppingDashboardContext = createContext(null);
const ShoppingDashboardPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [ categories, setCategories ] = useState<Array<object>>([{}]);
    const [userIsAddingNewItem, setUserIsAddingNewItem ] = useState<boolean>(false);
    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('http://localhost:3000/api/categories', {
                headers: {
                    'Accept': "application/json"
                }
            });
            const categories = await response.json();
            console.log(categories)
            setCategories(categories);
        }
        fetchCategories()

    }, [])
    return (
        <Box sx={{
            height: '100%',
            display: 'flex'
        }} >
            <Box
                className="SideBar"
                sx={{
                    height: '907px',
                    width: '94px',
                    backgroundColor: 'black'
                }}
            >
            </Box>
            <Box className="ItemsList"
                sx={{
                    width: '957px',
                    backgroundColor: '#faf9fe',
                    paddingLeft: "80.5px",
                    paddingRight: "90px",
                    paddingY: '28px'
                }}
            >
                <Box sx={{
                    display: 'flex'
                }}>

                    <Typography
                        sx={{
                            fontSize: '26px',
                            lineHeight: '32.59px',
                            fontWeight: '700',
                            color: '#34333A',
                            width: '450.3px',
                            fontFamily: 'Quicksand',
                            marginTop: '10px'

                        }}
                    >
                        <span style={{
                            color: '#F9A109'
                        }} >Shoppingify{' '}</span>
                        allows you take your shopping list where you go
                    </Typography>
                    <TextField
                        id="search-item-field"
                        name="search-item-field"
                        placeholder="search item"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{
                            width: '276px',
                            height: '51px',
                            borderRadius: '12px',
                            backgroundColor: 'white',
                            marginLeft: '45px',
                            border: null
                        }}
                    />
                </Box>
                {categories.length ? categories.map((category) => (
                    <Category 
                        key={uuid()}
                        category={category} 
                    />
                )) : undefined}
                
            </Box>
            <ShoppingList />
        </Box>
    )
};

export default ShoppingDashboardPage