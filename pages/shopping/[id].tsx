import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
import { v4 as uuid } from 'uuid';
import Layout from '../../components/Layout';
import { ShoppingDashboardContext } from '.';
import ShoppingList from '../../components/ShoppingList';

const ListReview = ({ list, currentList }) => {
    const { name, categories } = JSON.parse(list);
    currentList = JSON.parse(currentList);
    return (

        <Layout>
            <Box className="ListReview"
                sx={{
                    width: '957px',
                    backgroundColor: '#faf9fe',
                    paddingLeft: "80.5px",
                    paddingRight: "90px",
                    paddingY: '28px'
                }}
            >
                <Button
                    style={{
                        marginTop: '12px',
                        fontFamily: 'Quicksand',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17.5px',
                        color: '#F9A109',
                        textTransform: 'none'
                    }}
                >
                    back
                </Button>
                <Typography
                    sx={{
                        marginTop: '35px',
                        fontFamily: 'Quicksand',
                        fontWeight: 700,
                        fontSize: '26px',
                        lineHeight: '32.5px',
                        color: '#34333A'
                    }}
                >
                    {name}
                </Typography>
                {categories.length ? categories.map((category) => {
                    return (
                        <Category
                            key={uuid()}
                            category={category}
                            isListReviewCategory
                        />
                    )
                }) : undefined}
            </Box>
            <ShoppingList currentShoppingList={currentList} />
        </Layout>

    )
};

import { List } from '../../mongodb/models';
import { Button, Typography } from '@mui/material';
import Category from '../../components/Categories';
export async function getServerSideProps(context) {
    const { id } = context.params;
    let { currentShoppingList } = context.query;
    const list = JSON.stringify(await List.findById(id));
    const currentList = JSON.stringify(await List.findById(currentShoppingList));
    console.log(currentList)
    // const fetchCurrentList = await fetch(`http://localhost:3000/api/lists${currentShoppingList}`);
    // const currentList = await fetchCurrentList.json();
    return {
        props: {
            list,
            currentList
        }
    }
}

export default ListReview