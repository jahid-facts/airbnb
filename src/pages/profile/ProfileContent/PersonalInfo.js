import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import GlobalModalForProfile from "./GlobalModalForProfile";
import "../ProfilePage.css";
import { Typography } from "antd";
import { CheckBox, Favorite } from "@mui/icons-material";
import { useAuthInfo } from "../../../helpers/AuthCheck";

const PersonalInfo = () => {
  const [globalModalForProfile, setGlobalModalForProfile] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isGreen, setIsGreen] = useState(false);

  const [typeOfForm, setTypeOfForm] = useState("");
  const UserInfo = useAuthInfo();

  console.log(UserInfo);

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

  useEffect(() => {
    if (UserInfo.personalInfo) {
      setIsGreen(true);
    }
  }, []);

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
        <Typography variant="subtitle2">
          <big> Personal </big> <br />
          Details to help property managers validate who you are and assess your
          identity, employment and income.
        </Typography>
        <br></br>
      </Box>

      {isGreen ? (
        <>
          <Typography>
            You have succesfully Updated your renter profile.
          </Typography>
        </>
      ) : (
        <br />
      )}

      <Grid container spacing={2}>
        {tilesPersonal.map((tiles) => (
          <Grid item xs={9} sx={{ textAlign: "start" }}>
            <button
              style={{
                width: "100%",
                paddingLeft: "0%",
                textTransform: "capitalize",
                paddingRight: "60%",
                paddingBlock: "2%",
                borderRadius: "8px",
                backgroundColor: isGreen ? "green" : "",
                fontSize: "1rem",
              }}
              variant="outlined"
              onClick={handleTiles}
            >
              {tiles}
            </button>
          </Grid>
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
