import React from "react";

import { Box, Divider, Typography } from "@mui/material";
import Counter from "./Counter";

const WhoComponent = ({ label, description, counter }) => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "15px",
          py: "20px",
        }}
      >
        <Box sx={{ px: "15px" }}>
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"14px"}
            fontWeight={"600"}
          >
            {label}
          </Typography>
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"12px"}
            fontWeight={"400"}
          >
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            // px: "15px",
            // py: "10px",
          }}
        >
         <Counter />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

const Who = () => {
  return (
    <>
      <WhoComponent label="Adults" description="Ages 13 or above" counter={<Counter />} />
      <WhoComponent label="Children" description="Ages 2-12" counter={<Counter />} />
      <WhoComponent label="Infants" description="Under 2" counter={<Counter />} />
      <WhoComponent label="Pets" description="Bringing a service animal?" counter={<Counter />} />
    </>
  );
};

export default Who;
