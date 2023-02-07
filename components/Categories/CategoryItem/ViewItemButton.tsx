import { useContext } from 'react';
import { ShoppingDashboardContext } from '../../../pages/shopping';
import IconButton from "@mui/material/IconButton"
import ViewIcon from '@mui/icons-material/Add';

const ViewItemButton = ({
    _id,
    name,
    categoryName,
    categoryId,
    note,
    imageUrl
}) => {
    const { setItemThatIsBeingViewed, setUserIsViewingItem } = useContext(ShoppingDashboardContext);
    const handleViewItemOnClick = () => {
        document.location.href = "http://localhost:3000/shopping";
        setItemThatIsBeingViewed(itemInfo);
        setUserIsViewingItem(true);
    }
    const itemInfo = {
        _id,
        name,
        categoryName,
        categoryId,
        note,
        imageUrl
    }
    return (
        <IconButton
            sx={{
                padding: 0
            }}
        >
            <ViewIcon 
                onClick={handleViewItemOnClick}
            />
        </IconButton>
    )
}
export default ViewItemButton;