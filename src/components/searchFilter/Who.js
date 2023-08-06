import React, { useState } from "react";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

const Counter = ({ label, description }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

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
            px: "15px",
            py: "10px",
          }}
        >
          <RemoveCircleOutlineOutlined onClick={handleDecrement} />
          <Typography variant="text" mx={"10px"}>
            {count}
          </Typography>
          <AddCircleOutlineOutlined onClick={handleIncrement} />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

const Who = () => {
  return (
    <>
      <Counter label="Adults" description="Ages 13 or above" />
      <Counter label="Children" description="Ages 2-12" />
      <Counter label="Infants" description="Under 2" />
      <Counter label="Pets" description="Bringing a service animal?" />
    </>
  );
};

export default Who;
