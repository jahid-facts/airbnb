import React from "react";
import AdminLayout from "../../../layouts/adminLayout";
import { Box, Card, Grid, Typography } from "@mui/material";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { MonetizationOnOutlined } from "@mui/icons-material";
import { theme } from "../../../assets/themes/theme";
// import EarningCard from "./Default/EarningCard";
import Dashboard from "./Default";

const HostDashboard = () => {
  return (
    <AdminLayout title={"Hosting"}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <h3>Finance info</h3>
        </Grid>

        <Grid item xs={12}>
          <Dashboard />
        </Grid>

        {/* <Grid item xs={12} md={4}>
          <DashboardCard
            icon={"clarity:dashboard-line"}
            title={"Spend this month"}
            subTitle={"Total"}
            countNumber={"$654"}
            color={"#2980b9"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            icon={"mdi:dollar"}
            title={"Earnings"}
            subTitle={"Total"}
            countNumber={"$642.39"}
            color={"#27ae60"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              boxShadow: theme.palette.boxShadow,
              borderRadius: "20px",
              position: "relative",
              width: "100%",
              height: "100%",
              bgcolor: "#ffffff",
            }}
          >
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
                <MonetizationOnOutlined
                  sx={{ fontSize: "30px", color: "#8e44ad" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontSize={"14px"}
                  color={"#7f7f7f"}
                  fontWeight={"600"}
                >
                  Sales
                </Typography>
                <Typography variant="h5" fontWeight={"bold"}>
                  $574.34
                </Typography>
                <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
                  <span style={{ color: "#27ae60" }}> +23%</span> since last
                  month
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid> */}

        <Grid item xs={12} sx={{ mt: 3 }}>
          <h4>Rent & properties info</h4>
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            icon={"fa:users"}
            title={"Renters"}
            subTitle={"Total"}
            countNumber={"54"}
            color={"#F4D160"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            icon={"tdesign:building"}
            title={"Live property"}
            subTitle={"Total"}
            countNumber={"65"}
            color={"#FF6AC2"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            icon={"clarity:building-line"}
            title={"In progress properties"}
            subTitle={"Total"}
            countNumber={"50"}
            color={"#ff0000"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            icon={"clarity:building-line"}
            title={"Tolet properties"}
            subTitle={"Total"}
            countNumber={"50"}
            color={"#ff0000"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            icon={"clarity:building-line"}
            title={"Active rented property"}
            subTitle={"Total"}
            countNumber={"30"}
            color={"#ff0000"}
          />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default HostDashboard;
