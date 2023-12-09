import { Box, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import moment from 'moment';
import { DatePicker } from 'antd';

const GlobalModalForProfile = ({ open, onClose, typeOfForm }) => {
  const personalInitialValues = {
      firstName: "",
      lastName: "",
      dateOfBirth:  moment(),
      phoneNumber: "",  
  };

const aboutMeInitialValues = {
    aboutMe: "",
  };

const incomeInitialValues = {
    add_income_source: "",
    officeName: "",
  };



const personalValidationSchema = Yup.object({
    firstName: Yup.string().required("firstName name is required"),
    lastName: Yup.string().required("lastName name is required"),
    dateOfBirth: Yup.date().required('Please select a date'),
    phoneNumber: Yup.string()
    .matches(/^\(?[1-9]\)?[-. ]?[2-9]\d{6,}$/, 'Please enter a valid phone number')
    .when('region', {
      is: 'US',
      then: Yup.string().required('Please enter a US phone number'),
    })
    .when('region', {
      is: 'BD',
      then: Yup.string().required('Please enter a Bangladeshi phone number'),
    })
    .when('region', {
      is: 'CA',
      then: Yup.string().matches(/^\(?[1-9]\)?[-. ]?[2-9]\d{6}$/, 'Please enter a valid Canadian phone number'),
    }),
  });
  





const aboutMeValidationSchema = Yup.object({
  aboutMe: Yup.string(), 
  // This field is optional, so we don't set a validation rule for it.
});

const addressHistoryInitialValues = {
  addresses: [], 
    addresses: [
      { street: "", city: "", state: "", zipCode: "" }, 
      // This is the first address object. You can add more objects to the array as needed. 
    ], 
      // ... Rest of the component code here ... // 
    };
      




```jsx
const GlobalModalForProfile = ({ open, onClose, section }) => {
  const initialValues = { ...personalInitialValues }; // Use the initial values for the "Personal details" section as the default values. If the user selects a different section, update the initial values accordingly. const validationSchema = Yup.object({ ...personalValidationSchema }); // Use the validation schema for the "Personal details" section as the default schema. If the user selects a different section, update the validation schema accordingly. // ... Rest of the component code here ... // }; export default GlobalModalForProfile; ```

  
  const initialValues = typeOfForm === "personal" ? personalInitialValues : incomeInitialValues; 

  const closeDrawer = () => {
    onClose();
  };
  
  const validationSchema = Yup.object({
    personal: Yup.object({
      legalName: Yup.string().required("Legal name is required"),
      email: Yup.string()
        .email("Email address is not valid")
        .required("Email address is required"),
      governmentID: Yup.string().required("Government ID is required"),
      spouseName: Yup.string(), // This field is optional, so we don't set a validation rule for it.
    }),
    income: Yup.object({
      add_income_source: Yup.string().required("Income source is required"),
      officeName: Yup.string().required("Office name is required"),
    }),
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  // const GlobalModalForProfile = ({ open, onClose, typeOfForm }) => {

  //   // Use the appropriate initial values based on the selected form type. 
  //   const validationSchema = typeOfForm === "personal" ? personalValidationSchema : incomeValidationSchema; 
  //   // Use the appropriate validation schema based on the selected form type. // ... Rest of the component code here ... // 
  // }; 
  // export default GlobalModalForProfile; 
  
  
  















  



  const handleChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'addresses') { 
      // If the name of the input is 'addresses', handle it differently to add or remove addresses.
      const addresses = [...formik.values.addresses];
       // Create a copy of the current addresses array using the values property of Formik.
      
      if (value === '') { // If the input is empty, remove the last address from the array using slice() and concat() methods.
        addresses.splice(-1); 
        Return;
       } else { 
         Return; 
         }
     } else {  setValues();
      }
     formik.setValues({ ...formik.values, [name]: value }); 
      setValues();
        }
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
  )
};


export default GlobalModalForProfile;


  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email("Email address is not valid")
  //     .required("Email address is required"),
  //   date: Yup.date().required('Please select a date'),
  //  governmentID: Yup.string().required("Government ID is required"),
  //  spouseName: Yup.string(), // This field is optional, so we don't set a validation rule for it.
  // });
