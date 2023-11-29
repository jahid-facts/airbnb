import React from "react";
import { Close } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Avatar, Box, Drawer, Button, Container, Divider, Grid, Rating, Typography } from "@mui/material";
import { LazyLoadComponent } from "react-lazy-load-component"; // Import the LazyLoadComponent component from the library you're using (in this case, `react-lazy-load-component`)
import { useInView } from "react-intersection-observer"; // Import the `useInView` hook from `react-intersection-observer` to detect when an element enters the viewport.
import ReviewList from "./ReviewList"; // Import your existing review list component here.
import { reviewItem } from "./data"; // Import your review data here.
import OpenReviewList from "./OpenReviewList"; // Import your `OpenReviewList` component here.

const MyComponent = () => {
  const [open, setOpen] = React.useState(false); // ... Your component state here ...
  const handleOpen = () => { setOpen(true); }; // ... Your component logic here ...
  const handleClose = () => { setOpen(false); }; // ... Your component logic here ...
  return ( 
    <Box>
      <Button onClick={handleOpen}>Open Review List</Button>
      <Drawer anchor="bottom" open={open} onClose={handleClose}>
        <OpenReviewList open={open} onClose={handleClose} reviewItem={reviewItem} /> 
        </Drawer>
    </Box>
  );
};
export default MyComponent;
