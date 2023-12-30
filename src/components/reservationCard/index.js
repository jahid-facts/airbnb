import React from "react";
import { Card, CardMedia, Typography, Box, Checkbox } from "@mui/material";
import { Star, Favorite, FavoriteTwoTone } from "@mui/icons-material";
import SlideImage from "../slide";
import { Link } from "react-router-dom";
import { useAuthInfo } from "../../helpers/AuthCheck";

import axios from "axios";
// import { isArray } from "@apollo/client/utilities";
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
  // const [isDeleting, setIsDeleting] = useState(false);

  const handleFavouriteDelete = () => {
    axios
      .delete(`/deletePropertyfromWishlist`, {
        params: {
          propertyId: propertyId,
          userId: userInfo._id,
        },
      })
      .then((response) => {
        console.log("Wishlist deleted successfully:", response.data);
        setIsFavorite("");
      })
      .catch((error) => {
        console.error("Error deleting wishlist:", error);
      });
  };

  const handleFavoriteChange = () => {
    //console.log(isFavorite);
    const userId = userInfo._id;

    // Start creating process
    axios
      .post("/wishlists", { propertyId, userId })
      .then((response) => {
        console.log("Wishlist created successfully:", response.data);
        setIsFavorite("checked");
      })
      .catch((error) => {
        console.error("Error creating wishlist:", error);
      });
  }; // end handleFavoriteChange function definition

  React.useEffect(() => {
    const checkFavoriteStatus = () => {
      let isFavor = "";
      if (Array.isArray(matchedProperties) && matchedProperties.length > 0) {
        matchedProperties?.forEach((properties) => {
          if (properties.propertyId._id === propertyId) {
            isFavor = "checked";
            // found the property ID, set favorite flag to true
            return;
            // exit the loop as we've found what we're looking for
          }
        });
      }
      setIsFavorite(isFavor); // update the component state with the favorite status found in matchedProperties array

      return isFavor;
    };
    checkFavoriteStatus();
  }, [matchedProperties, propertyId]);

  // console.log(isFavorite);
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
          onClick={
            isFavorite === "checked"
              ? handleFavouriteDelete
              : handleFavoriteChange
          }
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

// const handleFavoriteChange = () => {
//   setIsFavorite("checked");
//   const userId = userInfo._id;

//   axios
//     .post("/wishlists", { propertyId, userId })
//     .then((response) => {
//       console.log("Wishlist created successfully:", response.data);
//     })
//     .catch((error) => {
//       console.error("Error creating wishlist:", error);
//     });

// };
