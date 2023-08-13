import {
  Box,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import assets from "../../assets";

const Where = ({ onSelect }) => {
  const handleRegionClicked = (event) => {
    const region = event.target.alt;
    onSelect(region);
  }
  
  return (
    <Stack sx={{ padding: "20px", maxWidth: "100%" }}>
      <Typography
        sx={{
          color: "primary.main",
          paddingTop: "20px",
          paddingLeft: { md: "20px" },
        }}
        variant="h6"
        fontSize={"14px"}
        fontWeight={"600"}
      >
        Search by region
      </Typography>
      <Grid container spacing={""}>
        <Grid item xs={6} sm={6}>
          <Box sx={{ p: "5px" }}>
            <img src={assets.images.bdMap} className="countryMap" alt="Bangladesh" onClick={handleRegionClicked} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box sx={{ p: "5px" }}>
            <img src={assets.images.ukMap} className="countryMap" alt="United Kingdom" onClick={handleRegionClicked} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Where;
