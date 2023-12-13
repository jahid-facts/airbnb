import {
  Alert,
  Button,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";

import React from "react";

const ResponseAlert = (baropen, message) => {
  const [open, setOpen] = React.useState(false);

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
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={message}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ResponseAlert;
