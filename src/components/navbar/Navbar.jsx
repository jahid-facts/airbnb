import React from "react";
import {
  AppBar,
  Badge,
  Button,
  Box,
  Container,
  Stack,
  Toolbar,
  styled,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Category from "../category/Category";
import assets from "../../assets";
import { useLocation } from "react-router-dom";
import SearchFilter from "../searchFilter";

import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Avater } from "../avater";
import SearchMobile from "../searchFilter/SearchMobile";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "0px",
  paddingLeft: "0px",
  paddingTop: "15px",
  paddingBottom: "15px",
  borderBottom: "1px solid #f2f2f2",
});

function ElevationScroll(props) {
  const { children, window } = props;
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
  window: PropTypes.func,
};

export default function Navbar(props) {
  const location = useLocation();

  let showCategory;
  let showSearchFilter;
  let showSearchMobile;
  let containerWidth;

  if (location.pathname === "/") {
    showCategory = <Category />;
    showSearchFilter = <SearchFilter />;
    showSearchMobile = <SearchMobile />;
    containerWidth = "xl";
  } else {
    containerWidth = "lg";
  }

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "white",
            padding: "0px",
          }}
        >
          <Container maxWidth={containerWidth}>
            <StyledToolbar>
              <Link to="/">
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                >
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

              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                {showSearchFilter}
              </Box>
              <Box 
                sx={{
                  width: "100%",
                  display: {
                    md: "none",
                  },
                }}
              >
                {showSearchMobile}
              </Box>

              <Stack direction={"row"} alignItems={"center"}>
                <Link to={"/profile"}>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      borderRadius: "20px",
                      mr: "15px",
                      py: "7px",
                      px: "10px",
                      textTransform: "capitalize",
                      display: {
                        xs: "none",
                        md: "block",
                      },
                    }}
                  >
                    Switch to hosting
                  </Button>
                </Link>
                <Badge
                  max={9}
                  badgeContent={10}
                  color="secondary"
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
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
