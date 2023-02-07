import Typography from '@mui/material/Typography';

const ListStatus = ({ listStatus }) => {
    return (
        <Typography
            sx={{
                width: '76px',
                height: '24px',
                border: `1px solid ${listStatus === 'pending' ?
                    '#F9A109' : listStatus === 'completed' ?
                        '#56CCF2' : listStatus === 'cancelled' ?
                            '#EB5757' : undefined}`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Quicksand',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '15px',
                color: listStatus === 'pending' ?
                    '#F9A109' : listStatus === 'completed' ?
                        '#56CCF2' : listStatus === 'cancelled' ?
                            '#EB5757' : undefined,
                marginLeft: '26px'
            }}
        >
            {listStatus}
        </Typography>
    )
};

export default ListStatus;