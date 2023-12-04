import React, { useEffect, useState } from "react";
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
  ListItem,
  ListItemText,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import PersonalInfo from "./ProfileContent/PersonalInfo";
import ActiveRenting from "./ProfileContent/ActiveRenting";
import UpcomingRenting from "./ProfileContent/UpcomingRenting";
import { AppLayout } from "../../layouts/appLayout";
import { useAuthInfo } from "../../helpers/AuthCheck";
// import ReservationCheck from "../reservationEcheck";
//import NIDVerificationForm from "../reservationEcheck/Verification";
import ReviewForm from "../../components/review";
// import { getApi } from "../../config/configAxios";
import axios from "axios";
import Confirmation from "../reservationEcheck/confirmation";
// import ReviewPanel from "../../components/rating";

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
      <Box sx={{ p: 1 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
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
                    width: 180,
                    height: 180,
                    margin: "0 auto",
                    marginBottom: "10px",
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
                        position: "absolute",
                        bottom: "10px",
                        right: "28px",
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

                  <Confirmation />

                  {/* userId={ userInfo._id } */}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={8}>
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
                    marginBottom: "15px",
                    marginTop: "-3px",
                    border: "2px solid #d7d5e9",
                  }}
                ></Divider>
                <Box>
                  <div
                    role="tabpanel"
                    style={{
                      backgroundColor: "white",
                      padding: "14px",
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
    <div>
      <h4>Personal Information</h4>
      <PersonalInfo />
    </div>
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
  const [rentingStatus, setRentingStatus] = useState([]);
  //const [reviewStatus, setReviewStatus] = useState("");

  const userInfo = useAuthInfo();
  //console.log(userInfo);

  // const bookinData = getApi("/renter-bookins");

  useEffect(() => {
    axios
      .get("/renter-bookins", {
        params: {
          userId: userInfo._id,
        },
      })
      .then((response) => {
        console.log(response.data);
        setRentingStatus(response.data);
        //setReviewStatus(response.data.reviewStatus);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userInfo._id]); //properties  or  UserInfo._id, properties

  console.log(rentingStatus);

  return (
    <>
      <Box>
        <h3>Review The stay</h3>
      </Box>
      <br></br>

      <Grid container spacing={2}>
        {rentingStatus.map((rental) => (
          <Grid item >
            <ListItem alignItems="flex-start">
              <Box // image box icon design
                component="img"
                p={1}
                mr={2}
                width={"15.625rem"}
                height={"13.625rem"}
                borderRadius={"10px"}
                bgcolor={"#e0eeff"}
                display={"flex"}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                alt="The house from the offer."
                src={rental.propertyId.images[0].url}
              >
                {/* <BarChart sx={{ fontSize: "30px", color: "#2980b9" }} /> */}
              </Box>
              <ListItemText
                primary={rental.propertyId.title}
                secondary={rental.propertyId.address.addressLine1}
              />
              {rental.reviewStatus !== "reviewed" && (
                <ListItem >
                  <ReviewForm
                    propertyID={rental.propertyId}
                    bookingID={rental._id}
                    // reviewStatus= {setReviewStatus}
                  />
                </ListItem>
              )}
            </ListItem>
            <ListItem>
              {rental.stayDays}
            </ListItem>

          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
}

export default ProfilePage;
