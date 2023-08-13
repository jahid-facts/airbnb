import { Grid } from '@mui/material'
import axios from 'axios';
import TravelCard from './travelCard'
import React, { useState, useEffect } from 'react'


const SERVERURI = process.env.REACT_APP_API_BASE_URL + "/renter/ongoing_booking/erwew";
console.log(SERVERURI);




function travel() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [booking, setBooking] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        async function fetchBookingData() {
            try {
                const response = await axios.get(SERVERURI);
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
            {/* <TravelCard/>  */}


            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
                gap={3}
            >

                {booking.map((bookingItem) => (
                    <Grid item xs={3} key={bookingItem.renter_id}>
                        <TravelCard booking={bookingItem} />
                    </Grid>
                ))}
                {/* <Grid item xs={3}>
                    <TravelCard />
                </Grid>

                <Grid item xs={3}>
                    <TravelCard />
                </Grid> */}
            </Grid>
        </div>

    )
}

export default travel