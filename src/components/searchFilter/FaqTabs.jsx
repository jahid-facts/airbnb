// FaqTabs.js
import React, { useState } from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import Who from "./Who";
import Where from "./Where";
import WhenDate from "./WhenDate";

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{
          boxShadow: "0px 0px 18px 0px #6363633b",
          borderRadius: "15px",
          p: "15px",
        }}
      >
        <Tab
          label="Where"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        />
        <Tab
          label="When"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        />
        <Tab
          label="Who"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        />
      </Tabs>

      {activeTab === 0 && (
        <div
          style={{
            boxShadow: "0px 0px 18px 0px #6363633b",
            borderRadius: "15px",
            padding: "15px",
            marginTop: "25px",
          }}
        >
          <Typography variant="h6" pl={"20px"} fontWeight={"bold"}>
            Where to?
          </Typography>
          <Where />
        </div>
      )}
      {activeTab === 1 && (
        <div
          style={{
            boxShadow: "0px 0px 18px 0px #6363633b",
            borderRadius: "15px",
            padding: "15px",
            marginTop: "25px",
          }}
        >
          <Typography variant="h6" pl={"20px"} fontWeight={"bold"} mb={'20px'}>
            Who's comming
          </Typography> 
          <WhenDate />
        </div>
      )}
      {activeTab === 2 && (
        <div
          style={{
            boxShadow: "0px 0px 18px 0px #6363633b",
            borderRadius: "15px",
            padding: "15px",
            marginTop: "25px",
          }}
        >
          <Typography variant="h6" pl={"20px"} fontWeight={"bold"}>
            Who's comming
          </Typography>
          <Who />
        </div>
      )}
    </div>
  );
};

export default FaqTabs;
