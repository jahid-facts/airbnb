import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import GlobalModalForProfile from "./GlobalModalForProfile"

const PersonalInfo = () => {
    const [globalModalForProfile ,setGlobalModalForProfile] = useState('');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const tilesPersonal = [
    "Personal details",
    "About me",
    "Address history",
    "Employment",
    "Income",
    "Identity documents",
    "Emergency contact",
    "Tenant check (recommended)",
  ];


  const handleTiles = (event) => {
    const tileClicked = event.target.textContent; // Get the text content of the button that was clicked

    // Perform the desired action based on the clicked tile (e.g., navigate to a different page, display a modal, etc.)

    console.log(`Tile clicked: ${tileClicked}`); // Log the clicked tile to the console for testing purposes

    const handleImageLIst = () => {
        setOpenImageList(!GlobalModalForProfile);
      };

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data or submit it to an API here
  };

  return (
    <>
      <Box>
        <p>
          {" "}
          <b>Personal</b>{" "}
        </p>
        {""}
        <p>
          Details to help property managers validate who you are and assess your
          identity, employment and income.
        </p>
        <br></br>
      </Box>

      <Grid container spacing={2}>
        {tilesPersonal.map((tiles) => (
          <Grid item xs={12}>
            <Button
              sx={{ mt: "20px", textTransform: "capitalize" }}
              variant="outlined"
              onClick={handleTiles} // Pass the handleTiles function as a prop to the Button component here.
            >
              {tiles}
            </Button>
          </Grid>
        ))}
      </Grid>

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

      {/* modal  */}
      <GlobalModalForProfile
        //propertyId={propertyId}
        open={globalModalForProfile}
        onClose={() => setGlobalModalForProfile(false)}
      />
    </>
  );
};

export default PersonalInfo;
