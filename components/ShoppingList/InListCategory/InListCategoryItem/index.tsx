import { Typography, Box, Button } from "@mui/material";

const InListCategoryItem = ({name, count}) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '25px',
                height: '32px'
            }}
        >
        <Typography
            sx={{
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22.5px',
                height: '100%',
                display:'flex',
                alignItems: 'center'
            }}
        >
            {name}
        </Typography>
        <Button
            style={{
                fontFamily: 'Quicksand',
                width: '68px',
                height: '32px',
                border: '2px solid #F9A109',
                borderRadius: '24px',
                color: '#F9A109',
                textTransform: 'none'
            }}
        >
            {count} pcs
        </Button>
        </Box>
    )
};

export default InListCategoryItem;