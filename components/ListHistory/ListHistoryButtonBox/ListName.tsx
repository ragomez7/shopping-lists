import Typography from '@mui/material/Typography';

const ListName = ({ listName }) => {
    return (
        <Typography
            sx={{
                fontFamily: 'Quicksand',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#000'
            }}
        >
            {listName}
        </Typography>
    )
};

export default ListName;