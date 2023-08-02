import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Who = () => {
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
            Adults
          </Typography>
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"12px"}
            fontWeight={"400"}
          >
            Ages 13 or above
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
          <RemoveCircleOutlineOutlined />
          <Typography variant="text" mx={"10px"}>
            {" "}
            0{" "}
          </Typography>
          <AddCircleOutlineOutlined />
        </Box>
      </Box>
      <Divider />
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
            Children
          </Typography>
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"12px"}
            fontWeight={"400"}
          >
            Ages 2-12
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
          <RemoveCircleOutlineOutlined />
          <Typography variant="text" mx={"10px"}>
            {" "}
            0{" "}
          </Typography>
          <AddCircleOutlineOutlined />
        </Box>
      </Box>
      <Divider />
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
            Infants
          </Typography>
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"12px"}
            fontWeight={"400"}
          >
            Under 2
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
          <RemoveCircleOutlineOutlined />
          <Typography variant="text" mx={"10px"}>
            {" "}
            0{" "}
          </Typography>
          <AddCircleOutlineOutlined />
        </Box>
      </Box>
      <Divider />
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
            Pets
          </Typography>
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"12px"}
            fontWeight={"400"}
          >
            Bringing a service animal?
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
          <RemoveCircleOutlineOutlined />
          <Typography variant="text" mx={"10px"}>
            {" "}
            0{" "}
          </Typography>
          <AddCircleOutlineOutlined />
        </Box>
      </Box>
    </>
  );
};

export default Who;
