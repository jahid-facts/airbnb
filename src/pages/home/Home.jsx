import React from "react";
import { Box, Container, Grid } from "@mui/material";

import images from "./Images";
import ReservationCard from "../../components/reservationCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {images
            .sort(() => Math.random() - 0.5)
            .map((card) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link to={'/reservation-details'} >
                <ReservationCard
                  image1={card.image1}
                  image2={card.image2}
                  image3={card.image3}
                  title={"Chaing Rai, Thailand"}
                  subtitle={"29 km to Lam Nam Kok National Park Aug 19 - 24"}
                  price={card.price}
                  review={"4.9"}
                />
                </Link>
              </Grid>
            ))}
        </Grid>
        <Box sx={{ display: { md: "none" } }}>
        </Box>
      </Container>
    </>
  );
}
