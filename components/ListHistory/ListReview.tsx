import React, { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import Category from '../Categories';
import { ShoppingDashboardContext } from '../../pages/shopping';

interface ListReviewProps {
    listId: string
}

const ListReview: FC<ListReviewProps> = ({ listId }) => {
    const [thisListInfo, setThisListInfo] = useState({
        name: "",
        categories: []
    })
    const {
        setIsViewingListHistoryDetail,
        setListBeingViewedId
    } = useContext(ShoppingDashboardContext);
    useEffect(() => {
        const fetchThisList = async () => {
            try {
                const res = await fetch(`https://shopping-lists-api.herokuapp.com/api/lists/${listId}`)
                const fetchedList = await res.json();
                setThisListInfo(fetchedList)
            } catch (err) {
                console.log(err)
            }       
        }
        fetchThisList();
    }, [])
    const { name, categories } = thisListInfo;

    const handleBackButtonOnClick = () => {
        setIsViewingListHistoryDetail(false)
        setListBeingViewedId("")
    }
    return (
        <Box className="ListReview"
            sx={{
                backgroundColor: '#faf9fe',
                paddingLeft: "80.5px",
                paddingRight: "90px",
                paddingY: '28px'
            }}
        >
            <Button
                onClick={handleBackButtonOnClick}
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
    )
};


export default ListReview