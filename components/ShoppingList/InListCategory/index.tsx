import { Typography } from "@mui/material";
import { v4 as uuid } from 'uuid'
import InListCategoryItem from "./InListCategoryItem";

const InListCategory = ({ category }) => {
    const categoryItemCount = {};
    const seenItems = new Set();
    for (const item of category.items) {
        if (seenItems.has(item.name)) {
            categoryItemCount[item.name] += 1;
        } else {
            categoryItemCount[item.name] = 1;
            seenItems.add(item.name)
        }
    };
    const itemCountsArray: object [] = [];
    for ( const [itemName, itemCount] of Object.entries(categoryItemCount)) {
        const itemCountObject = {
            name: itemName,
            count: itemCount
        };
        itemCountsArray.push(itemCountObject);
    }
    return (
        <>
            <Typography
                sx={{
                    marginTop: '40px',
                    fontFamily: 'Quicksand',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17.5px',
                    color: '#828282'
                }}
            >
                {category.name}
            </Typography>
            {itemCountsArray?.map((item) => (
                <InListCategoryItem
                    key={uuid()}
                    name={item.name}
                    count={item.count}
                />
            ))}
        </>
    )
};

export default InListCategory;