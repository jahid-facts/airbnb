import React from "react";
import { Card, CardMedia, Typography, Box, Checkbox } from "@mui/material";
import { Star, Favorite, FavoriteTwoTone } from "@mui/icons-material";
import SlideImage from "../slide";
import { Link } from "react-router-dom";
import { useAuthInfo } from "../../helpers/AuthCheck";
import axios from "axios";
// import { useEffect } from "react";

export default function ReservationCard(props) {
  const { image1, image2, image3, title, subtitle, price, review , propertyId, matchedProperties} = props;
  
  const userInfo = useAuthInfo();



  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteChange = () => {
    setIsFavorite(!isFavorite);
    const userId = userInfo._id;

    

    axios.post("/wishlists", { propertyId, userId })
      .then(response => {
        console.log("Wishlist created successfully:", response.data);
      })
      .catch(error => {
        console.error("Error creating wishlist:", error);
      });


  };

  // useEffect(() => {
  //   matchedProperties
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

const checkBox = () =>
{
  //console.log( matchedProperties )
  if (propertyId in matchedProperties){
    setIsFavorite(true);
  }
}




  

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
          value={checkBox()}
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
