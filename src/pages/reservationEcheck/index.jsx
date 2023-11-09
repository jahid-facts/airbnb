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

const ReservationCheck = () => {
  // const verified = 'ok';
  const UserInfo = useAuthInfo();
  const [bookingStatuses, setBookingStatuses] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchUserProperties = async () => {
      try {
        const response = await axios.get(`/user/properties/${UserInfo._id}`);
        setProperties(response.data.properties);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProperties();
  }, [UserInfo._id]);

  // console.log(UserInfo._id);

  useEffect(() => {
    if (properties.length) {
      const propertyIds = properties.map((property) => property._id);
      axios
        .get("/api/booking-data", {
          params: {
            userId: UserInfo._id,
            propertyIds: propertyIds,
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
    }
  }, [UserInfo._id, properties]); //properties  or  UserInfo._id, properties

  return (
    <Layout title={"Todays bookins"}>
      <Grid container spacing={2}>
        <div>
          {bookingStatuses.map((propertyData, index) => {
            const property = properties.find((p) => p._id === propertyData._id);
            return (
              <Grid item xs={12} md={10} mx={10} key={property._id}>
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
                    borderRadius={"50px"}
                    bgcolor={"#e0eeff"}
                    display={"flex"}
                    textAlign={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
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
                      Md. Abul Bashar
                    </Typography>
                    <Typography variant="h5" fontWeight={"bold"}>
                      Invoice-Id: 135346532
                    </Typography>
                    <Typography variant="h5" fontWeight={"bold"}>
                      Rev-id: 4534
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={"600"}
                      fontSize={"14px"}
                      color={"#7f7f7f"}
                    >
                      Paid: 343$
                    </Typography>
                  </Box>

                  {/* action box */}
                  <Box width={"40%"}>
                    {propertyData ? (
                      <Varification
                        propertyId={property._id}
                        bookinStatus={propertyData}
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
        </div>
        );
      </Grid>
      {/* <form onSubmit={handleSubmit}>
           
                <Typography variant="" fontSize={"14px"} color={"#7f7f7f"}>
                  Instant Reservation
                </Typography>
                <Typography variant="h5" fontWeight={"bold"}>
                  Activate status

                </Typography>

                <label for="button-file" fontSize={"4px"}> 
                Upload NID </label>

                <Input
                  accept="image/*"
                  style={{ display: 'flex' }}
                  id="button-file"
                  type="file"
                  label="Upload NID"
                  variant="contained"
                 /> 

                 {/* onChange={{handleSubmit}} */}
      {/* <Button type="submit"
                  variant="contained">
                  Verify
                </Button>
                
                <Button>Time extend</Button> */}
      {/* <Button color="secondary" variant="contained" >Cancel </Button>
            
              </form> */}{" "}
      {/**/}
    </Layout>
  );
};

export default ReservationCheck;
