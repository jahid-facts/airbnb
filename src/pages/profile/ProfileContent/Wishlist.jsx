import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import axios from "axios";
import ReservationCard from "../../../components/reservationCard";
import { useAuthInfo } from "../../../helpers/AuthCheck";
import CustomHashLoader from "../../../components/customLoader/CustomHashLoader";

const Wishlist = () => {
  
  //const { properties } = useSelector((state) => state.properties);
  const [matchedProperties, setMatchedProperties] = useState("");
  const [loading, setLoading] = useState(false);
  const userInfo = useAuthInfo();

  const getPropertiesFromWishlist = () => {
    axios
      .get("/getPropertiesFromWishlist", {
        params: {
          userId: userInfo._id,
        },
      })
      .then((response) => {
        setMatchedProperties(response.data.properties);
        console.log(response.data.properties);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  };

  useEffect(() => {
    setLoading(true);
    getPropertiesFromWishlist();
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//console.log(matchedProperties)


  return (
    <Container>
     <Box
     sx={{
      textAlign:"center",
      fontWeight:"600",
      fontSize: "1.5rem",
      marginBlock:"1rem",
      position: "sticky",
     }}>
     Wishlist
     </Box>
      <Box
        sx={{
          margin: "1.5rem",
          padding: "1rem",
          textAlign: "center",
        }}
      >
       <Grid container spacing={4}>
        {loading ? (
          <CustomHashLoader />
        ) : (
          <>
            {matchedProperties && matchedProperties.length > 0 ? (
              matchedProperties
                .map((data, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <ReservationCard
                      propertyId={data.propertyId._id}
                      matchedProperties={matchedProperties}
                      image1={data.propertyId.images[0]?.url}
                      image2={data.propertyId.images[1]?.url}
                      image3={data.propertyId.images[2]?.url}
                      title={`${data.propertyId.located.address?.state}, ${data.propertyId.located.address?.country}`}
                      subtitle={
                        data.propertyId.title.length > 60
                          ? `${data.propertyId.title.substring(0, 60)}...`
                          : data.propertyId.title
                      }
                      price={data.propertyId.price}
                      review={"4.9"}
                    />
                  </Grid>
                ))
            ) : (
              <CustomHashLoader />
            )}
          </>
        )}
      </Grid>
      </Box>
      {/*  */}
    </Container>
  );
};

export default Wishlist;
