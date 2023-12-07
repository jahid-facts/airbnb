import { Box, Drawer, Grid } from '@mui/material';
import React from 'react'

const GlobalModalForProfile = ({open, onClose}) => {
    const closeDrawer = () => {
        onClose();
      };


      const handleSubmit =() =>{

      };
      
  return (
    <div>GlobalModalForProfile



<Drawer anchor="bottom" open={open} onClose={onClose}>
        <Grid container spacing={2} m={10}>

        <form onSubmit={handleSubmit}>
        <Box
          sx={{
            boxShadow: 1,
            p: 2,
            m: 1,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Legal name"
                label="Legal name"
                variant="standard"
                fullWidth
                value={formData.legalName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Email address"
                label="Email address"
                type="email"
                variant="standard"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Phone numbers"
                label="Phone numbers"
                variant="standard"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Government ID"
                label="Government ID"
                variant="standard"
                fullWidth
                value={formData.governmentID}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Address"
                label="Address"
                variant="standard"
                fullWidth
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Emergency contact"
                label="Emergency contact"
                variant="standard"
                fullWidth
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>

          
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