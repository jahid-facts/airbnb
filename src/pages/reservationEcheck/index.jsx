import {
  Box,
  Grid,
  // Input,
  //IconButton,
  // Button,
  Typography,
  //useMediaQuery,
} from "@mui/material";
// import {
//   ApartmentOutlined,
//   AttachMoney,
//   BarChart,
//   MonetizationOnOutlined,
// } from "@mui/icons-material";
import { theme } from "../../assets/themes/theme";
//import FormControl from '@mui/material/FormControl';
// import {getApi, postApi} from '../../config/configAxios';
import Verification from "./Verification";


import Layout from "../../layouts/userDashboard";
import { useEffect, useState } from "react";

import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";
// import  Confirmation  from "./confirmation";
import { useLocation } from "react-router";
//import { Image } from "@mui/icons-material";

const ReservationCheck = () => {
  // const verified = 'ok';
  const UserInfo = useAuthInfo();
  const location = useLocation();
  const [bookingStatuses, setBookingStatuses] = useState([]);

  useEffect(() => {
    axios
      .get("/booking-data", {
        params: {
          userId: UserInfo._id,
        },
      })
      .then((response) => {
        // const bookingStatuses = response.data.map((propertyData) => propertyData.status);

        setBookingStatuses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [UserInfo._id]); //properties  or  UserInfo._id, properties

  //console.log(bookingStatuses);


  

  const displayStatus = (bookingId,bookingStatus, mode) => {
   
    //const bookingStatus = bookinStatu;
    if (location.pathname === "/profile" && UserInfo.status === "active") {
      return "VERIFIED";
    } else if (bookingStatus === "active" && location.pathname === "/e-check" ) {
      return "RENTED";
    } else {
      return <Verification bookingId={bookingId} mode={mode} />; // or display your verification form here
    }
  };




  return (
    <Layout title={"Todays bookins"}>
      <Grid container spacing={2}>
        {bookingStatuses.map((propertyData) => {
          // const property = properties.find((p) => p._id === propertyData._id);
          return (
            <Grid item xs={12} md={10} mx={10} >
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
                  component="img"
                  p={1}
                  mr={2}
                  width={"100px"}
                  height={"100px"}
                  borderRadius={"20px"}
                  bgcolor={"#e0eeff"}
                  display={"flex"}
                  textAlign={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  alt="The house from the offer."
                  src={propertyData.propertyId.images[0].url}
                >
                  {/* <BarChart sx={{ fontSize: "30px", color: "#2980b9" }} /> */}
                </Box>

                {/* <Image
                  alt="The house from the offer."
                  src={propertyData.propertyId.images[0].url}
                  /> */}
                {/* <img src={propertyData.propertyId.images.url} alt=""/> */}

                {/* info box */}
                <Box width={"30%"}>
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
                    variant="h6"
                    fontSize={"14px"}
                    color={"#7f7f7f"}
                  >
                    {/* Md. Abul Bashar */}
                     Renter Name: {propertyData.renterName}
                  </Typography>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Invoice: {propertyData.invoiceId}
                  </Typography>
                  <Typography variant="body1" fontWeight={"bold"}>
                    {propertyData.adults >= 1 && (
                      <Typography variant="subtitle1" fontWeight={"bold"}>
                        Adults: {propertyData.adults}
                      </Typography>
                    )}

                    {propertyData.children >= 1 && (
                      <Typography variant="subtitle1" fontWeight={"bold"}>
                        Children: {propertyData.children}
                      </Typography>
                    )}

                    {propertyData.infants >= 1 && (
                      <Typography variant="subtitle1" fontWeight={"bold"}>
                        Infants: {propertyData.infants}
                      </Typography>
                    )}

                    {propertyData.pets >= 1 && (
                      <Typography variant="subtitle1" fontWeight={"bold"}>
                        Pets: {propertyData.pets}
                      </Typography>
                    )}

                    {propertyData.propertyId.address.addressLine1 >= 1 && (
                      <Typography variant="caption" fontWeight={"bold"}>
                        Address:{propertyData.propertyId.address.addressLine1}
                      </Typography>
                    )}

                    {propertyData.city >= 1 && (
                      <Typography variant="caption" fontWeight={"bold"}>
                        City: {propertyData.city}
                      </Typography>
                    )}
                  </Typography>

                  {/* <Typography variant="caption" fontWeight={"bold"}>
                      Rev-id: 4534
                    </Typography>
                    <Typography variant="caption" fontWeight={"bold"}>
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

                {/* action box */}
                <Box width={"60%"}>
                  {propertyData ? (
                    
                
                      <Box
                      className="active-status"
                      style={{
                        backgroundColor: location.pathname !== '/profile' ? "#FFA500" : "#4CAF50",
                        color: location.pathname !== '/profile' ? '#fff': '#000',
                        textAlign: "center",
                        padding: "10px",
                        borderRadius: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "10px",
                      }}
                    > {displayStatus(propertyData._id, propertyData.status,"upload")}  
                    </Box>

                



                    
                    // <Confirmation
                    //   //bookingId={propertyData._id}
                    //   // InvoiceId={propertyData.invoiceId}
                    //   bookinStatu={propertyData.status}
                    //   mode={"upload"}
                    // />


                  ) : (
                    <table> 
                      <Typography
                        variant="body1"
                        fontSize={"14px"}
                        color={"#7f7f7f"}
                      >
                        Instant Reservation
                      </Typography>
                      <Typography variant="caption" fontWeight={"bold"}>
                        Activate status
                      </Typography>
                      <button>Validate NID</button>
                      <button>Time extend</button>
                      <button>Cancel</button>
                    </table>
                  )}
                </Box>
              </Box>
            </Grid>
          );
        })};
      </Grid>
    </Layout>
  );
};







export default ReservationCheck;

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