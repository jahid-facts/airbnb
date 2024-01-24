import React, { useState } from "react";
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
import {
  ContactSupportOutlined,
  EmailOutlined,
  PhotoCamera,
  UploadFile,
} from "@mui/icons-material";
import PersonalInfo from "./ProfileContent/PersonalInfo";
import ActiveRenting from "./ProfileContent/ActiveRenting";
import UpcomingRenting from "./ProfileContent/UpcomingRenting";
import AppLayout from "../../layouts/appLayout";
import MyTrips from "../profile/ProfileContent/MyTrips";
// import Verification from "../reservationEcheck/Verification";
import Confirmation from "../reservationEcheck/confirmation";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";

function ProfilePage() {
  const [value, setValue] = useState(0);
  const [isUploadOpen, setUploadOpen] = useState(false);
  // const userInfo = useAuthInfo();
  const [file, setFile] = useState(null);
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

  const userInfo = useAuthInfo();
  const userId = userInfo._id;

  console.log(userId);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      const response = await fetch(REACT_APP_BASE_URL+"/users/avatar", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error(
          "Failed to send image. Server responded with " + response.status
        );
        return;
      }

      // const response = await axios.post('/users/avatar', formData);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleUpload = () => {
    setUploadOpen(!isUploadOpen);
  };

  //const handleVerify = () => {};
  // console.log(userInfo.avatar.url);
  return (
    <AppLayout>
      <Box sx={{ m: 1 }}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  boxShadow: 3,
                  p: 4,
                  m: 2,
                  borderRadius: 4,
                  position: "relative",
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src={userInfo.avatar.url}
                  // src=""
                  // uploads/1703051180203-123247207.png
                  sx={{
                    width: "13.25rem",
                    height: "11.25rem",
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
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          // bottom: "10px",
                          // right: "1.75rem",
                        }}
                      >
                        <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="upload-button"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="upload-button">
                          <IconButton component="span">
                            <PhotoCamera />
                          </IconButton>
                        </label>
                        <IconButton type="submit">
                          <UploadFile />{" "}
                        </IconButton>
                      </div>
                    </form>
                  )}
                </Avatar>
                <Box style={{ textAlign: "center" }}>
                  <Typography variant="h6" gutterBottom>
                    {userInfo.name}
                  </Typography>
                  {/* 
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
                  </Button> */}
                </Box>
              </Paper>
              <Paper
                sx={{
                  boxShadow: 3,
                  p: 4,
                  m: 2,
                  borderRadius: 3,
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

                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", gap: 1 }}
                    gutterBottom
                  >
                    <EmailOutlined /> {userInfo.email}
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
                  <Confirmation />

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
      <Typography variant="h4"> Renter Profile </Typography>
      <h4>
        {" "}
        Create your Renter Profile once and reuse it for all your applications.
      </h4>
      <br></br>
      <PersonalInfo />
    </Box>
  );
}

function Tab2Content() {
  return (
    <div>
      <h4>Current Renting</h4>
      <br />
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
    <Box>
      <Typography variant="h4">My Trips</Typography>
      <MyTrips />
    </Box>
  );
}

export default ProfilePage;
