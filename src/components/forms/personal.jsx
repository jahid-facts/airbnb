import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import * as Yup from "yup";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";
import ResponseAlert from "../snakbar";
import { toast } from "react-toastify";

const PersonalInfoForm = ({ close }) => {
  const userInfo = useAuthInfo();
  const userId = userInfo._id;
  //const url = `/personal-info/${userId}`;
  // const [close, setClose] = useState(false);

  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      // Make API call here
      const response = await axios.post(`/personal-info`, { userId, values });
      console.log(response);
      toast.success(response.statusText);

      // Handle successful response
    } catch (error) {
      console.error(error);
      message(error);
      // Handle error response
    } finally {
      // Reset form values
      actions.setSubmitting(false);
      actions.resetForm();
      close();
    }
  };

  const message = (message) => {
    return <ResponseAlert baropen={close} message={message} />;
  };

  return (
    <div>
      <div style={{ paddingBlock: "2rem" }}>
        <h1>Personal Information</h1>
      </div>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          phoneNumber: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          dateOfBirth: Yup.date()
            .required("Required")
            .test("age", "You must be at least 18 years old", function (value) {
              const today = new Date();
              const birthDate = new Date(value);
              const age = today.getFullYear() - birthDate.getFullYear();
              const month = today.getMonth() - birthDate.getMonth();
              if (
                month < 0 ||
                (month === 0 && today.getDate() < birthDate.getDate())
              ) {
                return age - 1;
              }
              return age;
            }),
          phoneNumber: Yup.string()
            .when("region", {
              is: "BD",
              then: Yup.string().matches(
                /^\+8801\d{9}$/,
                "Please enter a valid Canadian phone number"
              ),
            })
            .when("region", {
              is: "CA",
              then: Yup.string().matches(
                /^\(?[1-9]\)?[-. ]?[2-9]\d{6}$/,
                "Please enter a valid Canadian phone number"
              ),
            }),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={9} md={6} m={"auto"}>
                <Field name="firstName">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                </Field>
                <ErrorMessage name="firstName" component="div" />{" "}
              </Grid>
              <Grid item xs={12} sm={9} md={6} m={"auto"}>
                <Field name="lastName">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                </Field>
                <ErrorMessage name="lastName" component="div" />{" "}
              </Grid>
              <Grid item xs={12} sm={9} md={6} m={"auto"}>
                <Field name="dateOfBirth">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Date of Birth"
                      variant="outlined"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="dateOfBirth" component="div" />{" "}
              </Grid>
              <Grid item xs={12} sm={9} md={6} m={"auto"}>
                <Field name="phoneNumber">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Phone Number"
                      variant="outlined"
                    />
                  )}
                </Field>
                <ErrorMessage name="phoneNumber" component="div" />{" "}
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{
                    margin: "20px",
                    padding: "20px",
                    "&:hover": { backgroundColor: "lightgreen" },
                  }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfoForm;

// onSubmit={(values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 400);
// }}

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import React from 'react';
// import axios from 'axios';
// import * as Yup from "yup";
// import moment from "moment";

// // import { useMemo } from "react";
// // import { useTranslation } from "react-i18next";
// import { Button, Grid, TextField } from "@mui/material";

// const PersonalInfoForm = () => {
//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     phoneNumber: '',
//   };

//   const personalValidationSchema = Yup.object({
//     firstName: Yup.string().required("First name is required"),
//     lastName: Yup.string().required("Last name is required"),
//     dateOfBirth: Yup.date()
//       .required("Date of Birth is required")
//       .test("age", "You must be at least 18 years old", (value) => {
//         const age = moment().diff(moment(value), "years");
//         return age > 17;
//       }),
//     phoneNumber: Yup.string()
//       .matches(
//         /^\(?[1-9]\)?[-. ]?[2-9]\d{6,}$/,
//         "Please enter a valid phone number"
//       )
//       .when("region", {
//         is: "US",
//         then: Yup.string().required("Please enter a US phone number"),
//       })
//       .when("region", {
//         is: "BD",
//         then: Yup.string().required("Please enter a Bangladeshi phone number"),
//       })
//       .when("region", {
//         is: "CA",
//         then: Yup.string().matches(
//           /^\(?[1-9]\)?[-. ]?[2-9]\d{6}$/,
//           "Please enter a valid Canadian phone number"
//         ),
//       }),
//   });

