import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Checkbox,
} from "@mui/material";

import { Star, FavoriteBorder, Favorite } from "@mui/icons-material";
import SlideImage from "../slide";

export default function ReservationCard(props) {
  const { image1, image2, image3, title, subtitle, price, review } = props;

  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "none",
        backgroundColor: "#fff",
        "&:hover": {
          background: "#ffffff",
        },
      }}
    >
      <CardActionArea>
        <CardMedia>
          <SlideImage image1={image1} image2={image2} image3={image3} />
        </CardMedia>
        <Box position={"absolute"} top={"10px"} right={"10px"}>
          <Checkbox
            icon={<FavoriteBorder sx={{ fontSize: "29px", color: "#fff" }} />}
            checkedIcon={
              <Favorite sx={{ fontSize: "29px", color: "secondary.main" }} />
            }
          />
        </Box>
        
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={2}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight={"bold"}
            fontSize={"16px"}
          >
            {/* Chaing Rai, Thailand */}
            {title}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Star color="text.secondary" sx={{ fontSize: "19px" }} />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              fontSize={"15px"}
              justifyItems={"center"}
            >
              {review}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          fontSize={"15px"}
          justifyItems={"center"}
        >
          {/* 29 km to Lam Nam Kok National Park Aug 19 - 24 */}
          {subtitle}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          fontSize={"15px"}
          justifyItems={"center"}
        >
          <span style={{ fontWeight: "bold" }}>${price}</span> night
        </Typography>
      </CardActionArea>
    </Card>
  );
}
