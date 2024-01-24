import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InfoRounded from "@mui/icons-material/InfoRounded";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  Container,
  Divider,
  Grid,
  //Rating,
  Typography,
} from "@mui/material";
import {
  FavoriteOutlined,
  Share,
  Wifi,
  DriveEta,
  Cancel,
  LocationCity,
  Star,
  VerifiedUser,
} from "@mui/icons-material";
import assets from "../../assets";
import Reserve from "../../components/Reserve";
import { Link, useParams } from "react-router-dom";
import Maps from "../../components/leaftLet/Maps";
import OpenImageList from "./ImageList";
import AppLayout from "../../layouts/appLayout";
import { getApiById } from "../../config/configAxios";
import "./imageOverlay.css";
import CustomHashLoader from "../../components/customLoader/CustomHashLoader";
import { Icon } from "@iconify/react";
import OpenAmenitiseList from "./AmenitiseList";
import ShareThisPlace from "./ShareThisPlace";
import axios from "axios";
import ReviewSection from "./reviewSection";

export default function ReservationDetails() {
  const [selectPosition, setSelectPosition] = React.useState(null);
  const [propertyValues, setPropertyValues] = React.useState(null);
  const [amenitiseItem, setAmenitiseItem] = React.useState(null);
  const [openImageList, setOpenImageList] = React.useState(false);

  const [openAmenitiseList, setOpenAmenitiseList] = React.useState(false);

  const [itemDataImages, setItemDataImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { propertyId } = useParams();
  const [openShare, setOpenShare] = React.useState(false);
  const [sentimentScore, setSentimentScore] = React.useState(0);
  const REACT_APP_AI_URL = process.env.REACT_APP_AI_URL;
  const getSentiment = async () => {
    try {
      // console.log(propertyId)
      const response = await axios.post(
        REACT_APP_AI_URL+"/get_review_sentiment",
        {
          propertyId: propertyId,
        },   
        { headers: { "Content-Type": "application/json" } }
       
      );
      console.log(response);

      setSentimentScore(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
  
    const fetchDataServer = async () => {
      try {
        setLoading(true);
        const response = await getApiById(
          `/property/details/${propertyId}`,
          propertyId
        );
        setPropertyValues(response.data.property);

        const newItems = response.data.property.images.map((data) => ({
          img: data.url,
          title: data.name,
          rows: 2,
          cols: 2,
        }));
        setItemDataImages(newItems);
        setAmenitiseItem(response.data.property?.amenitiesIds);
        setLoading(false); // Set loading to false after data is fetched

        //console.log(propertyId);
      } catch (error) {
        console.error("Internal server error:", error);

        // You can add error handling here, such as displaying an error message
        setLoading(false); // Ensure to set loading to false even in case of an error
      }
    };

    fetchDataServer();
    getSentiment(propertyId);

  }, [propertyId]);

  const handleImageLIst = () => {
    setOpenImageList(!openImageList);
  };

  const handleAmenitiseLIst = () => {
    setOpenAmenitiseList(!openAmenitiseList);
  };

  React.useEffect(() => {
    const defaultValueForLat = "23.8041";
    const defaultValueForLon = "90.4152";
    if (propertyValues?.located) {
      const location = {
        lat: propertyValues.located.lat || defaultValueForLat,
        lon: propertyValues.located.lon || defaultValueForLon,
      };
      setSelectPosition(location);
    } else {
      const location = {
        lat: defaultValueForLat,
        lon: defaultValueForLon,
      };
      setSelectPosition(location);
    }
  }, [propertyValues?.located, loading]);

  // date
  const joinedDate = new Date(propertyValues?.userId?.createdAt);

  const year = joinedDate.getFullYear();
  const month = joinedDate.getMonth();

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <AppLayout>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {loading ? (
            <CustomHashLoader />
          ) : (
            <>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  fontSize={"24px"}
                  color={"primary.main"}
                  fontWeight={"600"}
                >
                  {propertyValues?.title}
                </Typography>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography
                    variant="text"
                    fontSize={"16px"}
                    mt={"10px"}
                    color={"primary.main"}
                  >
                    {propertyValues?.located.display_name}
                  </Typography>

                  <Box>
                    <Button
                      onClick={() => setOpenShare(true)}
                      startIcon={<Share />}
                      variant="text"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Share
                    </Button>
                    <Dialog
                      onClose={() => setOpenShare(false)}
                      open={openShare}
                    >
                      <Button
                        onClick={() => setOpenShare(false)}
                        startIcon={<Cancel />}
                      ></Button>
                      <ShareThisPlace propertyValues={propertyValues} />
                    </Dialog>
                    <Button
                      startIcon={<FavoriteOutlined />}
                      variant="text"
                      sx={{ textTransform: "capitalize" }}
                    >
                      Save
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <ImageList
                  sx={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "20px",
                    "&:hover": { cursor: "pointer" },
                  }}
                  variant="quilted"
                  cols={4}
                  rowHeight={110}
                  onClick={handleImageLIst}
                >
                  {itemDataImages.slice(0, 5).map((item, index) => (
                    <ImageListItem
                      key={index}
                      cols={index === 0 ? 2 : 1}
                      rows={index === 0 ? 2 : 1}
                      className="image-list-item"
                    >
                      <img src={item.img} alt={item.title} loading="lazy" />
                    </ImageListItem>
                  ))}
                  <Box
                    position={"absolute"}
                    right={"14px"}
                    bottom={"14px"}
                    onClick={handleImageLIst}
                  >
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                    >
                      See all images
                    </Button>
                  </Box>
                </ImageList>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mb={"20px"}
                    >
                      <Box>
                        <Typography
                          mb={"10px"}
                          variant="h3"
                          fontSize={"22px"}
                          color={"primary.main"}
                          fontWeight={600}
                        >
                          {propertyValues?.typeOfPlaceId?.title} hosted by{" "}
                          {propertyValues?.userId?.name}
                        </Typography>
                        <Typography
                          variant="text"
                          fontSize={"15px"}
                          color={"primary.main"}
                        >
                          {`${propertyValues?.guests.guests} guests, ${propertyValues?.guests.bathrooms} bathrooms, ${propertyValues?.guests.bedrooms} bedrooms, ${propertyValues?.guests.beds} beds`}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          mt: 1,
                          px: 1.5,
                          typography: "caption",
                          borderRadius: 10,
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "center",
                          bgcolor: "primary.50",
                          border: "2px solid",
                          borderColor: "primary.100",
                          color:   sentimentScore["Positive"]>= "50%" ? "green": "red",
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        <InfoRounded sx={{ fontSize: 16 }} />
                        <small> reviewed:  </small>{" "} 
                        {sentimentScore["Positive"] ?
                        <span>   Positive {sentimentScore["Positive"]}</span>
                         : (<span>Negative {sentimentScore["Negative"]}</span>)
                        }
                      </Box>
                      <Link to={"#avater"}>
                        <Avatar
                          alt="Remy Sharp"
                          src={assets.images.avatar}
                          sx={{ width: 60, height: 60 }}
                        />
                      </Link>
                    </Box>
                    <Divider />
                    <Box display={"flex"} my={4} flexDirection={"row"}>
                      <Box mr={3}>
                        <Wifi color={"primary.main"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h3"
                          fontSize={"17px"}
                          color={"primary.main"}
                          fontWeight={"600"}
                        >
                          Fast wifi
                        </Typography>
                        <Typography
                          variant="text"
                          fontSize={"14px"} 
                          color={"primary.main"}
                        >
                          At 73 Mbps, you can take video calls and stream videos
                          for your whole group.
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} my={4} flexDirection={"row"}>
                      <Box mr={3}>
                        <DriveEta color={"primary.main"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h3"
                          fontSize={"17px"}
                          color={"primary.main"}
                          fontWeight={"600"}
                        >
                          Dive right in
                        </Typography>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          This is one of the few places in the area with a pool.
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} my={4} flexDirection={"row"}>
                      <Box mr={3}>
                        <LocationCity color={"primary.main"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h3"
                          fontSize={"17px"}
                          color={"primary.main"}
                          fontWeight={"600"}
                        >
                          Great location
                        </Typography>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          90% of recent guests gave the location a 5-star
                          rating.
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <Box sx={{ my: "40px" }}>
                      <Typography
                        variant="text"
                        fontSize={"14px"}
                        color={"primary.main"}
                      >
                        {propertyValues?.description}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ my: "40px" }}>
                      <Typography
                        variant="h6"
                        fontSize={"16px"}
                        fontWeight={"600"}
                        color={"primary.main"}
                        mb={3}
                      >
                        What this place offers
                      </Typography>
                      <Grid container spacing={2}>
                        {propertyValues?.amenitiesIds
                          .slice(0, 8)
                          .map((item) => (
                            <Grid item xs={12} sm={6} key={item._id}>
                              <Box display={"flex"} flexDirection={"row"}>
                                <Box mr={3}>
                                  <Icon icon={item.icon} fontSize={"22px"} />
                                </Box>
                                <Box>
                                  <Typography
                                    variant="text"
                                    fontSize={"14px"}
                                    color={"primary.main"}
                                  >
                                    {item.title}
                                  </Typography>
                                </Box>
                              </Box>
                            </Grid>
                          ))}
                        {propertyValues?.amenitiesIds.length > 8 && (
                          <Grid item xs={12}>
                            <Button
                              sx={{ mt: "20px", textTransform: "capitalize" }}
                              variant="outlined"
                              onClick={handleAmenitiseLIst}
                            >
                              Show all amenities
                            </Button>
                          </Grid>
                        )}
                      </Grid>
                    </Box>

                    <Divider />
                    <Grid container spacing={3}>
                      <Grid item xs={12} mt={4}>
                        <div id="avater"></div>
                        <Box display={"flex"} alignItems={"center"}>
                          <Avatar
                            alt="Remy Sharp"
                            src={assets.images.avatar}
                            sx={{ width: 60, height: 60, mr: 3 }}
                          />
                          <Box>
                            <Typography fontWeight={"bold"} fontSize={"20px"}>
                              Hosted by {propertyValues?.userId?.name}
                            </Typography>
                            <Typography variant="text" fontSize={"14px"}>
                              Joined in {`${monthNames[month]} ${year}`}
                            </Typography>
                          </Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                          <Star />
                          <Typography variant="text" m={2}>
                            4.5 Review
                          </Typography>
                          <VerifiedUser />
                          <Typography variant="text" m={2}>
                            Identity Verified
                          </Typography>
                        </Box>
                        <Box mt={1}>
                          <Typography variant="text" mt={1}>
                            Response time : within an hour
                          </Typography>
                          <br></br>
                          <Typography variant="text" mt={1}>
                            Last active : tow hour ago
                          </Typography>
                        </Box>
                        <Button
                          sx={{ my: 3, textTransform: "capitalize" }}
                          variant={"contained"}
                          size={"large"}
                        >
                          Contact Host
                        </Button>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 4 }} />
                    <Grid container spacing={3}>
                      <Grid item xs={12} sx={{ zIndex: 0 }}>
                        <Typography
                          variant="h6"
                          fontSize={"18px"}
                          fontWeight={"600"}
                        >
                          Where you’ll be
                        </Typography>
                        <Typography variant="text" mt={1} fontSize={"14px"}>
                          {propertyValues?.located.address?.city}{" "}
                          {propertyValues?.located.address?.state}{" "}
                          {propertyValues?.located.address?.country}
                        </Typography>
                        <Box mt={2} mb={3} height={"300px"}>
                          <Maps selectPosition={selectPosition} />
                        </Box>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 4 }} />

                    {/* Review section */}
                    <Grid container spacing={3}>
                      <ReviewSection propertyID={propertyId} />
                      <Divider sx={{ my: 4 }} />
                    </Grid>
                  </Grid>
                  {/* Review section end*/}

                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        display: {
                          position: "sticky",
                          top: "110px",
                        },
                      }}
                    >
                      <Reserve propertyValues={propertyValues} />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>

        {/* modal  */}
        <OpenImageList
          itemDataImages={itemDataImages}
          open={openImageList}
          onClose={() => setOpenImageList(false)}
        />
        <OpenAmenitiseList
          amenitiseItem={amenitiseItem}
          open={openAmenitiseList}
          onClose={() => setOpenAmenitiseList(false)}
        />
      </Container>
    </AppLayout>
  );
}
