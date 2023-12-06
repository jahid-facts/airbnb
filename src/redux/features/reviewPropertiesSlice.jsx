// //ReviewPropertiesSlice

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { postApi } from "../../config/configAxios";


// const review_url = process.env.REACT_APP_CREATE_REVIEW_ENDPOINT;
// console.log(review_url);





// Define the async thunk to fetch all properties for admin
export const saveReviews = createAsyncThunk(
  "reviews/storeReviews",
  async (review, { rejectWithValue }) => {
    try {
      console.log(review);
      const response = await postApi("/reviews", review);
      //updateReviewStatus(review)
      console.log(response)


      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }






  }
);






const initialState = {
  name: 'reviewProperties',
  propertyId: null,
  reviewMessage: '',
  rating: null,
};

const reviewPropertiesSlice = createSlice({
  name: 'reviewProperties',
  initialState,
  reducers: {
    setPropertyId: (state, action) => {
      state.propertyId = action.payload;
    },
    setReview: (state, action) => {
      state.reviewMessage = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    resetReviewProperties: () => ({
      propertyId: null,
      reviewMessage: '',
      rating: null,
    }),
  },
});

export const { setPropertyId, setReview, setRating, resetReviewProperties } = reviewPropertiesSlice.actions;
export const selectReviewProperties = (state) => state.reviewProperties;
export default reviewPropertiesSlice.reducer;






























// import { createSlice } from '@reduxjs/toolkit';
// import { createAction } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
// //   name: '',
//   propertyId: null,
//   reviewMessage: '',
//   rating: null,
// };

// const reviewPropertiesSlice = createSlice({
//   name: 'reviewProperties',
//   initialState,
//   reducers: {
//     setPropertyId: (state, action) => {
//       state.propertyId = action.payload;
//     },
//     setReview: (state, action) => {
//       state.reviewMessage = action.payload;
//     },
//     setRating: (state, action) => {
//       state.rating = action.payload;
//     },
//     // resetReviewProperties: () => {
//     // //   name: '',
//     //   propertyId: null,
//     //   reviewMessage: '',
//     //   rating: null,
//     // },
//   },
// });

// export const { setPropertyId, setReview, setRating } = reviewPropertiesSlice.actions;
// export const selectReviewProperties = (state) => state.reviewProperties;
// export default reviewPropertiesSlice.reducer;


// const review_url= process.env.REACT_APP_CREATE_REVIEW_ENDPOINT
// console.log(review_url);

// const addReviewAction = createAction('ADD_REVIEW')((review) => ({
//   payload: review,
// }));

// export const addReview = () => async (dispatch, getState) => {
//   const review = {
//     // name: getState().reviewProperties.name,
//     propertyId: getState().reviewProperties.propertyId,
//     reviewMessage: getState().reviewProperties.reviewMessage,
//     rating: getState().reviewProperties.rating,
//   };

//   try {
//     const response = await axios.post(review_url, review);
//     dispatch(addReviewAction(response.data)); //sending the propertyId to the database.
//   } catch (error) {
//     console.error('Error adding review:', error);
//   }
  
// };