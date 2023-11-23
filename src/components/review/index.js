import ReviewRating from "../rating";
import { Box, Button, Grid } from "@mui/material";
import axios from "axios";

import { useState } from "react";

const ReviewForm = ({ propertyID }) => {
  const [reviewMessage, setReviewMessage] = useState("");
  const [propertyId, setPropertyId] = useState(null);
  const [CommunicationRating, setCommunicationRating] = useState(null);
  const [RecommendRating, setRecommendRating] = useState(null);
  const [ServicesRating, setServicesRating] = useState(null);
  const [LocationRating, setLocationRating] = useState(null);
  

  const ratingType =["Communication",
    "Recommend",
    "Services",
    "Location",
    ]
  // const review_url = process.env.REACT_APP_CREATE_REVIEW_ENDPOINT;
  // console.log(review_url);

  // const handleSubmit = () => {
  //   try {
  //     console.log(review);
  //     const response = postApi("/reviews", review);
  //     //updateReviewStatus(review)
  //     console.log(response);

  //     return response.data;
  //   } catch (error) {
  //     return error.response.data.error;
  //   }

  //   try {
  //     const response = postApi("/reviewStatusUpdate", review.propertyId);
  //     return response;
  //   } catch (error) {
  //     console.error("Error adding review:", error);
  //   }
  // };

  const handleSubmit = () => {
    setPropertyId(propertyID);
    //console.log(propertyId);
    const review = {
      propertyId: propertyId._id,
      reviewMessage,
      CommunicationRating,
      RecommendRating,
      ServicesRating,
      LocationRating,
      
    };
    console.log(review);

    axios
      .post("/reviews", review)
      .then((response) => {
        console.log(response.data);

        axios
          .post("/reviewStatusUpdate", { propertyId: propertyId._id })
          .catch((error) => {
            console.error("Error updating reviewStatus:", error);
          });
      })
      .catch((error) => {
        console.error("Error adding review:", error.response.data.error);
      });
  };

  return (
    <Grid
      container
      columnSpacing={1}
      justifyContent="space-around"
      // alignItems="flex-start"
    >

{/* {ratingType.map((rentalRating)=>(
      <Grid item xs={12} sm={6}>
      <ReviewRating ratingType={rentalRating}  setRating={setCommunicationRating}  />
    </Grid>
))} */}

      <Grid item xs={12} sm={6}>
        <ReviewRating ratingType={"Communication"} setRating={setCommunicationRating}  />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ReviewRating ratingType={"Recommend"} setRating={setRecommendRating} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ReviewRating ratingType={"Services"} setRating={setServicesRating} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ReviewRating ratingType={"Location"} setRating={setLocationRating} />
      </Grid>

      <Grid Items>
        <textarea
          rows={3}
          sx={{ display: "block" }}
          id="review"
          value={reviewMessage}
          onChange={(e) => setReviewMessage(e.target.value)}
        />
      </Grid>
      <Grid Items>
        <Button variant="contained" onClick={handleSubmit}>
          {" "}
          Feedback{" "}
        </Button>
      </Grid>
    </Grid>
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
