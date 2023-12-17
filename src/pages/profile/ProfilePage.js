import React, {  useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Avatar,
  IconButton,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import PersonalInfo from "./ProfileContent/PersonalInfo";
import ActiveRenting from "./ProfileContent/ActiveRenting";
import UpcomingRenting from "./ProfileContent/UpcomingRenting";
import { AppLayout } from "../../layouts/appLayout";
import MyTrips from "../profile/ProfileContent/MyTrips";
// import Verification from "../reservationEcheck/Verification";
import Confirmation from "../reservationEcheck/confirmation";


function ProfilePage() {
  const [value, setValue] = useState(0);
  const [isUploadOpen, setUploadOpen] = useState(false);
  // const userInfo = useAuthInfo();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleUpload = () => {
    setUploadOpen(!isUploadOpen);
  };

  //const handleVerify = () => {};

  return (
    <AppLayout>
      <Box sx={{ m: 1 }}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  boxShadow: 6,
                  p: 4,
                  m: 2,
                  borderRadius: 6,
                  position: "relative",
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src="/src/assets/images/avatar.png"
                  sx={{
                    width: "11.25rem",
                    height:"11.25rem",
                    margin: "0 auto",
                    marginBottom: "0.8rem",
                    position: "relative",
                    cursor: "pointer",
                    border: "3px solid #eee",
                    borderRadius: "50%",
                  }}
                  onMouseEnter={toggleUpload}
                  onMouseLeave={toggleUpload}
                >
                  {isUploadOpen && (
                    <div
                      style={{
                        position: "relative",
                        bottom: "10px",
                        right: "1.75rem"
                      }}
                    >
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="upload-button"
                        type="file"
                      />
                      <label htmlFor="upload-button">
                        <IconButton component="span">
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </div>
                  )}
                </Avatar>
                <Box style={{ textAlign: "center" }}>
                  <Typography variant="h6" gutterBottom>
                    Salma Hayek
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Guest
                  </Typography>
                  <Button
                    variant="outlined"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      border: "1px solid black",
                      borderRadius: "6px",
                      padding: "10px",
                      textTransform: "capitalize",
                    }}
                  >
                    Edit Profile
                  </Button>
                </Box>
              </Paper>
              <Paper
                sx={{
                  p: 4,
                  m: 2,
                  borderRadius: 6,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    User's confirmed information
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom>
                    Email address
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    m: 2,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    Verify your identity
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Before you book or Host on Airbnb, you’ll need to complete
                    this step.
                  </Typography>

                  {/* <Verification /> */}
                  <Confirmation/>

                  {/* userId={ userInfo._id } */}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                elevation={3}
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="Profile Tabs"
                >
                  <Tab
                    label="Personal Information"
                    sx={{
                      fontWeight: "bold",
                      "&:hover, &:focus": {
                        backgroundColor: "white",
                        borderBottom: "4px solid #1976d2",
                      },
                    }}
                  />
                  <Tab
                    label="Active Renting"
                    sx={{
                      fontWeight: "bold",
                      "&:hover, &:focus": {
                        backgroundColor: "white",
                        borderBottom: "4px solid #1976d2",
                      },
                    }}
                  />
                  <Tab
                    label="Upcoming Renting"
                    sx={{
                      fontWeight: "bold",
                      "&:hover, &:focus": {
                        backgroundColor: "white",
                        borderBottom: "4px solid #1976d2",
                      },
                    }}
                  />
                  <Tab
                    label="My trips"
                    sx={{
                      fontWeight: "bold",
                      "&:hover, &:focus": {
                        backgroundColor: "white",
                        borderBottom: "4px solid #1976d2",
                      },
                    }}
                  />
                </Tabs>
                <Divider
                  style={{
                    marginBottom: "0.9rem",
                    marginTop: "-3px",
                    border: "2px solid #d7d5e9",
                  }}
                ></Divider>
                <Box>
                  <div
                    role="tabpanel"
                    style={{
                      backgroundColor: "white",
                      padding: "0.9rem",
                    }}
                  >
                    {value === 0 && <Tab1Content />}
                    {value === 1 && <Tab2Content />}
                    {value === 2 && <Tab3Content />}
                    {value === 3 && <Tab4Content />}
                  </div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppLayout>
  );
}

function Tab1Content() {
  return (
    <Box>
      <h2> Renter Profile </h2>
      <h5>
        {" "} Create your Renter Profile once and reuse it for all your applications.
      </h5>
      <br></br>
      <PersonalInfo />
    </Box>
  );
}

function Tab2Content() {
  return (
    <div>
      <h4>Active Renting</h4>
      <ActiveRenting />
    </div>
  );
}

function Tab3Content() {
  return (
    <div>
      <h4>Upcoming Renting</h4>
      <UpcomingRenting />
    </div>
  );
}

// ----------------------------------------------------------------

function Tab4Content() {
  return (
    <div>
       <h4>MyTrips</h4>
      <MyTrips />
    </div>
  );
}

export default ProfilePage;