//   const validate = (values) => {
//     const errors = personalValidationSchema.validateSync(values, {
//       abortEarly: false,
//     });
//     return errors;
//   };

//   const handleSubmit = async (values, actions) => {
//     console.log(values);
//     try {
//       // Make API call here
//       const response = await axios.post('/api/personal-info', values);
//       console.log(response);
//       // Handle successful response
//     } catch (error) {
//       console.error(error);
//       // Handle error response
//     } finally {
//       // Reset form values
//       actions.setSubmitting(false);
//       actions.resetForm();
//     }
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       //validationSchema={personalValidationSchema}
//       validate={validate}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting,  touched , errors,values}) => (
//         <Form>
//           <Grid container spacing={5}>
//             <Grid item xs={12} sm={6} md={4}>
//               <TextField type="text" name="firstName" label="First Name" />
//               {errors.firstName && touched.firstName ? (
//              <div>{errors.firstName}</div>
//            ) : null}
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <TextField type="text" name="lastName" label="Last Name" />
//               <ErrorMessage name="lastName" />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <TextField type="date" name="dateOfBirth"  />
//               <ErrorMessage name="dateOfBirth" />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//             <TextField type="tel" name="phoneNumber" label="Phone Number" />
//             <ErrorMessage name="phoneNumber" />
//           </Grid>
//             <Grid item xs={12}>
//               <Button type="submit"  variant="contained" color="primary">
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import React from 'react';
// import axios from 'axios';
// import * as Yup from "yup";
// import moment from "moment";

// // import { useMemo } from "react";
// // import { useTranslation } from "react-i18next";
// import { Button, Grid, TextField } from "@mui/material";

// const PersonalInfoForm = () => {

// //

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     dateOfBirth: moment(),
//     phoneNumber: "",
//   };

//   const personalValidationSchema = Yup.object({
//     firstName: Yup.string().required("firstName name is required"),
//     lastName: Yup.string().required("lastName name is required"),
//     dateOfBirth: Yup.date()
//       .required("Date of Birth is required")
//       .test("age", "You must be at least 18 years old", (value) => {
//         const age = moment().diff(moment(value), "years");
//       }),
//     phoneNumber: Yup.string()
//       .matches(
//         /^\(?[1-9]\)?[-. ]?[2-9]\d{6,}$/,
//         "Please enter a valid phone number"
//       )
//       .when("region", {
//         is: "US",
//         then: Yup.string().required("Please enter a US phone number"),
//       })
//       .when("region", {
//         is: "BD",
//         then: Yup.string().required("Please enter a Bangladeshi phone number"),
//       })
//       .when("region", {
//         is: "CA",
//         then: Yup.string().matches(
//           /^\(?[1-9]\)?[-. ]?[2-9]\d{6}$/,
//           "Please enter a valid Canadian phone number"
//         ),
//       }),
//   });

//   const handleSubmit = async (values, actions) => {

//     console.log(values);
//     try {
//       // Make API call here
//       const response = await axios.post('/api/personal-info', values);
//       console.log(response);
//       // Handle successful response
//     } catch (error) {
//       console.error(error);
//       // Handle error response
//     } finally {
//       // Reset form values
//       actions.setSubmitting(false);
//       actions.resetForm();
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         dateOfBirth: '',
//         phoneNumber: '',
//       }}
//       validate={personalValidationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting, isValid }) => (
//         <Form>
//           <Grid container spacing={5}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Field type="text" name="firstName" label="First Name" />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Field type="text" name="lastName" label="Last Name" />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Field type="date" name="dateOfBirth" label="Date of Birth" />
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Field type="tel" name="phoneNumber" label="Phone Number" />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" disabled={isSubmitting || !isValid} variant="contained" color="primary">
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default PersonalInfoForm;

