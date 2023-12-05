import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import { getActiveProperties } from "../../redux/features/PropertySlice";
import { useDispatch, useSelector } from "react-redux";
import CustomHashLoader from "../../components/customLoader/CustomHashLoader";
import ReservationCardCopy from "../../components/reservationCard/index copy";
import { useAuthInfo } from "../../helpers/AuthCheck";
import axios from "axios";
import ReservationCard from "../../../components/reservationCard";

const Wishlist = () => {
    const dispatch = useDispatch();
    const { properties } = useSelector((state) => state.properties);
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
        setMatchedProperties(response.data.property);
        //console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  };


  useEffect(() => {
    // Check if properties is an empty array or "falsy"
    // if (!properties || (Array.isArray(properties) && properties.length === 0)) {

    setLoading(true);
    getPropertiesFromWishlist();
    setLoading(false);
    // }
  }, [properties]);



  return (
    <div>
      Wishlist
      {/* <Grid container spacing={4}>
        {loading ? (
          <CustomHashLoader />
        ) : (
          <>
            {properties && properties.length > 0 ? (
              properties
                // .filter((data) => data.status === "active")
                .map((data, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <ReservationCard
                      propertyId={data._id}
                      matchedProperties={matchedProperties}
                      image1={data.images[0]?.url}
                      image2={data.images[1]?.url}
                      image3={data.images[2]?.url}
                      title={`${data.located.address?.state}, ${data.located.address?.country}`}
                      subtitle={
                        data.title.length > 60
                          ? `${data.title.substring(0, 60)}...`
                          : data.title
                      }
                      price={data.price}
                      review={"4.9"}
                    />
                  </Grid>
                ))
            ) : (
              <CustomHashLoader />
            )}
          </>
        )}
      </Grid> */}
    </div>
  );
};

export default Wishlist;
