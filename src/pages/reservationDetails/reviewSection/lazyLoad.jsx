import React, { useState } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";

const List2 = () => {
  const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map(listItem => <li className="list-group-item">List Item {listItem}</li>)}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List2;  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const handleIntersect = ([entry]) => {
  //   const target = document.getElementById("review-list"); // replace ".review-list"` selector with a valid DOM element selector that can be selected using the `document.getElementById()` method here

  //   // Check if target exists before creating IntersectionObserver instance
  //   if (target) {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (target && entry.isIntersecting) {
  //           const newReviews = reviewItem.slice(loadedReviews.length);
  //           setLoadedReviews((prevReviews) => [...prevReviews, ...newReviews]);
  //         }
  //       });
  //     });
  //     observer.observe(target);

  //     return () => {
  //       observer.unobserve(target);
  //     };
  //   }
  // };








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
