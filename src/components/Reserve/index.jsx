import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Reserve = () => {
  return (
    <div>
      <Box
        p={"20px"}
        m={"10px"}
        boxShadow={"0px 0px 18px 0px #6363633b"}
        borderRadius={"20px"}
      >
        <Box display={"flex"} justifyContent={"space-between"} alignItems={'center'} >
          <Typography variant="h4" fontSize={"18px"}>
            $21 night
          </Typography>
          <Box display={"flex"} alignItems={'center'} >
            <Typography variant="h4" fontSize={"13px"} fontWeight={'700'} >
              <Star fontSize={"13px"} /> 4.80 . 
            </Typography>
            <Typography variant="h4" fontSize={"13px"} >
              50 reviews
            </Typography>
          </Box>
        </Box>
        <Box border={'1px solid #f2f2f2'} borderRadius={"10px"} my={'25px'} >
          <Box display={"flex"} alignItems={'center'} justifyContent={'space-around'} p={'15px'} >
            <Typography variant="h4" fontSize={"13px"} fontWeight={'700'} >
              Check in
            </Typography>
            <Typography variant="h4" fontSize={"13px"} fontWeight={'700'} >
              Check out
            </Typography>
          </Box>
          <Box borderTop={'1px solid #f2f2f2'} p={'15px'} >
            <Typography variant="h4" fontSize={"13px"} fontWeight={'700'}  >  
              Guests
            </Typography>
            <Typography variant="h4" fontSize={"13px"} >
              0 Pet
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Reserve;
