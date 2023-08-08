import * as React from 'react';
//import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function historyCard(props) {
    //const theme = useTheme();
const { booking } =props;
    return (
        <Card sx={{ display: 'flex' , maxWidth: 345 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {booking.renter_id}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    {booking.property_id}
                    </Typography>
<p>{booking.check_out_date}</p>

                </CardContent>

            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={require('./image/img1.jpeg')}
                alt="Live from space album cover" />
        </Card>

    );
}