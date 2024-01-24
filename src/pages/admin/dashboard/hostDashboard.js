import React from "react";
// import AdminLayout from "../../../layouts/adminLayout";
import { Grid } from "@mui/material";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
// import { MonetizationOnOutlined } from "@mui/icons-material";
// import { theme } from "../../../assets/themes/theme";
// import EarningCard from "./Default/EarningCard";
import Dashboard from "./Default";
import DashboardLayout from "../../../layouts/userDashboard";

const HostDashboard = () => {
  return (
    <DashboardLayout title={"Hosting"}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <h3>Finance info</h3>
        </Grid>

        <Grid item xs={12}>
          <Dashboard />
        </Grid>

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
    </DashboardLayout>
  );
};

export default HostDashboard;
