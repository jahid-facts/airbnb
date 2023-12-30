import React, { useEffect, useState } from "react";
import { useAuthInfo } from "../../../helpers/AuthCheck";
import ReviewForm from "../../../components/review";
import axios from "axios";
// import { Modal as ReviewModal } from '@mui/base/Modal';
import {
  Grid,
  Box,
  Button,
  Modal as ReviewModal,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Paper,
  Hidden,
  //Avatar
} from "@mui/material";
import { Flex } from "antd";

function MyTrips() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <div style={{marginInline:"1rem"}}>
      <Box>
        <h3>Review The stay</h3>
      </Box>
      <br></br>

      <Grid container rowGap={2} columnGap={2}>
        {rentingStatus.map((rental) => (
          <Box
          fullWidth   
          >
            <Grid item xs={12} sx={{
              borderRadius: "10px",
              boxShadow: 3,
            }}>
              <ListItem>
                <ListItemAvatar>
                  <Box
                    component="img"
                    p={1}
                    mr={2}
                    width={"8.625rem"}
                    height={"6.625rem"}
                    borderRadius="10px"
                    bgcolor="#e0eeff"
                    display="flex"
                    textAlign="center"
                    alignItems="center"
                    justifyContent="center"
                    src={rental.propertyId.images[0].url}
                  ></Box>
                  {/* <Avatar
                  alt={rental.propertyId.title}

                    src={rental.propertyId.images[0].url}
                  /> */}
                </ListItemAvatar>
                <ListItemText
                  primary={rental.propertyId.title}
                  secondary={rental.propertyId.address.addressLine1}
                />
              </ListItem>
              <ListItem>
                <Typography variant="body2" gutterBottom>
                  <big>{rental.stayDays}</big> days stay in{" "}
                  {rental.propertyId.address.city},{" "}
                  {rental.propertyId.address.state}{" "}
                  {rental.propertyId.address.postalCode}.
                </Typography>
              </ListItem>

              {rental.reviewStatus !== "reviewed" && (
                // if the review status is not 'reviewed' (i.e., the review has not been submitted yet)...
                <div
                  style={{
                    // display: "flex",
                    justifyContent: "center",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    // sx={{ paddingBlock: "8px" }}
                    variant="contained"
                    onClick={handleOpen}
                  >
                    <Typography
                      variant="button"
                      display="inline-block"
                      gutterBottom
                    >
                      Review the stay
                    </Typography>
                  </Button>
                  <ReviewModal
                    size="lg"
                    //aria-labelledby="contained-modal-title-vcenter" centered
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                  >
                    <Paper
                      sx={{
                        marginBlock: "20%",
                        marginInline: "14%",
                        fontWeight: 500,
                        padding: "1rem",
                        textAlign: "center",

                        gap: "2px",
                        overflow: "hidden",
                        borderRadius: "8px",
                      }}
                    >
                      <ReviewForm
                        close={handleClose}
                        propertyID={rental.propertyId}
                        bookingID={rental._id}
                      />
                    </Paper>
                  </ReviewModal>
                </div>
              )}
            </Grid>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default MyTrips;

// <Grid item >
//   <ListItem alignItems="flex-start">
//     <Box // image box icon design
//       component="img"
//       p={1}
//       mr={2}
//       width={"15.625rem"}
//       height={"13.625rem"}
//       borderRadius={"10px"}
//       bgcolor={"#e0eeff"}
//       display={"flex"}
//       textAlign={"center"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       alt="The house from the offer."
//       src={rental.propertyId.images[0].url}
//     >
//       {/* <BarChart sx={{ fontSize: "30px", color: "#2980b9" }} /> */}
//     </Box>
//     <ListItemText
//       primary={rental.propertyId.title}
//       secondary={rental.propertyId.address.addressLine1}
//     />
//     {rental.reviewStatus !== "reviewed" && (
//       <ListItem >
//         <ReviewForm
//           propertyID={rental.propertyId}
//           bookingID={rental._id}
//           // reviewStatus= {setReviewStatus}
//         />
//       </ListItem>
//     )}
//   </ListItem>
//   <ListItem>
//     {rental.stayDays}
//   </ListItem>

// </Grid>
