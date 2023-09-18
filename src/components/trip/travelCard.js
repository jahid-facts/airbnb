import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function recentTripCard(props) {

    const { booking } =props;
  return (
    <Card sx={{ maxWidth: 345 }}
    variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('./image/img2.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {booking.property_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>{booking.check_out_date}</p>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}