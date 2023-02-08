import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';
import Layout from '../../components/Layout';
import ShoppingList, { ShoppingListProps } from '../../components/ShoppingList';
import { List } from '../../mongodb/models';
import { Button, Typography } from '@mui/material';
import dbConnect from '../../lib/dbConnect';
import Category from '../../components/Categories';

interface ListReviewProps {
    list: string
    currentList: string
}

const ListReview: FC<ListReviewProps> = ({ list, currentList }) => {
    const { name, categories } = JSON.parse(list);
    const currentShoppingList: ShoppingListProps = JSON.parse(currentList);
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
            <ShoppingList currentShoppingList={currentShoppingList} />
        </Layout>

    )
};


export async function getServerSideProps(context) {
    await dbConnect();
    const { id } = context.params;
    const { currentShoppingList } = context.query;
    const list = JSON.stringify(await List.findById(id));
    const currentList = JSON.stringify(await List.findById(currentShoppingList));
    return {
        props: {
            list,
            currentList
        }
    }
}

export default ListReview