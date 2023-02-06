import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import EditIcon from "@mui/icons-material/Edit";

const EditShoppingListButton = ({isInEditingMode, setIsInEditingMode}) => {
    return (
        <IconButton
            onClick={() => setIsInEditingMode(!isInEditingMode)}
            sx={{
                padding: 0,
                height: '24px'
            }}
        >
            <SvgIcon
                sx={{
                    color: isInEditingMode ? "#F9A109" : 'grey',
                    '&:hover path': {
                        fill: "#F9A109",
                    },
                    padding: 0
                }}
            >
                <EditIcon />
            </SvgIcon>
        </IconButton>
    )
};
export default EditShoppingListButton;