import { Box, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const GlobalModalForProfile = ({ open, onClose, typeOfForm }) => {
  const closeDrawer = () => {
    onClose();
  };

  const initialValues = {
    legalName: "",
    email: "",
    phone: "",
    governmentID: "",
    addresses: [],
  };

  const validationSchema = Yup.object({
    legalName: Yup.string().required("Legal name is required"),
    email: Yup.string()
      .email("Email address is not valid")
      .required("Email address is required"),
    phone: Yup.string().required("Phone number is required"),
    governmentID: Yup.string().required("Government ID is required"),
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'addresses') { // If the name of the input is 'addresses', handle it differently to add or remove addresses.
      const addresses = [...formik.values.addresses]; // Create a copy of the current addresses array using the values property of Formik.
      
      if (value === '') { // If the input is empty, remove the last address from the array using slice() and concat() methods.
        addresses.splice(-1); // Remove the last element from the array using slice() method with a negative index to start counting from the end of the array. Then concatenate it back to the original array using concat() method to update the values property of Formik with the updated addresses array. Return; // Exit early to avoid updating other fields like legalName or email that are not related to addresses at all for better efficiency and less code duplication compared to updating them separately in two different functions like before. } else { // If the input is not empty, add it to the array using spread syntax and concat() method to update the values property of Formik with the updated addresses array. Return; // Exit early to avoid updating other fields like legalName or email that are not related to addresses at all for better efficiency and less code duplication compared to updating them separately in two different functions like before. }
     } else { // If the name of the input is not 'addresses', handle it normally to update other fields like legalName, email, etc. Using setValues() method for better efficiency and less code duplication compared to updating them separately in two different functions like before. }
     formik.setValues({ ...formik.values, [name]: value }); // Update only the specific field at index in the addresses array when its input changes using setValues() method for better efficiency and less code duplication compared to updating them separately in two different functions like before. }
  };
};



//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

  const handleSubmit = () => {};
  return (
    <div>
      GlobalModalForProfile
      <Drawer anchor="bottom" open={open} onClose={onClose}>
        <Grid container spacing={2} m={10}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                boxShadow: 1,
                p: 2,
                m: 1,
                borderRadius: 2,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Legal name"
                    label="Legal name"
                    variant="standard"
                    fullWidth
                    value={formData.legalName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Email address"
                    label="Email address"
                    type="email"
                    variant="standard"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Phone numbers"
                    label="Phone numbers"
                    variant="standard"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Government ID"
                    label="Government ID"
                    variant="standard"
                    fullWidth
                    value={formData.governmentID}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Address"
                    label="Address"
                    variant="standard"
                    fullWidth
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Emergency contact"
                    label="Emergency contact"
                    variant="standard"
                    fullWidth
                    value={formData.emergencyContact}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>

        {/* Close Button */}
        <Box
          position={"fixed"}
          bottom={0}
          left={0}
          right={0}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            onClick={closeDrawer}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              px: "20px",
              py: "8px",
              m: "15px",
              cursor: "pointer",
              borderRadius: "10px",
              bgcolor: "secondary.main",
              color: "primary.contrastText",
            }}
          >
            <CloseIcon sx={{ marginLeft: "5px" }} />
            <Typography variant="text"> Close </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default GlobalModalForProfile;
