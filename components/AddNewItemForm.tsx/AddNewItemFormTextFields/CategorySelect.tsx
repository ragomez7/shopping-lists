import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { v4 as uuid } from "uuid";
import { CategoryItemProps } from "../../Categories";
import AddNewItemFormTextFieldTitle from "./AddNewItemFormTextFieldTitle";

interface CategorySelectProps {
    categories?: Array<CategoryItemProps>
    setSelectedCategory: (val: any) => void
}
const CategorySelect: React.FC<CategorySelectProps> = ({ categories, setSelectedCategory }) => {
    const categoryNames: string[] = categories?.map((category) => category?.name || "") || [""];
    const handleInputChange = (e) => {
        setSelectedCategory(e.target.innerText || e.target.value)
    }
    return (
        <>
            <AddNewItemFormTextFieldTitle title="Category" marginTop="34px" />
            <Autocomplete
                className="w-[100%] mt-[7px]"
                id="country-select"
                size="small"
                freeSolo
                options={categoryNames}
                autoHighlight
                getOptionLabel={(option) => (option)}
                onInputChange={handleInputChange}
                renderOption={(props, option) => {
                    return (
                        <>
                            <Box
                                key={uuid()}
                                component="li"
                                sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                                {option}
                            </Box>
                        </>
                    )
                }

                }
                renderInput={(params) => (
                    <TextField
                        className="h-[61.25px] rounded-xl text-[10px] "
                        {...params}
                        placeholder="Choose a category or enter a new one"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                            className: "w-[200px] h-[31.25px] rounded-xl ",
                        }}
                    />
                )}
            />
        </>
    );
}
export default CategorySelect;