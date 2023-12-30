
// ```

// In this updated example, we're importing the `addReview` and `setRating` actions from the `reviewPropertiesSlice`. We're also importing the `ReviewRating` component, which we'll create next.

// In the `handleSubmit` function, we're using the `setRating` action to reset the rating state to `null`. We're also calling the `resetReviewProperties` action and resetting the form input values, as before.

// In the `ReviewForm` component, we're passing the `value` state and a function that dispatches the `setRating` action to the `ReviewRating` component.

// Here's an updated version of the `ReviewRating` component that uses the `setRating` action:

// ```javascript



import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';

const ReviewRating = ({ ratingType, setRating }) => {
  const [newValue, setNewValue] = useState(null);

  const handleChange = (event, newValue) => {
    setNewValue(newValue);
    setRating(newValue);
  };

  return (
    <Box
      sx={{
        "& > legend": { m: 2 },
        display: "inline-block",
        marginInline: "8px",
        textAlign: "center",
        //  marginBottom:"10px"
      }}
    >
      <Typography component="legend" fontSize={"1.1rem"}>{ratingType}</Typography>

      <Rating
        size="large"
        name="simple-controlled"
        value={newValue}
        onChange={handleChange}
      />
    </Box>
  );
};

export default ReviewRating;
// ```

// In this updated example, we're using the `useState` hook to create a `newValue` state that's initially set to the `value` prop. We're also creating a `handleChange` function that updates both the `newValue` state and the `setRating` function passed as a prop.

// You'll need to adjust the import statements and action calls to match the structure of your Redux store.



// const handleReviewedUser = (reviewedBy) => {
//   // const response = axios.get(`http://localhost:5050/api/user/${reviewedBy}`)
//   // console.log(response)
//   console.log(reviewedBy)
//   axios.get(`http://localhost:5050/api/user/${reviewedBy}`)
//   .then(response => {
//     console.log(response.data.user.name);
//   })
//   .catch(error => {
//     if (error.response) {
//       // The server responded with a status code other than 2xx
//       console.log('Server returned error:', error.response.data);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an XMLHttpRequest instance (the request itself)
//       console.log('Request made but no response received');
//     } else {
//       // Something else went wrong - maybe setup/env issues
//       console.log('Error', error.message);
//     }
//     console.log(error.config);
//   });


// }