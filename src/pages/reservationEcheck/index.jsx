import {
  Box,
  Grid,
  // Input,
  //IconButton,
  // Button,
  Typography,
  //useMediaQuery,
} from "@mui/material";
// import React, { useEffect, useState } from "react";
// import {
//   ApartmentOutlined,
//   AttachMoney,
//   BarChart,
//   MonetizationOnOutlined,
// } from "@mui/icons-material";
import { theme } from "../../theme";
//import FormControl from '@mui/material/FormControl';
// import {getApi, postApi} from '../../config/configAxios';
import Varification from "./Verification";

//import Confirmation from './confirmation';
import Layout from "../../layouts/userDashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";
import { Image } from "@mui/icons-material";

const ReservationCheck = () => {
  // const verified = 'ok';
  const UserInfo = useAuthInfo();
  const [bookingStatuses, setBookingStatuses] = useState([]);
  //const [properties, setProperties] = useState([]);

  // useEffect(() => {
  //   const fetchUserProperties = async () => {
  //     try {
  //       const response = await axios.get(`/user/properties/${UserInfo._id}`);
  //       setProperties(response.data.properties);
  //       //console.log(response.data.properties[0]._id);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUserProperties();
  // }, [UserInfo._id]);

  // //console.log(UserInfo._id);
  // console.log(properties);

  useEffect(() => {
    axios
      .get("/booking-data", {
        params: {
          userId: UserInfo._id,
        },
      })
      .then((response) => {
        // const bookingStatuses = response.data.map((propertyData) => propertyData.status);
        // setBookingStatuses(bookingStatuses);
        setBookingStatuses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [UserInfo._id]); //properties  or  UserInfo._id, properties

  console.log(bookingStatuses);

  return (
    <Layout title={"Todays bookins"}>
      <Grid container spacing={2}>
          {bookingStatuses.map((propertyData, index) => {
            // const property = properties.find((p) => p._id === propertyData._id);
            return (
              <Grid item xs={12} md={10} mx={10} key={propertyData._id}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  p={3}
                  boxShadow={theme.palette.boxShadow}
                  bgcolor={"#ffffff"}
                  borderRadius={"20px"}
                >
                  {/* icon img box */}
                  <Box
                    p={1}
                    mr={2}
                    width={"40px"}
                    height={"40px"}
                    borderRadius={"20px"}
                    bgcolor={"#e0eeff"}
                    display={"flex"}
                    textAlign={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    alt="The house from the offer."
                    src={propertyData.propertyId.images.url}
                  >
                    {/* <Image content="img" src={propertyData.propertyId.images.url}></Image> */}
                    
                    
                    {/* <BarChart sx={{ fontSize: "30px", color: "#2980b9" }} /> */}
                  </Box>

                  {/* info box */}
                  <Box width={"40%"}>
                    {/* <Grid item xs={12} md={6} mx = {2}> 
          </Grid> */}

                    <Typography
                      variant="body1"
                      fontSize={"14px"}
                      color={"#7f7f7f"}
                    >
                      {/* Md. Abul Bashar */}
                      Property : {propertyData.propertyId.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      fontSize={"14px"}
                      color={"#7f7f7f"}
                    >
                      {/* Md. Abul Bashar */}
                      Name : {propertyData.renterName}
                    </Typography>
                    <Typography variant="h5" fontWeight={"bold"}>
                      Invoice-Id: {propertyData.invoiceId}
                    </Typography>
                    <Typography variant="h5" fontWeight={"bold"}>
                      {propertyData.adults >= 1 && (
                        <Typography variant="h5" fontWeight={"bold"}>
                          Adults: {propertyData.adults}
                        </Typography>
                      )}

                      {propertyData.children >= 1 && (
                        <Typography variant="h5" fontWeight={"bold"}>
                          Children: {propertyData.children}
                        </Typography>
                      )}

                      {propertyData.infants >= 1 && (
                        <Typography variant="h5" fontWeight={"bold"}>
                          Infants: {propertyData.infants}
                        </Typography>
                      )}

                      {propertyData.pets >= 1 && (
                        <Typography variant="h5" fontWeight={"bold"}>
                          Pets: {propertyData.pets}
                        </Typography>
                      )}

                      {propertyData.propertyId.address.addressLine1 >= 1 && (
                        <Typography variant="h5" fontWeight={"bold"}>
                          Address:{propertyData.propertyId.address.addressLine1}
                        </Typography>
                      )}

                      {propertyData.city >= 1 && (
                        <Typography variant="h5" fontWeight={"bold"}>
                          City: {propertyData.city}
                        </Typography>
                      )}
                    </Typography>

                    {/* <Typography variant="h5" fontWeight={"bold"}>
                      Rev-id: 4534
                    </Typography>
                    <Typography variant="h5" fontWeight={"bold"}>
                      Rev-id: 4534
                    </Typography> */}
                    <Typography
                      variant="body1"
                      fontWeight={"600"}
                      fontSize={"14px"}
                      color={"#7f7f7f"}
                      status
                    >
                      Transection: {propertyData.paymentId.status}
                    </Typography>
                  </Box>
                  {propertyData.status}


                  {/* action box */}
                  <Box width={"40%"}>
                    {propertyData ? (
                      <Varification
                        propertyId={propertyData._id}
                        bookinStatus={propertyData.status}
                        mode={"check"}
                      />
                    ) : (
                      <form>
                        <Typography
                          variant="body1"
                          fontSize={"14px"}
                          color={"#7f7f7f"}
                        >
                          Instant Reservation
                        </Typography>
                        <Typography variant="h5" fontWeight={"bold"}>
                          Activate status
                        </Typography>
                        <button>Validate NID</button>
                        <button>Time extend</button>
                        <button>Cancel</button>
                      </form>
                    )}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        
        );
      </Grid>
    </Layout>
  );
};

export default ReservationCheck;

// {propertyData.map((data, index) => {
//   return (

//       {data.city && (

//           City: {data.city}

//       )}
//       {/* Render other property data here */}

//   );
// })}

//  {/* <form onSubmit={handleSubmit}>

// <Typography variant="" fontSize={"14px"} color={"#7f7f7f"}>
// Instant Reservation
// </Typography>
// <Typography variant="h5" fontWeight={"bold"}>
// Activate status

// </Typography>

// <label for="button-file" fontSize={"4px"}>
// Upload NID </label>

// <Input
// accept="image/*"
// style={{ display: 'flex' }}
// id="button-file"
// type="file"
// label="Upload NID"
// variant="contained"
// />

// {/* onChange={{handleSubmit}} */}
// {/* <Button type="submit"
// variant="contained">
// Verify
// </Button>

// <Button>Time extend</Button> */}
// {/* <Button color="secondary" variant="contained" >Cancel </Button>

// </form> */}{" "}
// {/**/}