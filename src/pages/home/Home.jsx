import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";

import images from "./Images";
import ReservationCard from "../../components/reservationCard";
import AppLayout from "../../layouts/appLayout";
import { getActiveProperties } from "../../redux/features/PropertySlice";
import { useDispatch, useSelector } from "react-redux";
import CustomHashLoader from "../../components/customLoader/CustomHashLoader";
import ReservationCardCopy from "../../components/reservationCard/index copy";
import { Close } from "@mui/icons-material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { markers } from "./property";
import "./markerStyle.css";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";
import ChatButton from "../../components/chat_window/ChatButton"; //added for chatbot/fahim
import ChatWindow from "../../components/chat_window/ChatWindow"; //added for chatbot/fahim


const iconControl = (price) => {
  const width = 10 + price.length * 8;
  return new L.divIcon({
    className: "custom-marker",
    html: `<div>${price}</div>`,
    iconSize: [width, 20],
  });
  // return new L.Icon({
  //   iconUrl: assets.images.mapIcon,
  //   iconSize: [32, 32],
  //   iconAnchor: [16, 32],
  //   popupAnchor: [0, -32],
  // });
};

export default function Home() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const REACT_APP_AI_URL = process.env.REACT_APP_AI_URL;

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
 

  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties);

  const [matchedProperties, setMatchedProperties] = useState("");
  const [loading, setLoading] = useState(false);
  const userInfo = useAuthInfo();

  const [recommended_properties, setrecommended_properties] = useState([]);

  const getRecommendedProperties = () => {
    try {
      // Fetch recommended properties from your API
      fetch(`${REACT_APP_AI_URL}/recommended/${userInfo._id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (
            data.recommended_properties &&
            data.recommended_properties.length > 0
          ) {
            setrecommended_properties(data.recommended_properties);
          } else {
            console.warn(
              "No recommended properties found in the API response:",
              data
            );
          }
        });
    } catch (error) {
      console.error("Error fetching recommended properties:", error);
    }



    
  };

  const getPropertiesFromWishlist = () => {
    try {
      axios
        .get("/getPropertiesFromWishlist", {
          params: {
            userId: userInfo._id,
          },
        })
        .then((response) => {
          setMatchedProperties(response.data.properties);
          console.log(response.data);
        });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getPropertiesFromWishlist();
    setLoading(true);
    getRecommendedProperties();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Check if properties is an empty array or "falsy"
    // if (!properties || (Array.isArray(properties) && properties.length === 0)) {

    setLoading(true);
    dispatch(getActiveProperties());
    setLoading(false);
    // }
  }, [dispatch, properties]);

  const [openMap, setOpenMap] = useState(false);
  const closeDrawer = () => {
    setOpenMap(false);
  };

  return (
    <AppLayout>
      <>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h3 style={{ marginTop: "10px" }}>Active Properties</h3>
            </Grid>
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
                          // review={data.review.overAllRating}
                          review={data.review}
                        />
                      </Grid>
                    ))
                ) : (
                  <CustomHashLoader />
                )}
              </>
            )}

            {/* Display recommended properties */}
            {/* fixed the bug of recomended id issue for jayeed */}

            {recommended_properties && recommended_properties.length > 0 ? (
              <Grid item xs={12}>
                <h3 style={{ marginTop: "10px" }}>Recommended Properties</h3>
              </Grid>
            ) : (
              ""
            )}
            {loading ? (
              <CustomHashLoader />
            ) : (
              <>
                {recommended_properties && recommended_properties.length > 0
                  ? recommended_properties.map((propertyId, index) => (
                      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        {/* Render your recommended property using the propertyId */}
                        <ReservationCard propertyId={propertyId} />
                      </Grid>
                    ))
                  : ""}
              </>
            )}

            <Grid item xs={12}>
              <h3 style={{ marginTop: "10px" }}>Demo Properties</h3>
            </Grid>
            {images.map((card, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <ReservationCardCopy
                  image1={card.image1}
                  image2={card.image2}
                  image3={card.image3}
                  title={"Chaing Rai, Thailand"}
                  subtitle={"29 km to Lam Nam Kok National Park Aug 19 - 24"}
                  price={card.price}
                  review={"4.9"}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          position={"fixed"}
          sx={{
            bottom: {
              md: "20px",
              xs: "70px",
            },
            textTransform: "capitalize",
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "boxShadow",
          }}
        >
          <Button
            onClick={() => setOpenMap(true)}
            size="large"
            variant="contained"
            sx={{ textTransform: "capitalize", borderRadius: "30px" }}
          >
            View map
          </Button>
        </Box>
        <Drawer anchor="bottom" open={openMap} onClose={closeDrawer}>
          <div
            style={{
              height: "90vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "100%",
                  },
                  margin: "auto",
                  marginBottom: "130px",
                  mt: 3,
                  pr: 2,
                  pl: 3,
                }}
              >
                <Grid container spacing={2}>
                  <MapContainer
                    center={[23.747764138817665, 90.37080989945406]}
                    zoom={13}
                    style={{ height: "600px", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/* Render markers */}
                    {markers.map((marker) => (
                      <Marker
                        key={marker.id}
                        icon={iconControl(marker.price)}
                        position={marker.position}
                      >
                        <Popup>
                          <div>
                            <img
                              src={marker.image}
                              width={"250px"}
                              style={{ borderRadius: "10px" }}
                              alt=""
                              srcset=""
                            />
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h3>{marker.title}</h3>
                              <h3>{marker.price}</h3>
                            </div>
                            {marker.content}
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </Grid>
              </Box>
              <Box
                position={"fixed"}
                bottom={0}
                left={0}
                right={0}
                display={"flex"}
                justifyContent={"center"}
                zIndex={9999999999}
              >
                <Box
                  onClick={closeDrawer}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    px: "20px",
                    py: "8px",
                    m: "15px",
                    cursor: "pointer",
                    borderRadius: "10px",
                    bgcolor: "secondary.main",
                    color: "primary.contrastText",
                  }}
                >
                  <Close sx={{ marginLeft: "5px" }} />
                  <Typography variant="text"> Close </Typography>
                </Box>
              </Box>
            </>
          </div>
        </Drawer>
        <ChatButton onClick={toggleChat} />{" "}
        {/* Add the ChatButton component/fahim */}
      </>
      {isChatOpen && <ChatWindow onClose={toggleChat} />}{" "}
      {/* Show the chat window when isChatOpen is true/fahim */}
    </AppLayout>
  );
}
