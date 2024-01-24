import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Divider,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";
import assets from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import googleLogo from "../../assets/images/google-logo.png";
import {
  clearMessage,
  loginUser,
  socialLoginSignup,
  verifyOTP,
} from "../../redux/features/AuthSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { error, success } = useSelector((state) => state.auth);
  const status = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const userSchema = Yup.object({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must have at least 6 characters"),
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,

    onSubmit: async (values, action) => {
      try {
        setSubmitting(true);
        dispatch(verifyOTP({ email: values.email, otp: "12345678" }));

        const loginData = { email: values.email, password: values.password };
        // Dispatch the loginUser action
        await dispatch(loginUser(loginData));
        setSubmitting(false);
      } catch {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearMessage());
    }
    if (success) {
      toast.success(success);
      navigate("/");
      dispatch(clearMessage());
    }
  }, [error, success, dispatch, navigate]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // google auth

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const accessToken = tokenResponse.access_token; // Extract the access token from the response

      axios
        .get("https://www.googleapis.com/userinfo/v2/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const loginData = response.data;
          dispatch(socialLoginSignup(loginData));
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    },
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={"#e7e7e7"}
    >
      <Box p={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100%"
            >
              <Box p={2}>
                <Link to={"/"}>
                  <img
                    src={assets.images.logo}
                    alt="Airbnb Logo"
                    style={{
                      height: "80px",
                      cursor: "pointer",
                      border: "1px solid #f3f3f3",
                    }}
                  />
                </Link>
                <Box p={1}></Box>
                <Box p={2}></Box>
                <p>Explore the ideas throughtout the world</p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              boxShadow={"0px 0px 18px 0px #6363633b"}
              p={4}
              textAlign={"center"}
              xs={{
                width: "100%",
              }}
              borderRadius={"20px"}
              bgcolor={"#fafcfe"}
            >
              <h3>Sign In</h3>
              <div style={{ textAlign: "left", width: "100%" }}>
                <h4>Welcome ! 👋🏻</h4>
                <p>Please sign-in to your account and start the adventure</p>
              </div>
              <h1>Sign In</h1>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box pt={5}>
                  <TextField
                    type="email"
                    label="Email"
                    fullWidth
                    name="email"
                    error={!!errors.email && touched.email}
                    autoComplete="current-email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p
                      style={{
                        color: "#d32f2f",
                        textAlign: "left",
                        margin: 0,
                        fontSize: "13px",
                        paddingTop: "10px",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </Box>
                <Box py={3}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      error={!!errors.password && touched.password}
                      name="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  {errors.password && touched.password && (
                    <p
                      style={{
                        color: "#d32f2f",
                        textAlign: "left",
                        margin: 0,
                        fontSize: "13px",
                        paddingTop: "10px",
                      }}
                    >
                      {errors.password}
                    </p>
                  )}
                </Box>
                {/* {error && <Alert severity="error">{error}</Alert>} */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "capitalize" }}
                  fullWidth
                >
                  {isSubmitting ? <BeatLoader color="#ff0000" /> : "Login"}
                </Button>

                <Box sx={{ position: "relative", my: 3, textAlign: "center" }}>
                  <Divider />
                  <p
                    style={{
                      position: "absolute",
                      top: "-13px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fafcfe",
                      padding: "0px 11px",
                      margin: 0,
                      borderRadius: "10px",
                      border: "1px solid #0000001f",
                    }}
                  >
                    or
                  </p>
                </Box>
              </form>
              <Box
                my={2}
                bgcolor={"white"}
                p={1}
                border={"1px solid #0000001f"}
                borderRadius={1}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => login()}
                sx={{ cursor: "pointer" }}
              >
                <img src={googleLogo} height={"18px"} alt="" />
                <Typography variant="text" sx={{ ml: 1 }} fontSize={"14px"}>
                  Sing in with google
                </Typography>
              </Box>
              <Box pt={2} display="flex" alignItems="center">
                Need an account ?
                <Link to="/register">
                  <Typography
                    style={{ textDecoration: "underline" }}
                    variant="body2"
                  >
                    Sign Up
                  </Typography>
                </Link>
              </Box>

                {/* {error && <Alert severity="error">{error}</Alert>} */}
                {/* <Box
                  pt={3}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link to="/register">
                    <Typography variant="body2">Sign Up</Typography>
                  </Link>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {isSubmitting ? <BeatLoader color="#ff0000" /> : "Login"}
                  </Button>
                </Box>
              </form> */}
            </Box>
          </Grid>
          </Grid>
      </Box>
    </Box>
  );
};

export default LoginScreen;
