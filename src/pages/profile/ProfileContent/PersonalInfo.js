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

   
        setGlobalModalForProfile(!globalModalForProfile);
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
