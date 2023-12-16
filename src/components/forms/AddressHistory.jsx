import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Grid, TextField } from "@mui/material";
// import { FormControl } from "@mui/material";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";

const AddressHistoryForm = ({ close }) => {
  const userInfo = useAuthInfo();
  const userId = userInfo._id;
  const initialValues = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    moveInDate: null,
  };
  const validationSchema = Yup.object({
    address1: Yup.string().required("Address 1 is required"),
    address2: Yup.string(), // optional field, no validation needed
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    moveInDate: Yup.date().required("Move-in Date is required"),
  });
  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      // Make API call here
      const response = await axios.post(`/address-info`, { userId, values }
      );
      console.log(response);
      //message(response);

      // Handle successful response
    } catch (error) {
      console.error(error);
      //message(error);
      // Handle error response
    } finally {
      // Reset form values
      actions.setSubmitting(false);
      actions.resetForm();
      close();
    }
  };
  return (
    <Formik initialValues={initialValues} 
    validationSchema={validationSchema}
    onSubmit={handleSubmit}>
      {({ isSubmitting,values, errors, touched }) => (
        <Form>
          <Grid container spacing={3} paddingX={15}>
            <Grid item xs={12} md={6}>
              <label htmlFor="address1">Present Address:</label>
              <br />
              <Field name="address1">
                {({ field }) => (
                  <TextField
                    {...field}
                    color="secondary"
                    label="Present Address"
                    name="address1"
                    id="address1"
                    error={errors.address1 && touched.address1}
                    helperText={errors.address1}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="firstName">Permanent Address:</label>
              <br />
              <Field name="address2">
                {({ field }) => (
                  <TextField
                    {...field}
                    color="secondary"
                    label="Permanent Address"
                    name="address2"
                    id="address2"
                    error={errors.address2 && touched.address2}
                    helperText={errors.address2}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="city">
                {({ field }) => (
                  <TextField
                    {...field}
                    color="secondary"
                    label="City"
                    id="city"
                    error={errors.city && touched.city}
                    helperText={errors.city}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="state">
                {({ field }) => (
                  <TextField
                    {...field}
                    color="secondary"
                    label="State"
                    id="state"
                    error={errors.state && touched.state}
                    helperText={errors.state}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="zipCode">
                {({ field }) => (
                  <TextField
                    {...field}
                    color="secondary"
                    label="Zip Code"
                    id="zipCode"
                    error={errors.zipCode && touched.zipCode}
                    helperText={errors.zipCode}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>

              <Field name="moveInDate">
                {({ field }) => (
                  <TextField
                    {...field}
                    color="secondary"
                    label="Move-in Date"
                    id="moveInDate"
                    type="date"
                    name="moveInDate"
                    error={errors?.moveInDate && touched?.moveInDate}
                    helperText={errors?.moveInDate}
                    InputLabelProps={{ shrink: true }}
                    //inputProps={{ step: 24 * 60 * 60 * 1000 }}
                    fullWidth
                  />
                )}
              </Field>
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
                  Save and Back
                </Button>
              </Grid>


          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AddressHistoryForm;

// import { Formik } from "formik";
// import * as Yup from "yup";
// import moment from "moment";
// import { TextField } from "@mui/material";

// const AddressHistoryForm = ({ values }) => {
//   const addressHistoryInitialValues = {
//     addresses: [],
//     // ... Rest of the component code here ... //
//   };

//   const addressSchema = Yup.object({
//     addresses: Yup.array().of(
//       Yup.object({
//         street: Yup.string().required("Street is required"),
//         city: Yup.string().required("City is required"),
//         state: Yup.string().required("State is required"),
//         zipCode: Yup.string().required("Zip Code is required"),
//         moveInDate: Yup.date().required("Move-in date is required"),
//         // Add this line to define a new field for move-in date
//       })
//     ),
//   });

//   return (
//     <Formik
//     initialValues={addressHistoryInitialValues}
//     validationSchema={addressSchema}>
//     {({ values, errors, touched }) => (
//       <form>
//         <div>
//           {values.addresses.map((address, index) => (
//             <div key={index}>
//               <TextField label="Street" name={`addresses[${index}].street`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />
//               <TextField label="City" name={`addresses[${index}].city`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />
//               <TextField label="State" name={`addresses[${index}].state`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />
//               <TextField label="Zip Code" name={`addresses[${index}].zipCode`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />
//               <TextField label="Move-in Date" type="date" name={`addresses[${index}].moveInDate`} error={errors?.moveInDate && touched?.moveInDate} helperText={errors?.moveInDate} InputLabelProps={{ shrink: true }} inputProps={{ step: 24 * 60 * 60 * 1000 }} />   </div>
//           ))}
//         </div>
//         <button type="submit">Submit</button>
//       </form> )};
//     </Formik>
//   );
// };
// export default AddressHistoryForm;

// import { Formik } from "formik";
// import * as Yup from "yup";
// import moment from "moment";
// import { TextField } from "@mui/material";

// const AddressHistoryForm = ({ values }) => {
//     const addressHistoryInitialValues = {
//       addresses: [],
//       addresses: [
//         { street: "", city: "", state: "", zipCode: "" },
//         // This is the first address object. You can add more objects to the array as needed.
//       ],
//       // ... Rest of the component code here ... //
//     };

//     const addressSchema = Yup.object({
//       addresses: Yup.array().of(
//         Yup.object({
//           street: Yup.string().required("Street is required"),
//           city: Yup.string().required("City is required"),
//           state: Yup.string().required("State is required"),
//           zipCode: Yup.string().required("Zip Code is required"),
//         })
//       ),
//     });
//     return (
//       <Formik
//         initialValues={addressHistoryInitialValues}
//         validationSchema={addressSchema}
//         //onSubmit={handleSubmit}
//       >
//         {({ values, errors, touched }) => (
//           <form>
//             <div>
//               {values.addresses.map((address, index) => (
//                 <div key={index}>

// <TextField label={t('street')} name={`addresses[${index}].street`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />
//             <TextField label={t('city')} name={`addresses[${index}].city`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />
//             <TextField label={t('state')} name={`addresses[${index}].state`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />
//             <TextField label={t('zipCode')} name={`addresses[${index}].zipCode`} error={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} helperText={errors.addresses && errors.addresses[index] && touched.addresses && touched.addresses[index]} />

//                 </div>
//               ))}
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     );
//   };

//   export default AddressHistoryForm;

//   {/* <label htmlFor="street">Street</label>
// <input type="text" name={`addresses[${index}].street`} />
// {errors.addresses &&
//   errors.addresses[index] &&
//   touched.addresses &&
//   touched.addresses[index] && (
//     <span>{errors.addresses[index]}</span>
//   )}
// <label htmlFor="city">City</label>
// <input type="text" name={`addresses[${index}].city`} />
// {errors.addresses &&
//   errors.addresses[index] &&
//   touched.addresses &&
//   touched.addresses[index] && (
//     <span>{errors.addresses[index]}</span>
//   )}
// <label htmlFor="state">State</label>
// <input type="text" name={`addresses[${index}].state`} />
// {errors.addresses &&
//   errors.addresses[index] &&
//   touched.addresses &&
//   touched.addresses[index] && (
//     <span>{errors.addresses[index]}</span>
//   )}
// <label htmlFor="zipCode">Zip Code</label>
// <input type="text" name={`addresses[${index}].zipCode`} />
// {errors.addresses &&
//   errors.addresses[index] &&
//   touched.addresses &&
//   touched.addresses[index] && (
//     <span>{errors.addresses[index]}</span>
//   )} */}
