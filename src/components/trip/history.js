import { Box, Grid } from '@mui/material';
import axios from 'axios';
import HistoryCard from './historyCard';
import React, { useState, useEffect } from 'react'


const SERVER_URI = process.env.REACT_APP_API_BASE_URL + "/renter/recent_booking/erwew";


function History() {

    const [booking, setBooking] = useState([]);

    useEffect(() => {
        async function fetchBookingData() {
            try {
                const response = await axios.get(SERVER_URI);
                setBooking(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchBookingData();
    }, []);

    console.log(booking)

    return (
        <div>
          {/* <Box>
            {booking.map((booking.recent, index) => (
              <Box key={index}>
                <p>{JSON.stringify(booking.recent)}</p>
              </Box>
            ))}
          </Box> */}

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                marginBottom={3}
                gap={3}
            >
                {booking.map((bookingItem) => (
                  <Grid item xs={3} key={bookingItem.renter_id}>
                    <HistoryCard booking={bookingItem} />
                  </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default History;