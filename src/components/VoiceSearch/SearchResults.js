import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Box, Container, Grid } from "@mui/material";
import ReservationCard from "../../components/reservationCard";
import { AppLayout } from "../../layouts/appLayout";
import { getActiveProperties } from "../../redux/features/PropertySlice";
import { useDispatch, useSelector } from "react-redux";
import CustomHashLoader from "../../components/customLoader/CustomHashLoader";
import ReservationCardCopy from "../../components/reservationCard/index copy";
import { NoRecord } from "../../components/noRecord";
import images from '../../pages/home/Images';

function SearchResults() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const q = searchParams.get('q');
      if (!q) return;
      try {
        const response = await axios.get(`http://127.0.0.1:5050/search?searchText=${q}`);
        setSearchResults(response.data);
        setSearchTerm(q);
      } catch (error) {
        console.error(error);
        // You might want to handle the error in the UI here.
      }
    };
    fetchSearchResults();
  }, [searchTerm]); // searchTerm is added as a dependency


  // design 
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if properties is an empty array or "falsy"
    // if (!properties || (Array.isArray(properties) && properties.length === 0)) {
    setLoading(true);
    dispatch(getActiveProperties());
    setLoading(false);
    // }
  }, [dispatch, properties]);

  return (
    <div>
      <AppLayout>  
      <Container maxWidth="xl">
      <Grid container spacing={4}>
          {loading ? (
            <CustomHashLoader />
          ) : (
            <>
              {properties && properties.length > 0 ? (
                searchResults
                  .map((result, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <ReservationCard
                        propertyId={result._id}
                        image1={result.images[0]?.url}
                        image2={result.images[1]?.url}
                        image3={result.images[2]?.url}
                        title={`${result.located.address?.state}, ${result.located.address?.country}`}
                        subtitle={
                          result.title.length > 60
                            ? `${result.title.substring(0, 60)}...`
                            : result.title
                        }
                        price={result.price}
                        review={"4.9"}
                      />
                    </Grid>
                  ))
              ) : (
                <NoRecord />
              )}
            </>
          )}          
        </Grid>
        <Box sx={{ display: { md: "none" } }}></Box>
      </Container>
      </AppLayout>
    </div>
  );
}

export default SearchResults;