//   const handleSubmit = (event,values, { setSubmitting }) => {
//     event.preventDefault(); // Prevent page reload

//     const formData = {}; // Create empty object

//     // Append form values to formData object
//     Object.entries(values).forEach(([key, value]) => {
//       formData[key] = value;
//     });

//     console.log(formData); // Log formData object to console
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={personalValidationSchema}
//         onSubmit={(values, actions) => handleSubmit(event, values, actions)}

//       >
//         {({ values, errors, touched, handleSubmit })  => (
//           <form>
//             <Grid container spacing={5}>
//               <Grid item xs={12} md={6} >
//                <label htmlFor="firstName">First Name:</label><br/>
//                 <TextField
//                   label="First Name"
//                   name="firstName"
//                   error={errors.firstName && touched.firstName}
//                   helperText={errors.firstName}
//                   margin="dense"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} md={6} >
//               <label htmlFor="lastName">Last Name:</label><br/>
//                 <TextField
//                   label="Last Name"
//                   name="lastName"
//                   error={errors.lastName && touched.lastName}
//                   helperText={errors.lastName}
//                   margin="dense"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//               {/* <label htmlFor="dateOfBirth">Date of Birth:</label><br/> */}
//                 <TextField
//                   type="date"
//                   //label="Date of Birth"
//                   name="dateOfBirth"
//                   error={errors.dateOfBirth && touched.dateOfBirth}
//                   helperText={errors.dateOfBirth}
//                   margin="dense"

//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//               <label htmlFor="phoneNumber">Phone Number:</label><br/>
//                 <TextField
//                   label="Phone Number"
//                   name="phoneNumber"
//                   error={errors.phoneNumber && touched.phoneNumber}
//                   helperText={errors.phoneNumber}
//                   margin="dense"

//                 />
//               </Grid>
//               <Grid item xs={12}>
//             <Button
//               style={{
//                 margin: "20px",
//                 padding: "20px",
//                 "&:hover": { backgroundColor: "green" },
//               }}
//               variant="outlined"
//               type="submit"

//             >
//               {" "}
//               Submit{" "}
//             </Button>

//           </Grid>

//             </Grid>
//           </form>

//         )}
//       </Formik>
//     </>
//   );
// };
// export default PersonalInfoForm;

// e.preventDefault();
// //console.log(values.firstName);
// // Send the personal information to your backend API or store it in local storage
// const formData = new FormData();
// const personalInfo = {
//   firstName: "values.firstName",
//   lastName: "values.lastName",
//   dateOfBirth: "values.dateOfBirth",
//   phoneNumber: "values.phoneNumber",
// };
// Object.entries(personalInfo).forEach(([key, value]) => {
//   formData.append(key, value);
// });
// //formData.append("PersonalInfo", personalInfo);
// // console.log(formData["PersonalInfo"])
// console.log(Object.fromEntries(formData));

// const validate = (values) => {
//   const errors = {};

//   // Validation rules for firstName
//   if (!values.firstName) {
//     errors.firstName = 'First name is required';
//   }

//   // Validation rules for lastName
//   if (!values.lastName) {
//     errors.lastName = 'Last name is required';
//   }

//   // Validation rules for dateOfBirth
//   if (!values.dateOfBirth) {
//     errors.dateOfBirth = 'Date of birth is required';
//   } else if (moment().diff(moment(values.dateOfBirth), 'years') < 18) {
//     errors.dateOfBirth = 'You must be at least 18 years old';
//   }

//   // // Validation rules for phoneNumber
//   // if (!values.phoneNumber) {
//   //   errors.phoneNumber = 'Phone number is required';
//   // } else if (!/^\(?[1-9]\)?[-. ]?[2-9]\d{6,}$/.test(values.phoneNumber)) {
//   //   errors.phoneNumber = 'Please enter a valid phone number';
//   // }

//   return errors;
// };
