import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { SvgIcon } from '@mui/material';
import Badge from '@mui/material/Badge';
const ListItemCount = () => {
    return (
        <Badge badgeContent={4} color='error'
            sx={{
                width: '42px',
                height: '42px',
                borderRadius: '20px',
                backgroundColor: '#F9A109',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <SvgIcon
                sx={{
                    color: '#FFF'
                }}
            >
                <ShoppingCartCheckoutIcon />
            </SvgIcon>
        </Badge>
    )
};

export default ListItemCount;