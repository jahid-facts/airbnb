import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Description = ({ setStepValue, values }) => {
  const [text, setText] = useState(values.description || "");

  const [sentiment, setSentiment] = useState(null);
  const [emotion, setEmotion] = useState(null);
  const REACT_APP_AI_URL = process.env.REACT_APP_AI_URL;

  const maxLength = 500;

  useEffect(() => {
    setStepValue("description", text);

    // Call the ML route when the description changes
    analyzeDescription();

  }, [text]);

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
      setStepValue("description", newText);
    }
  };

  const analyzeDescription = async () => {
    try {
      const response = await axios.post(REACT_APP_AI_URL+"/description", {
        // description: text,
        text
      });

      const { sentiment, emotion } = response.data;
      setSentiment(sentiment);
      setEmotion(emotion);
    } catch (error) {
      console.error("Error analyzing description:", error);
    }
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
              <h1>Create your description</h1>
              <Typography variant="text" mt={2}>
                Share what makes your place special.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
              <Box pt={3}>
                <TextField
                  id="textarea"
                  label="write your description"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={text}
                  onChange={handleChange}
                  inputProps={{ maxLength: maxLength }}
                  fullWidth
                />
                <Typography
                  variant="caption"
                  color={text.length > maxLength ? "error" : "textPrimary"}
                >
                  {text.length}/{maxLength} characters
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              {sentiment && (
                <Typography variant="text" mt={2}>
                  Sentiment: {sentiment}   
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sx={{
              boxShadow:2,
              border: "1px solid",
            }}>
              {emotion && (
                <Typography variant="text" mt={2}>
                  Emotion: {emotion}
                </Typography>
              )}
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Description;