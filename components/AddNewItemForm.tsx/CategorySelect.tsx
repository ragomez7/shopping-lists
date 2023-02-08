import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { CategoryItemProps } from '../Categories';

interface CategorySelectProps {
    categories?: Array<CategoryItemProps>
    setSelectedCategory: (val: any) => void
}
const CategorySelect: React.FC<CategorySelectProps> = ({ categories, setSelectedCategory }) => {
    const categoryNames: string[] = categories?.map((category) => category?.name || "") || [""];
    const handleInputChange = (e) => {
        setSelectedCategory(e.target.innerText || e.target.value )
    }
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
                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option}
                            </Box>
                        </>
                    )
                }

                }
                renderInput={(params) => (
                    <TextField
                        // key={uuid()}
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