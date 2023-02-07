import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';

interface CategorySelectProps {
    categories: Array<object>
    setSelectedCategory: (val: any) => void
}
const CategorySelect: React.FC<CategorySelectProps> = ({ categories, setSelectedCategory }) => {
    const categoriesOptionsArray = categories.map((category) => {
        return { name: category.name, _id: category._id }
    })
    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Quicksand",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17.5px',
                    color: '#34333A',
                    marginTop: '34px',
                    marginLeft: '2px'
                }}
            >
                Category
            </Typography>
            <Autocomplete
                id="country-select"
                size="small"
                freeSolo
                sx={{
                    width: "310px",
                    marginTop: '7px'
                }}
                options={categoriesOptionsArray}
                autoHighlight
                getOptionLabel={(option) => option?.name}
                onInputChange={(e) => {
                    setSelectedCategory(e.target.innerText || e.target.value)
                }}
                renderOption={(props, option) => {
                    return (
                        <>
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option?.name}
                            </Box>
                        </>
                    )
                }

                }
                renderInput={(params) => (
                    <TextField
                        sx={{
                            height: '61.25px',
                            borderRadius: '12px',
                            fontSize: '10px'
                        }}
                        {...params}
                        placeholder="Choose a category or enter a new one"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill,
                            sx: {
                                width: '200px',
                                height: '31.25px',
                                borderRadius: '12px',

                            }
                        }}
                    />
                )}
            />
        </>
    );
}
export default CategorySelect;