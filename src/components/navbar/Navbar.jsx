import React from "react";
import {
  AppBar,
  Badge,
  Button,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import {
  FavoriteBorder,
} from "@mui/icons-material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Category from "../category/Category";
import assets from "../../assets";
import { useLocation } from "react-router-dom";
import SearchFilter from "../searchFilter";

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Avater } from "../avater";
import SearchMobile from "../searchFilter/SearchMobile";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingTop: "15px",
  paddingBottom: "15px",
  borderBottom: "1px solid #f2f2f2",
});


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function Navbar(props) {

  const location = useLocation();

  let showCategory;
  let showSearchFilter;
  let showSearchMobile;

  if (location.pathname === "/") {
    showCategory = (
      <>
        <Category />
      </>
    );
    showSearchFilter = (
      <>
        <SearchFilter />
      </>
    );
    showSearchMobile = (
      <>
        <SearchMobile />
      </>
    );
  }


  return (
    <Container maxWidth="xl">
    <CssBaseline /> 
      <ElevationScroll {...props}>
      <AppBar
        sx={{ 
          backgroundColor: "white",
        }}
      >
        <StyledToolbar>
          <Link to="/">
            <Box sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}>
              <img
                src={assets.images.logo}
                alt="Logo"
                style={{
                  height: "40px",
                  cursor: "pointer",
                  border: "1px solid #f3f3f3",
                }}
              />
            </Box>
          </Link>

          {/* // showSearchFilter */}
          <Box sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}>
            {showSearchFilter} 
          </Box>
          <Box sx={{
                width:'100%',
                display: {
                  // xs: "block",
                  md: "none",
                },
              }}>
            {showSearchMobile} 
          </Box>
          
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              variant="subtitle2"
              fontSize={"14px"}
              mr={"30px"}
              fontWeight={"500"}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Link to={"/profile"}>
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    borderRadius: "20px",
                    py: "7px",
                    px: "20px",
                  }}
                >
                  Switch to hosting
                </Button>
              </Link>
            </Typography>
            <Badge
              max={9}
              badgeContent={10}
              color="primary"
              sx={{
                marginRight: "30px",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <FavoriteBorder color="action" />
            </Badge>
            
              <Avater />

          </Stack>

        </StyledToolbar>
        {showCategory}
      </AppBar>
      </ElevationScroll>
    </Container>
  );
}
