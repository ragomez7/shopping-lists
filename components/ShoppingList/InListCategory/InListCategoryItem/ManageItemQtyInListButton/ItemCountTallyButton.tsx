import { FC } from 'react';
import Button from '@mui/material/Button';

interface ItemCountTallyButtonProps {
    innerCountTally: number
    isActive?: boolean
    setIsEditingItemQty: (state: boolean) => void 
}

const ItemCountTallyButton: FC<ItemCountTallyButtonProps> = ({ innerCountTally, isActive, setIsEditingItemQty }) => {
    return (
        <Button
            onClick={ isActive ? () => setIsEditingItemQty(true) : undefined}
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
            {innerCountTally} pcs
        </Button>
    )
};

export default ItemCountTallyButton;