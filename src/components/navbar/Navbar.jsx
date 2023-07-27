import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Toolbar,
  Typography,
  styled
} from '@mui/material';
import { FavoriteBorder, Logout, PersonAdd, Search, Settings } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.jpg';
import user from '../../assets/man.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Category from '../category/Category';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//for date picker

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'; 
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

 

const StyledToolbar = styled(Toolbar)({ 
  display: 'flex', 
  justifyContent: 'space-between',
  paddingRight:'10px',
  paddingLeft:'10px', 
  paddingTop: '15px',
  paddingBottom: '15px',
  borderBottom: '2px solid #f2f2f2'
});

const Icons = styled("div")(({ theme }) => ({
  //    background: 'red',
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [opne, setOpne] = React.useState(null);
  const openMenu = Boolean(opne);
  const handleClick = (event) => {
    setOpne(event.currentTarget);
  };
  const handleClose = () => {
    setOpne(null);
  };


 // FOR CHECK IN/OUT
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // tab style
  const tabStyles = {
    border: (theme) => `1px solid ${theme.palette.divider}`,
    m:'10px',
    borderRadius: '25px', 
    px:'30px', 
  };
  const activeTabStyles = {
    boxShadow: '0px 0px 18px 0px #6363633b',
    border: 'none',
  };

  // active box 
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (value) => {
    setActiveBox(value);
  };

  return (

    <Container maxWidth='xl'>
      <AppBar position='fixed' sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '2px solid #f2f2f2'
      }}>
        <StyledToolbar>

          <Link to="/">
          <img src={logo} alt='Logo' style={{ height: '40px', cursor: 'pointer', border: '1px solid #f3f3f3', }} /> 
          </Link>
          {/* <Button 
              id="basic-button2"
              aria-controls={openMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}
              variant="outlined" 
              sx={{ 
                  width: { 
                    sm: '44%', 
                  },
                  borderRadius:'20px',
                  display:'flex',
                }} 
              
                startIcon={<Tune />}
            >
              Filters
          </Button> */}
          

          <Stack 
              id="basic-button2"
              aria-controls={openMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}
              variant="text" 
              sx={{ 
                  borderRadius:'25px',
                  zIndex: 99999,
                }} 
              >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                // px:'7px',
                // py:'7px',
                // border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 15,
                bgcolor: 'otherColor.light',
                // bgcolor: 'background.paper',
                color: 'text.secondary',
                '& svg': {
                  m: 1.5,
                },
                '& hr': {
                  mx: 0.5,
                },
                // boxShadow: '0px 0px 18px 0px #6363633b',
                cursor: 'pointer',
              }}
            >

              <Box 
                value="1"
                onClick={() => handleBoxClick("1")}
                sx={{ 
                  width: 'fit-content',
                  px: '7px', 
                  py: '7px', 
                  borderRadius: '50px', 
                  bgcolor: activeBox === "1" ? 'activeColor' : '',
                  boxShadow: activeBox === "1" ? '0px 0px 18px 0px #6363633b' : '',
                  
                }}>
                <Box sx={{  px:'15px', }}> 
                  <Typography sx={{  color: 'primary.main', }} variant='h6' fontSize={'14px'} fontWeight={'600'} >Where</Typography>
                  <Typography sx={{ color: 'primary.main', }} variant='h6' fontSize={'12px'} fontWeight={'400'} >Search destinations</Typography>
                </Box>
              </Box>

              <Divider orientation="vertical" variant="middle" flexItem />
              <Box 
                value="2"
                onClick={() => handleBoxClick("2")}
                sx={{ 
                  width: 'fit-content',
                  px: '7px', 
                  py: '7px', 
                  borderRadius: '50px', 
                  bgcolor: activeBox === "2" ? 'activeColor' : '',
                  boxShadow: activeBox === "2" ? '0px 0px 18px 0px #6363633b' : '',
                  
                }}>
                <Box sx={{  px:'15px', }}> 
                  <Typography sx={{  color: 'primary.main', }} variant='h6' fontSize={'14px'} fontWeight={'600'} >Check in</Typography>
                  <Typography sx={{ color: 'primary.main', }} variant='h6' fontSize={'12px'} fontWeight={'400'} >Add dates</Typography>
                </Box>
              </Box>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Box 
                value="3"
                onClick={() => handleBoxClick("3")}
                sx={{ 
                  width: 'fit-content',
                  px: '7px', 
                  py: '7px', 
                  borderRadius: '50px', 
                  bgcolor: activeBox === "3" ? 'activeColor' : '',
                  boxShadow: activeBox === "3" ? '0px 0px 18px 0px #6363633b' : '',
                  
                }}>
                <Box sx={{  px:'15px', }}> 
                  <Typography sx={{  color: 'primary.main', }} variant='h6' fontSize={'14px'} fontWeight={'600'} >Check out</Typography>
                  <Typography sx={{ color: 'primary.main', }} variant='h6' fontSize={'12px'} fontWeight={'400'} >Add dates</Typography>
                </Box>
              </Box>
              <Divider orientation="vertical" variant="middle" flexItem />

              <Box 
                value="4"
                onClick={() => handleBoxClick("4")}
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  width: 'fit-content',
                  px: '7px', 
                  py: '7px', 
                  borderRadius: '50px', 
                  bgcolor: activeBox === "4" ? 'activeColor' : '',
                  boxShadow: activeBox === "4" ? '0px 0px 18px 0px #6363633b' : '',
                  
                }}>
                <Box sx={{  px:'15px', }}> 
                  <Typography sx={{  color: 'primary.main', }} variant='h6' fontSize={'14px'} fontWeight={'600'} >Who</Typography>
                  <Typography sx={{ color: 'primary.main', }} variant='h6' fontSize={'12px'} fontWeight={'400'} >Add guests</Typography>
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    px: '15px', 
                    py: '10px', 
                    borderRadius: '50px', 
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText', 
                  }}>

                  <Search sx={{ marginLeft:'5px' }} />  
                  <Typography variant='text'> Search </Typography>  
                </Box>
              </Box>
            </Box> 
          </Stack>  
          <Menu
              id="basic-menu2"
              anchorEl={opne}
              open={openMenu}
              onClose={handleClose}
              m={'auto'}
              sx={{
                textAlign:'center',
                zIndex: 9999,
              }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Stack>
                  <Box> 
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Where your distinations" value="1" sx={{
                        ...tabStyles,
                        ...(value === '1' && activeTabStyles), 
                        }} />
                      <Tab label="Check In" value="2" sx={{
                        ...tabStyles,
                        ...(value === '2' && activeTabStyles), 
                        }} />
                      <Tab label="Check Out" value="2" sx={{
                        ...tabStyles,
                        ...(value === '2' && activeTabStyles), 
                        }} />
                      <Tab label="Add Guests" value="3" sx={{
                        ...tabStyles,
                        ...(value === '3' && activeTabStyles), 
                        }} />
                    </TabList>
                  </Box>
                </Stack>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangeCalendar']}>
                      <DateRangeCalendar />
                    </DemoContainer>
                  </LocalizationProvider>
                  
                </TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </Menu>

          
          <Icons>
            <Stack direction={'row'} alignItems={'center'}>
            <Typography
            variant='subtitle2'
            fontSize={'14px'}
            mr={'30px'}
            fontWeight={'500'}
            sx={{ display: {
              xs: 'none', 
              md: 'block', 
            }, }}
            >
            <Link to={'/profile'}>
            <Button 
              variant="text" 
              size='small'
              sx={{ 
                  borderRadius:'20px',
                  py:'7px',
                  px:'20px',
                }} 
              
          >
            Switch to hosting
          </Button>
          </Link>
              
            </Typography>
              <Badge  max={9} badgeContent={10} color="primary" sx={{ marginRight: '30px',
              display: {
                xs: 'none', 
                md: 'block', 
              }, 
              }}>
                <FavoriteBorder color="action" />
              </Badge>
              <Box sx={{ display: {
                    xs: 'none', 
                    md: 'block', 
                  }, }}>
                <Box
                  sx={{ 
                    cursor: 'pointer',
                    }}
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                  display={'flex'} alignItems={'center'} border={'1px solid #f1f1f1'} px={'17px'} py={'5px'} borderRadius={'50px'}
                >
                  <MenuIcon sx={{ marginRight: '15px' }} color={'otherColor'} />
                  <Avatar alt="Remy Sharp" src={user} sx={{ width: 35, height: 35 }} />
                </Box>
              </Box>
              <Menu
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorEl={anchorEl}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <Link to={'/profile'} style={{ textDecoration:'none', color:'MenuText' }}>
                  <MenuItem onClick={() => setAnchorEl(null)} sx={{ textDecoration:'none',}}>
                      <Avatar /> Profile
                  </MenuItem>
                </Link>  
                <MenuItem>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Icons> 
        </StyledToolbar>
        <Category />
      </AppBar>
    </Container>
  );
}
