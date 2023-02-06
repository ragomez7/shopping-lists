import Typography from '@mui/material/Typography';

const ItemName = ({ name }) => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#C1C1C4',
                    marginTop: '54px'
                }}
            >
                name
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    marginTop: '11px'
                }}
            >
                {name}
            </Typography>
        </>
    )
};

export default ItemName;