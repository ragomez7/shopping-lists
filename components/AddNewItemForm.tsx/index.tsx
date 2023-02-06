import { Box } from "@mui/material"
import { useState, FC, useContext } from "react";
import { ShoppingDashboardContext } from "../../pages/shopping";
import AddNewItemFormButtonSet from "./AddNewItemFormButtonSet";
import AddNewItemFormTitle from "./AddNewItemFormTitle";
import CategorySelect from "./CategorySelect";
import ImageUrlTextField from "./ImageUrlTextField";
import NameTextField from "./NameTextField";
import NoteTextField from "./NoteTextField";

interface AddNewItemFormProps {
    categories: Array<object>
}

const AddNewItemForm: FC<AddNewItemFormProps> = ({ categories }) => {
    const [name, setName] = useState<string>("");
    const [note, setNote] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<any>("");
    const { setUserIsAddingNewItem } = useContext(ShoppingDashboardContext);
    const handleAddNewItemOnClick = () => {
        async function addItemToExistingCategory() {
            const categoryToAddItemTo = categories.find((category) => category.name.toLowerCase() === selectedCategory.toLowerCase());
            const { _id: categoryId } = categoryToAddItemTo;
            // console.log(`http://localhost:3000/api/categories/${categoryId}/items?name=${name}&note=${note}&imageUrl=${url}`)
            await fetch(`http://localhost:3000/api/categories/${categoryId}/items?name=${name}&note=${note}&imageUrl=${url}`, {
                method: 'POST'
            })
            setUserIsAddingNewItem(false)
        }
        async function addItemToNewCategory() {
            console.log(`http://localhost:3000/api/categories?name=${selectedCategory}`)
            const addNewCategoryResponse = await fetch(`http://localhost:3000/api/categories?name=${selectedCategory}`, {
                method: 'POST'
            })
            const json = await addNewCategoryResponse.json();
            const categoryId = json._id;
            console.log(categoryId)
            await fetch(`http://localhost:3000/api/categories/${categoryId}/items?name=${name}&note?=${note}&imageUrl=${url}`, {
                method: 'POST'
            })
            setUserIsAddingNewItem(false);
        }
        const existingCategories = categories.map((category) => category.name.toLowerCase());
        if (existingCategories.includes(selectedCategory.toLowerCase())) {
            addItemToExistingCategory()
        } else {
            addItemToNewCategory()
        }
    }
    return (
        <Box className="ShoppingList"
            sx={{
                width: '389px',
                backgroundColor: '#faf9fe',
                paddingLeft: '49px',
                paddingTop: '35px'
            }}
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