import Box from '@mui/material/Box'
import HistoryMenuItem from './HistoryMenuItem';
import ListMenuItem from './ListMenuItem';
import StatisticsMenuItem from './StatisticsMenuItem';
const SidebarMenu = () => {
    return (
        <Box
            sx={{
                height: '270px',
                width: '100%',
            }}
        >
            <ListMenuItem />
            <HistoryMenuItem />
            <StatisticsMenuItem />
        </Box>
    )
};

export default SidebarMenu;