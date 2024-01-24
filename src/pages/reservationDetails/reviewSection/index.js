import React from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  //Drawer,
  Button,
  //Container,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import OpenReviewList from "./ItemList";

function ReviewSection() {
  const { propertyId } = useParams();

  const [openReviewLists, setOpenReviewLists] = React.useState(false);

  const [reviewResponsedData, setreviewResponsedData] = React.useState([]);
  const [totalResults, setTotalResults] = React.useState([]);

  const [overAllAverage, setOverAllAverage] = React.useState(null);
  const [communicationAverage, setCommunicationAverage] = React.useState(null);
  const [recommendAverage, setRecommendAverage] = React.useState(null);
  const [servicesAverage, setServicesAverage] = React.useState(null);
  const [locationAverage, setLocationAverage] = React.useState(null);
  // const [reviewDate, setReviewDate] = React.useState("");
  // const [reviewUserName, setReviewUserName] = React.useState("");
  // const [reviewUserImage, setReviewUserImage] = React.useState("");

  function calculateAverage(array) {
    let sum = 0;
    const length = array.length;

    for (let i = 0; i < length; i++) {
      sum += array[i];
    }

    const average = sum / length;
    return average;
  }

  React.useEffect(() => {
    const fetchDataServer = async () => {
      try {
        // getting review response from mongodb
        const reviewResponse = await axios.get(
          `/getReviews?propertyId=${propertyId}&limit=${5}`
        );

        const responData = reviewResponse.data.reviws;
        //console.log(reviewResponse.data)
        //console.log(responData.reviws);
        setreviewResponsedData(responData);
        setTotalResults(reviewResponse.data.totalResults);

        // for (const Data of reviewResponsedData) {
        //   console.log(Data.reviewMessage);
        //   console.log(Data.CommunicationRating);
        //   console.log(Data.RecommendRating);
        //   console.log(Data.ServicesRating);
        //   console.log(Data.LocationRating);
        //   console.log(Data.overAllRating);
        //   console.log(Data.createdAt);
        // }

        const communicationRatings = reviewResponse.data.reviws.map(
          (data) => data.CommunicationRating
        );

        const recommendRatings = reviewResponse.data.reviws.map(
          (data) => data.RecommendRating
        );
        const servicesRatings = reviewResponse.data.reviws.map(
          (data) => data.ServicesRating
        );
        const locationRatings = reviewResponse.data.reviws.map(
          (data) => data.LocationRating
        );

        const overAllRating = reviewResponse.data.reviws.map(
          (data) => data.overAllRating
        );

        setCommunicationAverage(calculateAverage(communicationRatings));
        setRecommendAverage(calculateAverage(recommendRatings));
        setServicesAverage(calculateAverage(servicesRatings));
        setLocationAverage(calculateAverage(locationRatings));
        setOverAllAverage(calculateAverage(overAllRating));

        //console.log(communicationAverage, recommendAverage);
      } catch (error) {
        console.error("Internal server error:", error);

        // You can add error handling here, such as displaying an error message
        //setLoading(false); // Ensure to set loading to false even in case of an error
      }
    };

    fetchDataServer();
  }, [propertyId]);

  const dateFormatting = (reviewDate) => {
    try {
      const date = new Date(reviewDate);
      const formattedDate = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
        .formatToParts(date)
        .map((part) => part.value)
        .join(" ");
      // const formattedDate = date.toISOString().substring(0, 10);
      // "2023-12-25"
      //console.log(formattedDate);
      return formattedDate;
    } catch (error) {
      // Handle invalid date formats here (e.g., display a default format or an error message)
      console.error(error);
    }
  };

  const handleReviewLists = () => {
    setOpenReviewLists(!openReviewLists);
  };

  return (
    <>
      {/* Review section */}

      <Grid item xs={12}>
        <Typography variant="h6" fontSize={"18px"} fontWeight={"600"}>
          Reviews
        </Typography>
        <Typography
          variant="text"
          fontSize={"15px"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {totalResults} reviews for this property
          <Rating
            name="half-rating-read"
            value={overAllAverage}
            precision={0.5}
            readOnly
            sx={{ mx: 1 }}
          />
          {/* {parseFloat(overAllAverage.toFixed("0.02"))} */}
          {Number(overAllAverage).toFixed(2)}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          mt={2}
          mb={1}
          fontSize={"16px"}
          fontWeight={"600"}
        >
          Rating Breakdown
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
        <Typography
          variant="text"
          fontSize={"14px"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Communication
          <Rating name="read-only" value={communicationAverage} readOnly />
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
        <Typography
          variant="text"
          fontSize={"14px"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Recommend
          <Rating name="read-only" value={recommendAverage} readOnly />
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
        <Typography
          variant="text"
          fontSize={"14px"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Services
          <Rating name="read-only" value={servicesAverage} readOnly />
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
        <Typography
          variant="text"
          fontSize={"14px"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Location
          <Rating name="read-only" value={locationAverage} readOnly />
        </Typography>
      </Grid>

      {reviewResponsedData.slice(0, 3).map((review) => (
        <Grid item xs={12} my={1}>
          <Box display={"flex"} alignItems={"start"}>
            {/* src={review.reviewedBy.avatar.url} */}
            <Avatar
              src={review.reviewedBy.avatar}
              alt={review.reviewedBy.name}
              sx={{ width: 40, height: 40, mr: 3 }}
            />
            <Box>
              <Typography fontWeight={"bold"}>
                {review.reviewedBy.name}
              </Typography>
              <Box>
                <Typography
                  variant="text"
                  fontSize={"14px"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Rating
                    name={review.reviewedBy.name}
                    sx={{ fontSize: "18px" }}
                    value={review.overAllRating}
                    precision={0.5}
                    readOnly
                  />{" "}
                  {/* {review.overAllRating} */}
                  <Divider
                    sx={{ mx: 1 }}
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                  />{" "}
                  {dateFormatting(review.createdAt)}
                </Typography>
                <Box mt={1}>
                  <Typography variant="text" fontSize={"14px"}>
                    {review.reviewMessage}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}

      {reviewResponsedData.length > 4 && (
        <Grid item xs={12}>
          <Button
            sx={{ mt: "20px", textTransform: "capitalize" }}
            variant="outlined"
            onClick={handleReviewLists}
          >
            Show all reviews
          </Button>
        </Grid>
      )}

      {/* modal  */}
      <OpenReviewList
        //propertyId={propertyId}
        open={openReviewLists}
        onClose={() => setOpenReviewLists(false)}
      />
    </>
  );
}

export default ReviewSection;

// const handleReviewedUser = (reviewedBy) => {
//   axios
//     .get(`http://localhost:5050/api/user/${reviewedBy}`)
//     .then((response) => {
//       setReviewUserName(response.data.user.name);
//       setReviewUserImage(response.data.user.avatar);

//     })
//     .catch((error) => {
//       if (error.response) {
//         console.log("Server returned error:", error.response.data);
//       }
//     });
//   return reviewUserName;
// };
