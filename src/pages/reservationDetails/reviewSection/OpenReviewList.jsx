import CloseIcon from "@mui/icons-material/Close";
// import "./ReviewList.css";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Rating,
  Grid,
  Divider,
} from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component'; 
// import { useInfiniteScroll } from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Intl } from "react-intl";
// import { IntlDateTimeFormat } from "react-intl/dateformat";
import { useEffect, useState} from "react";

const OpenReviewList = ({ open, onClose }) => {
  const { propertyId } = useParams();
  const [reviewItem, setReviewItem] = useState([]);
  const [reviewUserName, setReviewUserName] = useState("");
  
  const [isFetching, setIsFetching] = InfiniteScroll.useInfiniteScroll(fetchMoreReviews);
    const closeDrawer = () => {
    onClose();
  };


  
  const fetchMoreReviews = async () => {
    setIsFetching(true);
    try {
      const response = await axios.get(
        `http://localhost:5050/api/getReviews?propertyId=${propertyId}&page=${reviewItem.length / 10 + 1}` // Fetch next page of reviews based on current length of reviewItem array and page size of 10
      );
      setReviewItem((prevState) => [...prevState, ...response.data.reviews]); // Add new reviews to existing array of reviews
      console.log(response.data.reviews); // Log new reviews to console for debugging purposes
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Handle 404 error here
        alert("Property not found");
      } else {
        // Handle other errors here
        console.error(error);
      }
      setIsFetching(false); // Stop loading more reviews if an error occurs during fetching process
    }
  };
  
  const handleReviewedUser = (reviewedBy) => {
    axios.get(`http://localhost:5050/api/user/${reviewedBy}`).then((response) => {
      setReviewUserName(response.data.user.name); // Set reviewer name state when user ID is passed in as argument to function
    }).catch((error) => { // Handle errors during user fetching process (e.g., server returns error or invalid user ID)
      if (error.response) { // Check if server returned an error response (status codes other than 2xx) and handle accordingly (e.g., display error message or default value for reviewer name)
        console.log("Server returned error:", error.response.data); // Log server error to console for debugging purposes (optional)
      } else { // Handle other types of errors (e.g., network errors or unexpected errors) and handle accordingly (e.g., display error message or default value for reviewer name)
        console.error(error); // Log error to console for debugging purposes (optional)
      } }); // End axios call for fetching user information by ID (async operation)
    return reviewUserName; // Return reviewer name state value for use in component rendering process (e.g., display in review list item)
  }; // End handleReviewedUser function definition (async operation) that fetches user information by ID and returns name state value for use in component rendering process (e.g., display in review list item)



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



  console.log(propertyId);
  //console.log(loadedReviews);
  console.log(reviewItem);
  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={onClose}>
        <Box
          className={"review-list"}
          sx={{
            width: { xs: "100%", md: "650px" },
            margin: "auto",
            marginBottom: "130px",
            mt: 3,
          }}
        >
          {" "}
          {reviewItem?.map((index, review) => (
            <Grid item xs={12} my={1} key={index}>
              <Box display={"flex"} alignItems={"start"}>
                <Avatar
                  alt={review?.name}
                  sx={{ width: 40, height: 40, mr: 3 }}
                />
                <Box>
                  <Typography fontWeight={"bold"}>
                    {" "}
                    {/* {handleReviewedUser(review?.reviewedBy)}{" "} */}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="text"
                    fontSize={"14px"}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Rating
                      name={review?.name}
                      sx={{ fontSize: "18px" }}
                      value={review?.overAllRating}
                      precision={0.5}
                      readOnly
                    />{" "}
                    {review?.overAllRating}{" "}
                    <Divider
                      sx={{ mx: 1 }}
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                    />{" "}
                    {dateFormatting(review?.createdAt)}
                  </Typography>
                  <Box mt={1}>
                    {" "}
                    <Typography variant="text" fontSize={"14px"}>
                      {review?.reviewMessage}{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
          {isFetching && "Fetching more reviews..."}
        </Box>{" "}




        {/* Close Button */}
        <Box
          position={"fixed"}
          bottom={0}
          left={0}
          right={0}
          display={"flex"}
          justifyContent={"center"}
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
            <CloseIcon sx={{ marginLeft: "5px" }} />
            <Typography variant="text"> Close </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
export default OpenReviewList;
















// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useInView } from "react-intersection-observer";
// // import "./ReviewList.css";
// import {
//   Drawer,
//   Box,
//   Avatar,
//   Typography,
//   Rating,
//   Grid,
//   Divider,
// } from "@mui/material";
// import useInfiniteScroll from "../../../components/infiniteScrol/infiniteScroll";

// import CloseIcon from "@mui/icons-material/Close";

// const OpenReviewList = ({ open, onClose }) => {
//   const { propertyId } = useParams();

//   const [reviewItem, setReviewItem] = useState([]);
//   //const [loadedReviews, setLoadedReviews] = useState([]);
//   const [reviewUserName, setReviewUserName] = useState("");
//   //const propertyId = // get property ID from somewhere

//   const closeDrawer = () => {
//     onClose();
//   };

//   const fetchMoreReviews = async () => {
//     setIsFetching(true);
//     try {
//       const response = await axios.get(
//         `http://localhost:5050/api/getReviews?propertyId=${propertyId}`
//       );
//       setReviewItem((prevState) => [...prevState, ...response.data.reviws]);
//       console.log(response.data.reviws);


//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         // Handle 404 error here
//         alert("Property not found");
//       } else {
//         // Handle other errors here
//         console.error(error);
//       }
//       setIsFetching(false);
//     }
//   };

//   const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreReviews);

//   const dateFormatting = (reviewDate) => {
//     try {
//       const date = new Date(reviewDate);
//       const formattedDate = new Intl.DateTimeFormat("en-GB", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       })
//         .formatToParts(date)
//         .map((part) => part.value)
//         .join(" ");
//       // const formattedDate = date.toISOString().substring(0, 10);
//       // "2023-12-25"
//       //console.log(formattedDate);
//       return formattedDate;
//     } catch (error) {
//       // Handle invalid date formats here (e.g., display a default format or an error message)
//       console.error(error);
//     }
//   };

//   const handleReviewedUser = (reviewedBy) => {
//     try {
//       axios
//         .get(`http://localhost:5050/api/user/${reviewedBy}`)
//         .then((response) => {
//           setReviewUserName(response.data.user.name);
//         })
//         .catch((error) => {
//           if (error.response) {
//             console.log("Server returned error:", error.response.data);
//           }
//         });
//       return reviewUserName;
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   useEffect(() => {
//     // handleIntersect();
//     fetchMoreReviews();
//     //handleReviewedUser();
//     console.log(reviewItem);
//   }, []);

//   console.log(propertyId);
//   //console.log(loadedReviews);
//   console.log(reviewItem);
//   return (
//     <div>
//       <Drawer anchor="bottom" open={open} onClose={onClose}>
//         <Box
//           className={"review-list"}
//           sx={{
//             width: { xs: "100%", md: "650px" },
//             margin: "auto",
//             marginBottom: "130px",
//             mt: 3,
//           }}
//         >
//           {" "}
//           {reviewItem?.map((index, review) => (
//             <Grid item xs={12} my={1} key={index}>
//               <Box display={"flex"} alignItems={"start"}>
//                 <Avatar
//                   alt={review?.name}
//                   sx={{ width: 40, height: 40, mr: 3 }}
//                 />
//                 <Box>
//                   <Typography fontWeight={"bold"}>
//                     {" "}
//                     {/* {handleReviewedUser(review?.reviewedBy)}{" "} */}
//                   </Typography>
//                 </Box>
//                 <Box>
//                   <Typography
//                     variant="text"
//                     fontSize={"14px"}
//                     sx={{ display: "flex", alignItems: "center" }}
//                   >
//                     <Rating
//                       name={review?.name}
//                       sx={{ fontSize: "18px" }}
//                       value={review?.overAllRating}
//                       precision={0.5}
//                       readOnly
//                     />{" "}
//                     {review?.overAllRating}{" "}
//                     <Divider
//                       sx={{ mx: 1 }}
//                       orientation="vertical"
//                       variant="fullWidth"
//                       flexItem
//                     />{" "}
//                     {dateFormatting(review?.createdAt)}
//                   </Typography>
//                   <Box mt={1}>
//                     {" "}
//                     <Typography variant="text" fontSize={"14px"}>
//                       {review?.reviewMessage}{" "}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//           {isFetching && "Fetching more reviews..."}
//         </Box>{" "}




//         {/* Close Button */}
//         <Box
//           position={"fixed"}
//           bottom={0}
//           left={0}
//           right={0}
//           display={"flex"}
//           justifyContent={"center"}
//         >
//           <Box
//             onClick={closeDrawer}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               width: "fit-content",
//               px: "20px",
//               py: "8px",
//               m: "15px",
//               cursor: "pointer",
//               borderRadius: "10px",
//               bgcolor: "secondary.main",
//               color: "primary.contrastText",
//             }}
//           >
//             <CloseIcon sx={{ marginLeft: "5px" }} />
//             <Typography variant="text"> Close </Typography>
//           </Box>
//         </Box>
//       </Drawer>
//     </div>
//   );
// };
// export default OpenReviewList;

// // import React, { useEffect, useState } from "react";
// import { Close } from "@mui/icons-material";
// import { Icon } from "@iconify/react";
// // import axios from "axios";
// import {
//   Avatar,
//   Box,
//   Drawer,
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Rating,
//   Typography,
// } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useInView } from "react-intersection-observer";
// import "./review-list.css";

// const OpenReviewList = ({ open, onClose, propertyId }) => {
//   const [reviewItem, setReviewItem] = useState([]);
//   const [loadedReviews, setLoadedReviews] = useState([]);
//   const [reviewUserName, setReviewUserName] = useState("");

//   const closeDrawer = () => {
//     onClose();
//   };

//   const dateFormatting = (reviewDate) => {
//     const date = new Date(reviewDate);
//     // December 25, 2023
//     const formattedDate = new Intl.DateTimeFormat("en-GB", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     })
//       .formatToParts(date)
//       .map((part) => part.value)
//       .join(" ");
//     // const formattedDate = date.toISOString().substring(0, 10);
//     // "2023-12-25"
//     //console.log(formattedDate);dateFormatting
//     return formattedDate;
//   };

//   const handleReviewedUser = (reviewedBy) => {
//     axios
//       .get(`http://localhost:5050/api/user/${reviewedBy}`)
//       .then((response) => {
//         setReviewUserName(response.data.user.name);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log("Server returned error:", error.response.data);
//         }
//       });
//     return reviewUserName;
//   };

//   const handleReview = async () => {
//     try {
//       // getting review response from mongodb
//       const reviewResponse = await axios.get(
//         `/getReviews?propertyId=${propertyId}`
//       );

//       const responData = reviewResponse.data.reviws;

//       console.log(responData);
//       setReviewItem(responData);

//       setLoadedReviews(reviewResponse.data); // fetch more reviews if user has reached bottom of page if (bottomOfPage && loadedReviews.length < reviewResponse.data.length) { fetchMoreReviews({ variables: { propertyId }, updateQuery: (prev, { fetchMoreResult }) => { return [...prev, ...fetchMoreResult?.reviews]; } }); } } catch (error) { console.log(error); } }; useEffect(() => { // handleIntersect(); handleReview(); // handleReviewedUser(); console.log(reviewItem); }, []); console.log(propertyId); console.log(loadedReviews); console.log(reviewItem);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     //handleIntersect();
//     handleReview();
//     // handleReviewedUser();

//     console.log(reviewItem);
//   }, []);

//   console.log(propertyId);
//   console.log(loadedReviews);
//   console.log(reviewItem);

//   const handleReview = async () => { try { // getting review response from mongodb const reviewResponse = await axios.get(`http://localhost:5050/api/reviews?propertyId=${propertyId}`);

//   return (
//     <div>
//       <Drawer anchor="bottom" open={open} onClose={closeDrawer}>
//         <div
//           style={{
//             height: "100vh",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Box
//             className={"review-list"}
//             sx={{
//               width: {
//                 xs: "100%",
//                 md: "650px",
//               },
//               margin: "auto",
//               marginBottom: "130px",
//               mt: 3,
//             }}
//           >

//             {reviewItem.map((review) => (
//               <Grid item xs={12} my={1}>
//                 <Box display={"flex"} alignItems={"start"}>
//                   <Avatar
//                     alt={review.name}
//                     sx={{ width: 40, height: 40, mr: 3 }}
//                   />
//                   <Box>
//                     <Typography fontWeight={"bold"}>
//                       {handleReviewedUser(review.reviewedBy)}
//                     </Typography>
//                     <Box>
//                       <Typography
//                         variant="text"
//                         fontSize={"14px"}
//                         sx={{ display: "flex", alignItems: "center" }}
//                       >
//                         <Rating
//                           name={review.name}
//                           sx={{ fontSize: "18px" }}
//                           value={review.overAllRating}
//                           precision={0.5}
//                           readOnly
//                         />{" "}
//                         {review.overAllRating}
//                         <Divider
//                           sx={{ mx: 1 }}
//                           orientation="vertical"
//                           variant="fullWidth"
//                           flexItem
//                         />{" "}
//                         {dateFormatting(review.createdAt)}
//                       </Typography>
//                       <Box mt={1}>
//                         <Typography variant="text" fontSize={"14px"}>
//                           {review.reviewMessage}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Box>

//           {/* Close Button */}
//           <Box
//             position={"fixed"}
//             bottom={0}
//             left={0}
//             right={0}
//             display={"flex"}
//             justifyContent={"center"}
//           >
//             <Box
//               onClick={closeDrawer}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 width: "fit-content",
//                 px: "20px",
//                 py: "8px",
//                 m: "15px",
//                 cursor: "pointer",
//                 borderRadius: "10px",
//                 bgcolor: "secondary.main",
//                 color: "primary.contrastText",
//               }}
//             >
//               <Close sx={{ marginLeft: "5px" }} />
//               <Typography variant="text"> Close </Typography>
//             </Box>
//           </Box>

//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default OpenReviewList;
