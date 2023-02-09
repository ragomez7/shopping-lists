import React from 'react';
import { Box } from "@mui/material"
import { useState, FC, useContext } from "react";
import { ShoppingDashboardContext } from "../../pages/shopping";
import AddNewItemFormButtonSet from "./AddNewItemFormButtonSet";
import AddNewItemFormTitle from "./AddNewItemFormTitle";
import CategorySelect from "./AddNewItemFormTextFields/CategorySelect";
import ImageUrlTextField from "./AddNewItemFormTextFields/ImageUrlTextField";
import NameTextField from "./AddNewItemFormTextFields/NameTextField";
import NoteTextField from "./AddNewItemFormTextFields/NoteTextField";
import { CategoryItemProps } from '../Categories';

interface AddNewItemFormProps {
    categories?: Array<CategoryItemProps>
}

const AddNewItemForm: FC<AddNewItemFormProps> = ({ categories }) => {
    const [name, setName] = useState<string>("");
    const [note, setNote] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<any>("");
    const { setUserIsAddingNewItem } = useContext(ShoppingDashboardContext);
    const handleAddNewItemOnClick = () => {
        async function addItemToExistingCategory() {
            const categoryToAddItemTo = categories?.find((category) => category?.name?.toLowerCase() === selectedCategory.toLowerCase());
            const categoryId = categoryToAddItemTo?._id;
            await fetch(`https://shopping-lists-api.herokuapp.com/api/categories/${categoryId}/items?name=${name}&note=${note}&imageUrl=${url}`, {
                method: 'POST'
            })
            setUserIsAddingNewItem(false)
        }
        async function addItemToNewCategory() {
            const addNewCategoryResponse = await fetch(`https://shopping-lists-api.herokuapp.com/api/categories?name=${selectedCategory}`, {
                method: 'POST'
            })
            const json = await addNewCategoryResponse.json();
            const categoryId = json._id;
            await fetch(`https://shopping-lists-api.herokuapp.com/api/categories/${categoryId}/items?name=${name}&note?=${note}&imageUrl=${url}`, {
                method: 'POST'
            })
            setUserIsAddingNewItem(false);
        }
        const existingCategories = categories?.map((category) => category?.name?.toLowerCase());
        if (existingCategories?.includes(selectedCategory.toLowerCase())) {
            addItemToExistingCategory()
        } else {
            addItemToNewCategory()
        }
    }
    return (
        <Box className="w-[389px] bg-[#FAF9FE] pl-[29px] pr-[50px] pt-[35px]"
            id="add-new-item-form"
        >
            <AddNewItemFormTitle />
            <NameTextField name={name} setName={setName} />
            <NoteTextField note={note} setNote={setNote} />
            <ImageUrlTextField url={url} setUrl={setUrl} />
            <CategorySelect categories={categories} setSelectedCategory={setSelectedCategory} />
            <AddNewItemFormButtonSet handleAddNewItemOnClick={handleAddNewItemOnClick} />
        </Box>
    )
};

export default AddNewItemForm;