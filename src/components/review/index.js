import ReviewRating from "../rating";
import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";

import { useEffect, useState } from "react";
import { useAuthInfo } from "../../helpers/AuthCheck";

const ReviewForm = ({ propertyID, bookingID, setReviewStatus, close }) => {
  const [reviewMessage, setReviewMessage] = useState("");
  //const [reviewed, setReviewed] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [CommunicationRating, setCommunicationRating] = useState(null);
  const [RecommendRating, setRecommendRating] = useState(null);
  const [ServicesRating, setServicesRating] = useState(null);
  const [LocationRating, setLocationRating] = useState(null);

  const userInfo = useAuthInfo();
  const reviewedBy = userInfo._id;
  //console.log(reviewedBy);

  //const ratingType = ["Communication", "Recommend", "Services", "Location"];

  useEffect(() => {
    setPropertyId(propertyID);
    setBookingId(bookingID);
    //setReviewStatus(reviewStatus);
    //console.log(propertyId._id);
  }, [bookingID, propertyID, propertyId]);

  const handleSubmit = () => {
    //console.log(propertyId);
    const review = {
      propertyId: propertyId._id,
      reviewedBy,
      reviewMessage,
      CommunicationRating,
      RecommendRating,
      ServicesRating,
      LocationRating,
    };
    //console.log(bookingId);
    try {
      axios
        .post("/reviews", review)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error adding review:", error.response.data.error);
        });

      axios
        .post("/reviewStatusUpdate", { bookingId: bookingId })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error updating reviewStatus:", error);
        });
    } catch {
      console.log("Error updating reviewStatus:");
    } finally {
      close();
    }
  };

  return (
    <Box marginInline={"auto"} padding={1}>
      <Grid
        container
        marginBlock={2}
        alignItems={"center"}
        alignContent={"center"}
        justifyItems={"center"}
        justifyContent={"center"}
        marginInline={"auto"}
      >
        {/* {ratingType.map((rentalRating)=>(
      <Grid item xs={12} sm={6}>
      <ReviewRating ratingType={rentalRating}  setRating={setCommunicationRating}  />
    </Grid>
))} */}

        <Grid item xs={12} md={6}>
          <ReviewRating
            ratingType={"Communication"}
            setRating={setCommunicationRating}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReviewRating
            ratingType={"Recommend"}
            setRating={setRecommendRating}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReviewRating ratingType={"Services"} setRating={setServicesRating} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReviewRating ratingType={"Location"} setRating={setLocationRating} />
        </Grid>

        <Grid item xs={11}>
          <TextField
            label="how was your trip"
            multiline
            fullWidth
            rows={3}
            defaultValue="How was your trip"
            sx={{ display: "block", marginBlock: "5px" }}
            id="review"
            value={reviewMessage}
            onChange={(e) => setReviewMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} m={1}>
          <Button variant="contained" onClick={handleSubmit}>
            {" "}
            Feedback{" "}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewForm;

// const handleSubmit = () => {
//   // dispatch(setReview(message));
//   // dispatch(setPropertyId(propertyId));
//   // dispatch(setRating(rating));
//   // dispatch(addReview());
//   setProperty(propertyID);
//   console.log(property.propertyId)

//   const review = {
//     propertyId: property.propertyId,
//     reviewMessage: message,
//     rating: rating,
//   };
//   //console.log(review);
//   dispatch(saveReviews(review))
//   .unwrap()
//   .catch((error) => {
//     console.error(error);
//   });

//   // Reset the review properties
//   dispatch(resetReviewProperties());
//   // setMessage("");
//   // setRating(null);
//   // setPropertyId(null);

//   //console.log(propertyID._id, message, rating);
// };

// const ReviewForm = () => {
//   const dispatch = useDispatch();
//   const reviewProperties = useSelector(selectReviewProperties);
//   const { propertyId } = reviewProperties;

//   const [message, setMessage] = useState('');
//   const [rating, setRating] = useState(null);

//   const handleSubmit = () => {
//     dispatch(setReview(message));
//     dispatch(setPropertyId(propertyId));
//     dispatch(setRating(rating));

//     //dispatch(reviewPropertiesSlice.actions.resetReviewProperties());

//     setMessage('');
//     setRating(null);
//   };

//   return (
//     <Box
//       sx={{
//         '& > label': { display: 'block', marginBottom: '10px' },
//       }}
//     >
//       <label htmlFor="propertyId">Property ID:</label>

//       <label htmlFor="review">Review:</label>
//       <textarea id="review" value={message} onChange={(e) => setMessage(e.target.value)} />
//       <ReviewRating setRating={setRating} />
//       <button onClick={handleSubmit}>Submit</button>
//     </Box>
//   );
// };

// export default ReviewForm;

// ```

// In this updated example, we're importing the `addReview` and `setRating` actions from the `reviewPropertiesSlice`. We're also importing the `ReviewRating` component, which we'll create next.

// In the `handleSubmit` function, we're using the `setRating` action to reset the rating state to `null`. We're also calling the `resetReviewProperties` action and resetting the form input values, as before.

// In the `ReviewForm` component, we're passing the `value` state and a function that dispatches the `setRating` action to the `ReviewRating` component.

// Here's an updated version of the `ReviewRating` component that uses the `setRating` action:

// ```javascript
