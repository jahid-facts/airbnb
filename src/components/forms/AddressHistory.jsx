import { Formik } from "formik";
import * as Yup from "yup";
import { Grid, TextField } from "@mui/material";
import { FormControl } from "@mui/material";

const AddressHistoryForm = ({ values }) => {
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
  return (
    <Formik initialValues={initialValues} 
    validationSchema={validationSchema}>
      {({ values, errors, touched }) => (
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <label htmlFor="address1">First Name:</label><br/>
              <TextField
                color="secondary"
                label="Present Address"
                name="address1"
                id="address1"
                error={errors.address1 && touched.address1}
                helperText={errors.address1}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
            <label htmlFor="firstName">First Name:</label><br/>
              <TextField
                label="Permanent Address"
                name="address2"
                error={errors.address2 && touched.address2}
                helperText={errors.address2}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                name="city"
                error={errors.city && touched.city}
                helperText={errors.city}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="State"
                name="state"
                error={errors.state && touched.state}
                helperText={errors.state}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Zip Code"
                name="zipCode"
                error={errors.zipCode && touched.zipCode}
                helperText={errors.zipCode}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Move-in Date"
                type="date"
                name="moveInDate"
                error={errors?.moveInDate && touched?.moveInDate}
                helperText={errors?.moveInDate}
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 24 * 60 * 60 * 1000 }}
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
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
