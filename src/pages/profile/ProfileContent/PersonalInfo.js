import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import GlobalModalForProfile from "./GlobalModalForProfile";
import "../ProfilePage.css";
import { Typography } from "antd";
import { CheckBox, Favorite } from "@mui/icons-material";

const PersonalInfo = () => {
    const [globalModalForProfile ,setGlobalModalForProfile] = useState(false);

  const [typeOfForm , setTypeOfForm] = useState("");


  const tilesPersonal = [
    "Personal details",
    "About me",
    "Address history",
    //"Employment",
    "Income",
    // "Identity documents",
     "Emergency contact",
    "Tenant check (recommended)",
  ];


  const handleTiles = (event) => {
    const tileClicked = event.target.textContent; // Get the text content of the button that was clicked

    console.log(`Tile clicked: ${tileClicked}`); // Log the clicked tile to the console for testing purposes

   
        setGlobalModalForProfile(!globalModalForProfile);
        setTypeOfForm(tileClicked);

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

      <Grid container spacing={2} >
        {tilesPersonal.map((tiles) => (
          <><Grid item xs={9} sx={{ textAlign: 'start' }}>
            <button
              style={{
                
                width: "100%", paddingLeft: "0%", textTransform: "capitalize", paddingRight: "60%", paddingBlock: "2%"
              }}


              variant="outlined"
              onClick={handleTiles}
            >

              <Typography>{tiles} </Typography>
            </button>
          </Grid><Grid item xs={3}> <CheckBox /></Grid></>
        ))}
      </Grid>

    
      {/* modal  */}
      <GlobalModalForProfile 
        //propertyId={propertyId}
        open={globalModalForProfile}
        onClose={() => setGlobalModalForProfile(false)}
        typeOfForm={typeOfForm}
      />
    </>
  );
};

export default PersonalInfo;
