import {
    Box,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import React from "react";
  import {
    ApartmentOutlined,
    AttachMoney,
    BarChart,
    MonetizationOnOutlined,
  } from "@mui/icons-material";
  import { theme } from "../../theme";
  import Layout from "../userDashboardLayout";
  
  const Hosting = () => {
    return (
      <Layout title={'Todays bookins'}>
        <Grid container spacing={2}>
        {/* populate this card will be the next target  
        full card e click korle file upload form ashbe*/}
          <Grid item xs={12} md={10} mx = {10} >
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
                 NId: 135346532
               
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



          <Grid item xs={12} md={10} mx = {10} >
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
                 NId: 135346532
               
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


        </Grid>
      </Layout>
    );
  };
  
  export default Hosting;
  