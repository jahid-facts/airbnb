import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { KeyboardArrowDown, Star } from "@mui/icons-material";
import WhenDate from "../searchFilter/WhenDate";
import { Link } from "react-router-dom";

const Reserve = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

// Handle the selected range in your parent component
    const [selectedRange, setSelectedRange] = useState({
      startDate: null,
      endDate: null,
      key: 'selection',
    });

    const handleDateSelect = (newRange) => {
      setSelectedRange(newRange);
    };


  return (
    <div>
      <Box
        p={"20px"}
        m={"10px"}
        boxShadow={"0px 0px 18px 0px #6363633b"}
        borderRadius={"20px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4" fontSize={"18px"}>
            $21 night
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
              <Star fontSize={"13px"} /> 4.80 .
            </Typography>
            <Typography variant="h4" fontSize={"13px"}>
              50 reviews
            </Typography>
          </Box>
        </Box>
        <Box border={"1px solid #06283D"} borderRadius={"10px"} my={"25px"}>
          <div>
            <Grid
              container
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              sx={{ cursor:'pointer' }}
            >
              <Grid item xs={6} borderRight={"1px solid #06283D"} p={"15px"}>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Check in
                </Typography>
                <Typography variant="h4" fontSize={"14px"} mt={"5px"}> 
                {selectedRange.startDate?.toLocaleDateString() == null
                ? 'Add dates'
                : selectedRange.startDate?.toLocaleDateString('en-GB')} 
                </Typography>
              </Grid>
              <Grid item xs={6} p={"15px"}>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Check out
                </Typography>
                <Typography variant="h4" fontSize={"14px"} mt={"5px"}>
                {selectedRange.endDate?.toLocaleDateString() == null
                ? 'Add dates'
                : selectedRange.endDate?.toLocaleDateString('en-GB')}
                </Typography>
              </Grid>
            </Grid>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              sx={{ borderRadius:'20px', }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <Box p={'15px'} boxShadow={"0px 0px 18px 0px #6363633b"}> 
                        <WhenDate onSelect={handleDateSelect} />
                      </Box>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <Box borderTop={"1px solid #06283D"} p={"15px"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <Typography variant="h4" fontSize={"13px"} fontWeight={"700"}>
                  Guests
                </Typography>
                <Typography variant="h4" fontSize={"13px"} mt={"5px"}>
                  0 Pet
                </Typography>
              </Box>
              <IconButton sx={{ zIndex:-1, }} >
                <KeyboardArrowDown />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Link to={'/payment-details'}>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          size="large"
          sx={{ fontWeight: "600", zIndex:-1, }}
        >
          Reserve
        </Button>
        </Link>
        <Box textAlign={"center"} fontSize={"13px"} my={2}>
          <Typography variant="text">You won't be charged yet</Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"15px"}>
            $40 x 3 nights
          </Typography>
          <Typography variant="h4" fontSize={"15px"}>
            $ 120
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"15px"}>
            Airbnb service fee
          </Typography>
          <Typography variant="h4" fontSize={"15px"}>
            $ 17
          </Typography>
        </Box>
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          my={2}
        >
          <Typography variant="h4" fontSize={"16px"} fontWeight={"700"}>
            Total
          </Typography>
          <Typography variant="h4" fontSize={"15px"} fontWeight={"700"}>
            $ 137
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Reserve;
