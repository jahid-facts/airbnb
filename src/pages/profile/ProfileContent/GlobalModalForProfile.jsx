import { Box, Modal, Grid, Typography, Paper } from "@mui/material";
import Fade from "@mui/material/Fade";
// import React, { useState } from "react";
// import { DatePicker } from "antd";
import PersonalInfoForm from "../../../components/forms/personal";
import IncomeForm from "../../../components/forms/income";
import AddressHistoryForm from "../../../components/forms/AddressHistory";
import EmergencyForm from "../../../components/forms/EmergencyForm";
import AboutMeForm from "../../../components/forms/AboutMe";
import "../ProfilePage.css";
import TenantCheck from "../../../components/forms/tenantCheck";

const GlobalModalForProfile = ({ open, onClose, typeOfForm }) => {
  // console.log(typeOfForm);
  const closeDrawer = () => {
    onClose();
  };

  const handleModal = () => {
    switch (typeOfForm) {
      case "Personal details":
        return <PersonalInfoForm close={onClose} />;
      case "About me":
        return <AboutMeForm close={onClose} />;
      case "Income":
        return <IncomeForm close={onClose} />;
      case "Address history":
        return <AddressHistoryForm close={onClose} />;
      case "Tenant check (recommended)":
        return <TenantCheck close={onClose} />;
      default:
        return <EmergencyForm close={onClose} />;
    }
  };

  return (
    <>
      {/* GlobalModalForProfile */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
      >
        <Fade in={open}>
          {/* marginBlock:"5rem", marginInline:"5rem" */}
          <Paper sx={{ width:"62vw",marginInline:"auto" }}>  
            {/* Personal Information for renter profile */}
            <div className="body" style={{ padding:"3.5rem", width:"60vw", marginInline:"auto"}}>
              <Grid
                item
                xs={12}
                justifyContent={"center"}
                justifyItems={"center"}
              >
                {handleModal()}
              </Grid>
            </div>
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
                {/* <CloseIcon sx={{ marginLeft: "5px" }} /> */}
                <Typography variant="text"> Close </Typography>
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};
export default GlobalModalForProfile;

// <Modal
// // anchor="top"
// open={open}
// onClose={onClose}
// style={{
//  textAlign: "center" }}
// //className="style"
// >

// {/* Personal Information for renter profile */}
// <div  className="body">
//   <Grid item xs={12}
//   justifyContent={"center"}
//   justifyItems={"center"}>
//     {handleModal()}
//   </Grid>

// </div>

// {/* Close Button */}
// <Box
//   position={"fixed"}
//   bottom={0}
//   left={0}
//   right={0}
//   display={"flex"}
//   justifyContent={"center"}
// >
//   <Box
//     onClick={closeDrawer}
//     sx={{
//       display: "flex",
//       alignItems: "center",
//       width: "fit-content",
//       px: "20px",
//       py: "8px",
//       m: "15px",
//       cursor: "pointer",
//       borderRadius: "10px",
//       bgcolor: "secondary.main",
//       color: "primary.contrastText",
//     }}
//   >
//     {/* <CloseIcon sx={{ marginLeft: "5px" }} /> */}
//     <Typography variant="text"> Close </Typography>
//   </Box>
// </Box>
// </Modal>

// const validationSchema = Yup.object({
//   personal: Yup.object({
//     legalName: Yup.string().required("Legal name is required"),
//     email: Yup.string()
//       .email("Email address is not valid")
//       .required("Email address is required"),
//     governmentID: Yup.string().required("Government ID is required"),
//     spouseName: Yup.string(), // This field is optional, so we don't set a validation rule for it.
//   }),
//   income: Yup.object({
//     add_income_source: Yup.string().required("Income source is required"),
//     officeName: Yup.string().required("Office name is required"),
//   }),
// });

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Email address is not valid")
//     .required("Email address is required"),
//   date: Yup.date().required('Please select a date'),
//  governmentID: Yup.string().required("Government ID is required"),
//  spouseName: Yup.string(), // This field is optional, so we don't set a validation rule for it.
// });

//   if (name === 'addresses') {
//     // If the name of the input is 'addresses', handle it differently to add or remove addresses.
//     const addresses = [...formik.values.addresses];
//      // Create a copy of the current addresses array using the values property of Formik.

//     if (value === '') { // If the input is empty, remove the last address from the array using slice() and concat() methods.
//       addresses.splice(-1);
//       Return;
//      } else {
//        Return;
//        }
//    } else {  setValues();
//     }
//    formik.setValues({ ...formik.values, [name]: value });
//     setValues();
//       }
// };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

// const handleModal = () => {
//   switch (typeOfForm) {
//     case "personal":
//       return <PersonalInfoForm />;
//     case "aboutMe":
//       return <PersonalInfoForm />;
//     case "income":
//       return <IncomeInfoForm />;
//     case "addressHistory":
//       return <AddressHistoryForm />;
//     default:
//       return <PersonalInfoForm />;
//   }
// };

// const handleModal = () => {
//   if (typeOfForm === "personal") {
//     return <PersonalInfoForm />;
//   } else if (typeOfForm === "aboutMe") {
//     return <AboutMeForm />; // This line is redundant, since it's the same component as the "personal" case. You can remove it.
//   } else if (typeOfForm === "income") {
//     return <IncomeInfoForm />;
//   } else if (typeOfForm === "addressHistory") {
//     return <AddressHistoryForm />;
//   } else {
//     return ; // This is the default case, and should be used when an invalid `typeOfForm` value is passed.
//   }
// };

// const personalInitialValues = {
//   firstName: "",
//   lastName: "",
//   dateOfBirth: moment(),
//   phoneNumber: "",
// };

// const aboutMeInitialValues = {
//   aboutMe: "",
// };

// const incomeInitialValues = {
//   add_income_source: "",
//   officeName: "",
// };

// const addressHistoryInitialValues = {
//   addresses: [],
//   addresses: [
//     { street: "", city: "", state: "", zipCode: "" },
//     // This is the first address object. You can add more objects to the array as needed.
//   ],
//   // ... Rest of the component code here ... //
// };

// const personalValidationSchema = Yup.object({
//   firstName: Yup.string().required("firstName name is required"),
//   lastName: Yup.string().required("lastName name is required"),
//   dateOfBirth: Yup.date().required("Please select a date"),
//   phoneNumber: Yup.string()
//     .matches(
//       /^\(?[1-9]\)?[-. ]?[2-9]\d{6,}$/,
//       "Please enter a valid phone number"
//     )
//     .when("region", {
//       is: "US",
//       then: Yup.string().required("Please enter a US phone number"),
//     })
//     .when("region", {
//       is: "BD",
//       then: Yup.string().required("Please enter a Bangladeshi phone number"),
//     })
//     .when("region", {
//       is: "CA",
//       then: Yup.string().matches(
//         /^\(?[1-9]\)?[-. ]?[2-9]\d{6}$/,
//         "Please enter a valid Canadian phone number"
//       ),
//     }),
// });

// const aboutMeValidationSchema = Yup.object({
//   aboutMe: Yup.string(),
//   // This field is optional, so we don't set a validation rule for it.
// });

// const addressSchema = Yup.object({
//   addresses: Yup.array().of(
//     Yup.object({
//       street: Yup.string().required("Street is required"),
//       city: Yup.string().required("City is required"),
//       state: Yup.string().required("State is required"),
//       zipCode: Yup.string().required("Zip Code is required"),
//     })
//   ),
// });

// const initialValues =
//   typeOfForm === "personal" ? personalInitialValues : incomeInitialValues;

// const GlobalModalForProfile = ({ open, onClose, typeOfForm }) => {

//   // Use the appropriate initial values based on the selected form type.
//   const validationSchema = typeOfForm === "personal" ? personalValidationSchema : incomeValidationSchema;
//   // Use the appropriate validation schema based on the selected form type. // ... Rest of the component code here ... //
// };
// export default GlobalModalForProfile;

// const handleChange = (event) => {
//   const { name, value } = event.target;

//   ```jsx
// const GlobalModalForProfile = ({ open, onClose, section }) => {
//   const initialValues = { ...personalInitialValues }; // Use the initial values for the "Personal details" section as the default values. If the user selects a different section, update the initial values accordingly. const validationSchema = Yup.object({ ...personalValidationSchema }); // Use the validation schema for the "Personal details" section as the default schema. If the user selects a different section, update the validation schema accordingly. // ... Rest of the component code here ... // }; export default GlobalModalForProfile;
//   ```
