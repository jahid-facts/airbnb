import React, { useEffect } from "react";
import { Close } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import axios from "axios";
import {
  Avatar,
  Box,
  Drawer,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import { LazyLoadComponent } from "react-lazy-load-component"; // Import the LazyLoadComponent component from the library you're using (in this case, `react-lazy-load-component`)
import { useInView } from "react-intersection-observer"; // Import the `useInView` hook from `react-intersection-observer` to detect when an element enters the viewport.
import ReviewList from "./ReviewList"; // Import your existing review list component here.
import { reviewItem } from "./data"; // Import your review data here.

const OpenReviewList = ({ open, onClose, reviewItem }) => {
    const [loadedReviews, setLoadedReviews] = useState([]); 
    const [reviewUserName, setReviewUserName] = React.useState("");

  const closeDrawer = () => {
    onClose();
  };

  const handleReviewedUser = (reviewedBy) => {
    axios
      .get(`http://localhost:5050/api/user/${reviewedBy}`)
      .then((response) => {
        setReviewUserName(response.data.user.name);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Server returned error:", error.response.data);
        }
      });
    return reviewUserName;
  };


  // Initialize an empty array for storing loaded reviews. 
  const [observer] = useState(new IntersectionObserver(handleIntersect)); 
  // Initialize an IntersectionObserver instance for lazy loading. 
  useEffect(() => { 
    
    const target = document.querySelector(".review-list"); 
    // Get the selector for your review list element here. 
    observer.observe(target); 
    return () => { 
      // Clean up the observer when the component unmounts. 
      observer.unobserve(target); }; 
    }, [observer]); 
      // Handle lazy loading events by adding new reviews to the loadedReviews array when they enter the viewport. 
      const handleIntersect = ([entry]) => { 
        if (entry.isIntersecting) {
           const newReviews = reviewItem.slice(loadedReviews.length); 
      setLoadedReviews(prevReviews => [...prevReviews, ...newReviews]); 
    } }


    console.log(loadedReviews);
      return ( 
        <></>
            // {loadedReviews.map((review) => (
            //         <Grid item xs={12} my={1}>
            //           <Box display={"flex"} alignItems={"start"}>
            //             <Avatar
            //               alt={review.name}
            //               sx={{ width: 40, height: 40, mr: 3 }}
            //             />
            //             <Box>
            //               <Typography fontWeight={"bold"}>
            //                 {handleReviewedUser(review.reviewedBy)}
            //               </Typography>
            //               <Box>
            //                 <Typography
            //                   variant="text"
            //                   fontSize={"14px"}
            //                   sx={{ display: "flex", alignItems: "center" }}
            //                 >
            //                   <Rating
            //                     name={review.name}
            //                     sx={{ fontSize: "18px" }}
            //                     value={review.overAllRating}
            //                     precision={0.5}
            //                     readOnly
            //                   />{" "}
            //                   {review.overAllRating}
            //                   <Divider
            //                     sx={{ mx: 1 }}
            //                     orientation="vertical"
            //                     variant="fullWidth"
            //                     flexItem
            //                   />{" "}
            //                   {dateFormatting(review.createdAt)}
            //                 </Typography>
            //                 <Box mt={1}>
            //                   <Typography variant="text" fontSize={"14px"}>
            //                     {review.reviewMessage}
            //                   </Typography>
            //                 </Box>
            //               </Box>
            //             </Box>
            //           </Box>
            //         </Grid>
            //       ))}
        );
            };
export default OpenReviewList;
















// function OpenReviewList({ open, onClose, reviewItem }) {
//   const [reviewUserName, setReviewUserName] = React.useState("");

//   const closeDrawer = () => {
//     onClose();
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
//           <>
//             <Box
//               sx={{
//                 width: {
//                   xs: "100%",
//                   md: "650px",
//                 },
//                 margin: "auto",
//                 marginBottom: "130px",
//                 mt: 3,
//               }}
//             >
//               <LazyLoadComponent height={500} threshold={0} debounce={50}>
//                 <Grid container spacing={2}>
//                   {reviewItem.map((review) => (
//                     <Grid item xs={12} my={1}>
//                       <Box display={"flex"} alignItems={"start"}>
//                         <Avatar
//                           alt={review.name}
//                           sx={{ width: 40, height: 40, mr: 3 }}
//                         />
//                         <Box>
//                           <Typography fontWeight={"bold"}>
//                             {handleReviewedUser(review.reviewedBy)}
//                           </Typography>
//                           <Box>
//                             <Typography
//                               variant="text"
//                               fontSize={"14px"}
//                               sx={{ display: "flex", alignItems: "center" }}
//                             >
//                               <Rating
//                                 name={review.name}
//                                 sx={{ fontSize: "18px" }}
//                                 value={review.overAllRating}
//                                 precision={0.5}
//                                 readOnly
//                               />{" "}
//                               {review.overAllRating}
//                               <Divider
//                                 sx={{ mx: 1 }}
//                                 orientation="vertical"
//                                 variant="fullWidth"
//                                 flexItem
//                               />{" "}
//                               {dateFormatting(review.createdAt)}
//                             </Typography>
//                             <Box mt={1}>
//                               <Typography variant="text" fontSize={"14px"}>
//                                 {review.reviewMessage}
//                               </Typography>
//                             </Box>
//                           </Box>
//                         </Box>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </LazyLoadComponent>
//             </Box>

//             {/* Close Button */}
//             <Box
//               position={"fixed"}
//               bottom={0}
//               left={0}
//               right={0}
//               display={"flex"}
//               justifyContent={"center"}
//             >
//               <Box
//                 onClick={closeDrawer}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   width: "fit-content",
//                   px: "20px",
//                   py: "8px",
//                   m: "15px",
//                   cursor: "pointer",
//                   borderRadius: "10px",
//                   bgcolor: "secondary.main",
//                   color: "primary.contrastText",
//                 }}
//               >
//                 <Close sx={{ marginLeft: "5px" }} />
//                 <Typography variant="text"> Close </Typography>
//               </Box>
//             </Box>
//           </>
//         </div>
//       </Drawer>
//     </div>
//   );
// }

// export default OpenReviewList;
