import './App.css';
import { Box, Typography } from '@mui/material';
//import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InboxIcon from '@mui/icons-material/Inbox';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LuggageIcon from '@mui/icons-material/Luggage';
import RecentTrip from './travel';
import HistoryTrip from './history';

function Trips() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Box marginX={3}>
        <h1>Trips</h1>
      </Box>
      <RecentTrip />


      <Typography marginX={3} marginY={4}>
        <h3>  Where have you been </h3>

      </Typography>


      <HistoryTrip />








      {/* <Box textAlign={"center"} justifyContent={'center'} marginX='auto' marginY={4}>
        <RecentTrip />
        <br></br>
        <HistoryCard />
      </Box> */}






      {/* <BottomNavigation
        showLabels
        //value={value}
        onChange={(event, newValue) => {
          //setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore" icon={<TravelExploreIcon />} />
        <BottomNavigationAction label="Inbox" icon={<InboxIcon />} />
        <BottomNavigationAction label="Trip" icon={<LuggageIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation> */}


    </div>
  );
}

export default Trips;
