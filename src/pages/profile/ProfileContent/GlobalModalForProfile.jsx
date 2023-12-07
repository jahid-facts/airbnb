import { Box, Drawer, Grid } from '@mui/material';
import React from 'react'

const GlobalModalForProfile = ({open, onClose}) => {
    const closeDrawer = () => {
        onClose();
      };
  return (
    <div>GlobalModalForProfile



<Drawer anchor="bottom" open={open} onClose={onClose}>
        <Grid container spacing={2} m={10}>
          
        </Grid>

        {/* Close Button */}
        <Box
          position={"fixed"}
          bottom={0}
          left={0}
          right={0}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            onClick={closeDrawer}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              px: "20px",
              py: "8px",
              m: "15px",
              cursor: "pointer",
              borderRadius: "10px",
              bgcolor: "secondary.main",
              color: "primary.contrastText",
            }}
          >
            <CloseIcon sx={{ marginLeft: "5px" }} />
            <Typography variant="text"> Close </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  )
}

export default GlobalModalForProfile