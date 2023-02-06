import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon'
import ReplayIcon from '@mui/icons-material/Replay';
import Tooltip from '@mui/material/Tooltip';

const HistoryMenuItem = () => {
    return (
        <Box
            sx={{
                height: '90px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Tooltip title="History" placement="right" >
                <IconButton
                    sx={{
                        padding: 0,
                        height: '18.5px',
                        width: '15px',
                    }}
                >
                    <SvgIcon
                        sx={{

                            padding: 0
                        }}
                    >
                        <ReplayIcon />
                    </SvgIcon>
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default HistoryMenuItem;