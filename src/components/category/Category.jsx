import React from 'react';
import { Box, Container, CssBaseline, Tab, Tabs } from '@mui/material'; // Added Container and CssBaseline
import { AccountBalance, DepartureBoard, Park, Nature, Traffic, AccountTree, House } from '@mui/icons-material'; 


export default function Category() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container  maxWidth='xl'>
        <Box mb={2} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Tabs
              sx={{ paddingTop: '10px' }}
              value={value}
              onChange={handleChange}
              variant="scrollable" 
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Sea" icon={<AccountBalance />} />
              <Tab label="National parks" icon={ <DepartureBoard />} />
              <Tab label="Countryside" icon={<Park />} />
              <Tab label="Bed & breakfasts" icon={<Nature />} />
              <Tab label="Amazing views" icon={<Traffic />} />
              <Tab label="OMG!" icon={<AccountBalance />} />
              <Tab label="Item Seven" icon={<Nature />}  />
              <Tab label="Rooms" icon={<Nature />}  />
              <Tab label="Tropical" icon={<AccountTree />}  /> 
              <Tab label="Amazing views" icon={<House />}  /> 
              <Tab label="Tree" />
              <Tab label="Rooms" />
              <Tab label="Tropical" />
              <Tab label="Tropical" />
              <Tab label="Tropical" />
              <Tab label="Tropical" />
              <Tab label="Tropical" />
              <Tab label="Tropical" />
            </Tabs>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
