import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Rating,
  Grid,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemListComponent = ({ open, onClose }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { propertyId } = useParams();
  //const [lastFetchedPropertyId, setLastFetchedPropertyId] = useState(null);

  const closeDrawer = () => {
    onClose();
  };

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `/getReviews?propertyId=${propertyId}&limit=${5}&offset=${items.length}`
      );
      // const response = await axios.get(
      //   `http://localhost:5050/api/getReviews?propertyId=${propertyId}&limit=${5}&offset=${items.length}`
      // );
      console.log(response.data);
      //console.log(response.data.reviews);
      //console.log(response.data.totalResults);

      
      // Set new items and update last fetched property ID and total results if necessary:
      if (response?.data?.reviws?.length > 0) {
        // If there are new reviews... Set new items:
        const newItems = [...items, ...response?.data?.reviws];
        setItems(newItems);
        // If there are still more reviews left to fetch... Set isDone flag to false:
        if (items?.length < response?.data?.totalResults) {
          setIsDone(false);
        } else {
          // If there are no more reviews left to fetch... Set isDone flag to true:
          setIsDone(true);
        }
      } else {
        // If there are no more reviews left to fetch... Set isDone flag to true:
        setIsDone(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching items:", error);
      setIsLoading(false);
    }
  };

  
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

  useEffect(() => {
    fetchItems();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!isLoading && !isDone) {
        fetchItems();
      }
    }
  };

  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={onClose}>
        <Grid container spacing={2} m={10}>
          {items?.map((review) => (
            <Grid item xs={12} md={6} my={1}>
              <Box display={"flex"} alignItems={"start"}>
                <Avatar
                  alt={review.reviewedBy.avatar}
                  sx={{ width: 40, height: 40, mr: 3 }}
                />
                <Box>
                  <Typography fontWeight={"bold"}>
                    {review?.reviewedBy.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="text"
                    fontSize={"14px"}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Rating
                      name={review?.reviewedBy.name}
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
          {isLoading && <div>Loading...</div>}
          {" "}
          {isDone && <div>Done</div>}
        </Grid>

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

export default ItemListComponent;




      //   const response = await fetch(
      //     `http://localhost:5050/api/getReviews?propertyId=${propertyId}`
      //   );
      //   const data = await response.json();

      //   //console.log(response.data.reviews);
      //   console.log(data.reviws);

      //   setItems((prevItems) => [...prevItems, ...data.reviws]);

      //   setIsLoading(false);
      //   setLastFetchedPropertyId(propertyId);

      //   if (data.length === 0) {
      //     setIsDone(true);
      //   }
      // }







// ```

// 2. In the above code, we use the `useEffect` hook to fetch items from the API when the component mounts. We also attach a scroll event listener to the window and call `fetchItems()` when the user reaches the bottom of the page.

// 3. The `fetchItems()` function makes the API call to `'/api/getItems'`, appends the returned items to the existing list, and sets the loading and done states accordingly.

// 4. In the component's JSX, we map over the `items` array to render each item. We conditionally show the loading icon (`<div>Loading...</div>`) when `isLoading` is true, and display the "Done" message (`<div>Done</div>`) when `isDone` is true.

// Remember to replace `/api/getItems` with the actual URL of your API endpoint.

// I hope this helps! Let me know if you have any further questions.
