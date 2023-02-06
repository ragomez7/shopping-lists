import Typography from '@mui/material/Typography';

const ItemNote = ({note}) => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#C1C1C4',
                    marginTop: '36px'
                }}
            >
                note
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Quicksand',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '22.5px',
                    marginTop: '11px',
                    height: '207px',
                    width: '296px',
                    wordWrap: 'break-word'
                }}
            >
                {note}
            </Typography>
        </>
    )
}

export default ItemNote;