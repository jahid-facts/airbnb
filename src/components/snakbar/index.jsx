import {
  Alert,
  Snackbar,
} from "@mui/material";

import React from "react";

const ResponseAlert = (baropen, message) => {
  const [open, setOpen] = React.useState(false);
  setOpen(baropen);

  console.log(message)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        //message={message}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ResponseAlert;
