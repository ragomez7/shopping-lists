import React, { FC, useContext } from "react";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import Category from "../Categories";
import { ShoppingDashboardContext } from "../../pages/shopping";

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
        <Box className="bg-backgroundgrey pl-[80.5px] pr-[90px] py-[28px]">
            <button className="mt-[12px] font-sans font-bold leading-[17.5px] text-orange normal-case"
                onClick={handleBackButtonOnClick}
            >
                back
            </button>
            <p className="font-sans font-bold text-[26px] mt-[35px] text-black">
                {name}
            </p>
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