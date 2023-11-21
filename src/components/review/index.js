import { useSelector,useDispatch } from 'react-redux';
import ReviewRating from '../rating';
import { Box } from '@mui/material';

import { useState } from 'react';
import  addReview , { selectReviewProperties, setPropertyId, setReview, resetReviewProperties, saveReviews } from '../../redux/features/reviewPropertiesSlice';

const ReviewForm = () => {
  const dispatch = useDispatch();
  const reviewProperties = useSelector(selectReviewProperties);
  const { propertyId } = reviewProperties;

  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(null);

  const handleSubmit = () => {
    // dispatch(setReview(message));
    // dispatch(setPropertyId(propertyId));
    // dispatch(setRating(rating));
    // dispatch(addReview());
    const review= {message:message , rating:rating}
    dispatch(saveReviews(review));
    // dispatch(resetReviewProperties());

    // setMessage('');
    // setRating(null);
    console.log(message , rating)
  };

  return (
    <Box
      sx={{
        '& > label': { display: 'block', marginBottom: '10px' },
      }}
    >
      <label htmlFor="propertyId">Property ID:</label>
    
      <label htmlFor="review">Review:</label>
      <textarea id="review" value={message} onChange={(e) => setMessage(e.target.value)} />
      <ReviewRating setRating={setRating} />
      <button onClick={handleSubmit}>Submit</button>
    </Box>
  );
};

export default ReviewForm;






















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