import {
  Box,
  Grid,
  // Input,
  //IconButton,
  // Button,
  Typography,
  //useMediaQuery,
} from "@mui/material";
import React from "react";
// import {
//   ApartmentOutlined,
//   AttachMoney,
//   BarChart,
//   MonetizationOnOutlined,
// } from "@mui/icons-material";
import { theme } from "../../theme";
//import FormControl from '@mui/material/FormControl';
// import {getApi, postApi} from '../../config/configAxios';
import Varification from './Verification';
//import Confirmation from './confirmation';
import Layout from "../userDashboardLayout";

const reservationCheck = () => {
  // const verified = 'ok';

  return (
    <Layout title={'Todays bookins'}>
      <Grid container spacing={2}>
        {/* populate this card will be the next target  
        full card e click korle file upload form ashbe*/}
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
              <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
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


              <Varification />




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
            
              </form> */} {/**/}


            </Box>


          </Box>
        </Grid>

        <Grid item xs={12} md={10} mx={10} >
          <Box
            display={"flex"}
            alignItems={"center"}
            p={3}
            boxShadow={theme.palette.boxShadow}
            bgcolor={"#ffffff"}
            borderRadius={"20px"}
          >
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



            <Box>
              <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
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
          </Box>
        </Grid>

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
              <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
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
              <form>
                <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
                  Instant Reservation
                </Typography>
                <Typography variant="h5" fontWeight={"bold"}>
                  Activate status

                </Typography>
                <button>Validate NID</button>
                <button>Time extend</button>
                <button>Cancel</button>

              </form>


            </Box>


          </Box>
        </Grid>


      </Grid>
    </Layout>
  );
};

export default reservationCheck;
