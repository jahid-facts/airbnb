import React, { useEffect, useState } from 'react';
import { useAuthInfo } from '../../../helpers/AuthCheck';
import ReviewForm from "../../../components/review";
import axios from 'axios';
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

function MyTrips() {

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
  
    //console.log(rentingStatus);
  


  return (
    <div>

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



    </div>
  )
}

export default MyTrips;