import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { FavoriteOutlined, Share, Wifi, DriveEta } from "@mui/icons-material";
import assets from "../../assets";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ReservationDetails() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            fontSize={"24px"}
            color={"primary.main"}
            fontWeight={"600"}
          >
            Casa Ricca Huahin
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              variant="text"
              fontSize={"16px"}
              mt={"10px"}
              color={"primary.main"}
            >
              Tambon Cha-am, Chang Wat Phetchaburi, Thailand
            </Typography>

            <Box>
              <Button
                startIcon={<Share />}
                variant="text"
                sx={{ textTransform: "capitalize" }}
              >
                Share
              </Button>
              <Button
                startIcon={<FavoriteOutlined />}
                variant="text"
                sx={{ textTransform: "capitalize" }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ImageList
            sx={{ width: "100%", borderRadius: "20px" }}
            variant="quilted"
            cols={4}
            rowHeight={141}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mb={"20px"}
              >
                <Box>
                  <Typography
                    mb={"10px"}
                    variant="h3"
                    fontSize={"22px"}
                    color={"primary.main"}
                    fontWeight={"600"}
                  >
                    Entire home hosted by Massupha
                  </Typography>
                  <Typography
                    variant="text"
                    fontSize={"15px"}
                    color={"primary.main"}
                  >
                    16+ guests . 5 bedrooms . 9 beds . 6 baths
                  </Typography>
                </Box>
                <Avatar
                  alt="Remy Sharp"
                  src={assets.images.avatar}
                  sx={{ width: 60, height: 60 }}
                />
              </Box>
              <Divider />
              <Box display={"flex"} my={4} flexDirection={"row"}>
                <Box mr={3}>
                  <Wifi color={"primary.main"} />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    fontSize={"17px"}
                    color={"primary.main"}
                    fontWeight={"600"}
                  >
                    Fast wifi
                  </Typography>
                  <Typography
                    variant="text"
                    fontSize={"14px"}
                    color={"primary.main"}
                  >
                    At 73 Mbps, you can take video calls and stream videos for
                    your whole group.
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} my={4} flexDirection={"row"}>
                <Box mr={3}>
                  <DriveEta color={"primary.main"} />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    fontSize={"17px"}
                    color={"primary.main"}
                    fontWeight={"600"}
                  >
                    Dive right in
                  </Typography>
                  <Typography
                    variant="text"
                    fontSize={"14px"}
                    color={"primary.main"}
                  >
                   This is one of the few places in the area with a pool.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
];
