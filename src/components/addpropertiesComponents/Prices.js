import {
  Box,
  Container,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Prices = ({ setStepValue, values }) => {
  const [price, setPrice] = useState(values.prices || "");
  const [suggestedPrice, setSuggestedPrice] = useState(null);

  useEffect(() => {
    setStepValue("prices", price);
    fetchSuggestedPrice();
  }, [price]);


  const handlePrice = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPrice(value);
    }
  };



  // Function to fetch the suggested price from the API
  const fetchSuggestedPrice = () => {
    console.log(price);
    // Make an HTTP request to your Flask API
    axios
      .post("http://127.0.0.1:7050/price", {
        values, // Send the user-entered price to the API
        // Include other necessary data in the request body
      })
      .then((response) => {
        const suggestedPrice = response.data.suggested_price;
        setSuggestedPrice(suggestedPrice);
      })
      .catch((error) => {
        console.error("Error fetching suggested price: " + error);
      });
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "650px",
            },
            margin: "auto",
            marginBottom: "130px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={2}>
              <h1>Now, set your price</h1>
              <Typography variant="text" mt={2}>
                You can change it anytime.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                textAlign={"center"}
                mr={2}
                sx={{
                  border: "1px solid #c3c3c3",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <Input
                  type="number"
                  value={price}
                  onChange={handlePrice}
                  inputProps={{
                    min: 0,
                    maxLength: 10,
                    style: {
                      // width: "25px",
                      fontWeight: "bold",
                      fontSize: "80px",
                      padding: "30px",
                    },
                  }}
                  startAdornment={
                    <InputAdornment
                      sx={{
                        mr: "10px",
                        ml: "20px",
                      }}
                      position="start"
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "80px",
                        }}
                      >
                        $
                      </span>
                    </InputAdornment>
                  }
                  disableUnderline
                />
                {/* <Icon
                      icon="ep:edit"
                      style={{ fontSize: "40px" }}
                    /> */}
              </Box>
            </Grid>

            <Grid item xs={12}>
              {/* <button onClick={fetchSuggestedPrice}>
                Get Suggested Price
              </button> */}
              {suggestedPrice !== null && (
                <Typography variant="text" mt={2}>
                  Suggested Price: ${suggestedPrice}
                </Typography>
              )}
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Prices;
