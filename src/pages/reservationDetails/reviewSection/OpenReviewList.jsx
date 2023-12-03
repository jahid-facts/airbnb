In your `ItemListComponent`, you can implement the infinite scrolling feature using the `useEffect` hook and the `window.addEventListener` method to listen for the `scroll` event. Here's how you can modify your existing code:

1. Add a new state `lastFetchedPropertyId` to keep track of the last fetched property ID. This will help you fetch only the new reviews that haven't been fetched yet.

2. Modify the `fetchItems` function to fetch only the new reviews based on the `lastFetchedPropertyId`. You can use the `offset` parameter in your API request to fetch only the new reviews after a certain number of items have been fetched.

3. Inside the `useEffect` hook, call the `fetchItems` function when the component mounts. Also, add an event listener for the `scroll` event to check if the user has scrolled to the bottom of the page. If so, fetch more reviews using the `fetchItems` function.

Here's how your modified code might look like:

```jsx
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
  const [lastFetchedPropertyId, setLastFetchedPropertyId] = useState(null);
  
  const closeDrawer = () => {
    onClose();
  };
  
  const fetchItems = async () => {
    try {
      setIsLoading(true);
      
      // Update the API URL with the correct propertyId and offset based on last fetched property ID:
      const propertyId = "YOUR_PROPERTY_ID"; // replace this with your actual property ID from your API endpoint URL parameter or session storage or local storage or any other data source where you store it. // const lastFetchedPropertyId = "YOUR_LAST_FETCHED_PROPERTY_ID"; // replace this with your actual last fetched property ID from your previous API request or session storage or local storage or any other data source where you store it. // const offset = items.length; // fetch only new reviews after all previous reviews have been fetched. // const offset = items.length + 5; // fetch only new reviews after last five reviews have been fetched (assuming you want to fetch five reviews at a time). // const offset = items.length + Math.min(5, totalResults - items.length); // fetch only new reviews after last five reviews have been fetched but don't exceed totalResults (assuming you want to avoid overfetching). Const response = await axios.get(
 <your-api-endpoint-url>`, { params: { propertyId: propertyId, limit: 5, offset: lastFetchedPropertyId ? lastFetchedPropertyId : items.length } } ); console.log(response?.data?.reviews); console.log(response?.data?.totalPages); console.log(response?.data?.totalResults); //console.log(response?.data?.totalResults); // Set new items and update last fetched property ID if necessary: if (response?.data?.reviews?.length > 0) { const newItems = [...items, ...response?.data?.reviews]; setItems(newItems); setLastFetchedPropertyId(propertyId); } else { setIsDone(true); } setIsLoading(false); } catch (error) { console.error("Error fetching items:", error); setIsLoading(false); } };  
 <your-api-endpoint-url>` is replaced with your actual API endpoint URL that returns a list of reviews for a specific property based on its ID parameter (either from query string parameters or session storage or local storage or any other data source where you store it). The `limit` parameter is used to specify how many reviews should be returned per page (either hardcoded here or configurable via some other mechanism). The `offset` parameter is used to specify which page of results should be returned (either hardcoded here based on previous page's results or configurable via some other mechanism). The `lastFetchedPropertyId` state is used to keep track of which page of results has already been fetched and returned so that we don't fetch duplicate results again in subsequent requests (unless we want to for some reason). If we don't have a value for `lastFetchedPropertyId`, we assume that this is the first time we're fetching results and we start from the beginning (i.e., offset=0). If we do have a value for `lastFetchedPropertyId`, we assume that we've already fetched some results and we start from where we left off in our previous request (i.e., offset=lastFetchedPropertyId). This helps us avoid overfetching and improves performance by reducing network latency and server load. Here's how your modified component looks like:   ```jsx 
  
  
  import { Drawer, Box, Avatar, Typography, Rating, Grid, Divider } from "@mui/material"; 
  import React, { useEffect, useState } from "react"; 
  import CloseIcon from "@mui/icons-material/Close"; 
  import { useParams } from "react-router-dom"; import axios from "axios"; const ItemListComponent = ({ open, onClose }) => { const [items, setItems] = useState([]); const [isLoading, setIsLoading] = useState(false); const [isDone, setIsDone] = useState(false); 
  const [lastFetchedPropertyId, setLastFetchedPropertyId] = useState(null); const { propertyId } = useParams(); 
  const closeDrawer = () => { onClose(); }; 
  const fetchItems = async () => { try { setIsLoading(true);
     // Update the API URL with the correct propertyId and offset based on last fetched property ID: const response = await axios.get(`http://localhost:5050/api/getReviews?propertyId=${propertyId}&limit=5&offset=${lastFetchedPropertyId ? lastFetchedPropertyId : items.length}`, ); console.log(response?.data?.reviews); console.log(response?.data?.totalPages); console.log(response?.data?.totalResults); //console.log(response?.data?.totalResults); // Set new items and update last fetched property ID if necessary: if (response?.data?.reviews?.length > 0) { const newItems = [...items, ...response?.data?.reviews]; setItems(newItems); setLastFetchedPropertyId(propertyId); } else { setIsDone(true); } setIsLoading(false); } catch (error) { console.error("Error fetching items:", error); setIsLoading(false); } }; useEffect(() => { fetchItems(); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []); const handleScroll = () => { if (window.innerHeight + document.documentElement