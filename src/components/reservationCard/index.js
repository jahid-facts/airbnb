import React from "react";
import { Card, CardMedia, Typography, Box, Checkbox } from "@mui/material";
import { Star, Favorite, FavoriteTwoTone } from "@mui/icons-material";
import SlideImage from "../slide";
import { Link } from "react-router-dom";
import { useAuthInfo } from "../../helpers/AuthCheck";
import axios from "axios";
//import { isArray } from "@apollo/client/utilities";
// import { useEffect } from "react";

export default function ReservationCard(props) {
  const {
    image1,
    image2,
    image3,
    title,
    subtitle,
    price,
    review,
    propertyId,
    matchedProperties,
  } = props;

  const userInfo = useAuthInfo();

  const [isFavorite, setIsFavorite] = React.useState("");

  const handleFavoriteChange = () => {
    setIsFavorite(!isFavorite);
    const userId = userInfo._id;

    axios
      .post("/wishlists", { propertyId, userId })
      .then((response) => {
        console.log("Wishlist created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error creating wishlist:", error);
      });
  };

  const checkFavoriteStatus = () => {
    let isFavor= "";
    if(Array.isArray(matchedProperties) && matchedProperties.length > 0)
    {
      matchedProperties?.forEach((property) => {
        if (property.propertyId === propertyId) {
          isFavor = "checked"; // found the property ID, set favorite flag to true
          return; // exit the loop as we've found what we're looking for
        }
      });
    }
    setIsFavorite(isFavor); // update the component state with the favorite status found in matchedProperties array
  };


  React.useEffect(() => {
      checkFavoriteStatus(); 
  }, []); 
  // add props.matchedProperties as a dependency to re-run this effect when matchedProperties changes (avoid infinite loops)


console.log(isFavorite);
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        "&:hover": {
          background: "transparent",
        },
        position: "relative",
        maxWidth: 345,
      }}
    >
      <CardMedia>
        <SlideImage image1={image1} image2={image2} image3={image3} />
      </CardMedia>
      <Box position={"absolute"} top={"10px"} right={"10px"}>
        <Checkbox
          icon={<FavoriteTwoTone sx={{ fontSize: "29px", color: "#fff" }} />}
          checkedIcon={
            <Favorite sx={{ fontSize: "29px", color: "secondary.main" }} />
          }
          checked={isFavorite}

          onChange={handleFavoriteChange}
        />
      </Box>

      <Link to={`/reservation-details/${propertyId}`}>
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
            color="otherColor.main"
          >
            {title}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Star sx={{ fontSize: "19px", color: "text.secondary" }} />
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
      </Link>
    </Card>
  );
}
