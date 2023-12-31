import { Field, Form, Formik } from "formik";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";

const EmergencyForm = ({ close }) => {
  const userInfo = useAuthInfo();
  const userId = userInfo._id;
  const { t } = useTranslation();
  const relationshipOptions = [
    { value: "spouse", label: t("spouse") },
    { value: "parent", label: t("parent") },
    { value: "child", label: t("child") },
    { value: "sibling", label: t("sibling") },
    { value: "friend", label: t("friend") },
  ];
  const emergencyInitialValues = {
    emergencyContactName: "",
    relationship: "",
    emergencyContactPhoneNumber: "",
  };
  const emergencySchema = Yup.object({
    emergencyContactName: Yup.string().required(
      t("emergencyContactNameIsRequired")
    ),
    relationship: Yup.string().required(t("relationshipIsRequired")),
    emergencyContactPhoneNumber: Yup.number()
    .integer(t("pleaseEnterAWholeNumber"))
    .required(t("emergencyContactPhoneNumberIsRequired")),
  });

  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      // Make API call here
      const response = await axios.post(`/emergency-info`, { userId, values }
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
    <Formik
      initialValues={emergencyInitialValues}
      validationSchema={emergencySchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <Form  style={{  paddingBlock:"0.5rem"}}>
          <div style={{ paddingBlock:"1rem"}}>
          <h2> Emergency Contact Information </h2>
          </div>
         
          <br />

          <FormControl fullWidth>
            <FormLabel>{t("Emergency Contact Name")}</FormLabel>
            <Field name="emergencyContactName">
              {({ field }) => (
                <TextField
                { ...field}
                  name="emergencyContactName"
                  error={
                    errors.emergencyContactName && touched.emergencyContactName
                  }
                  helperText={errors.emergencyContactName}
                />
              )}
            </Field>

            <br />
            <FormLabel>{t("Relationship")}</FormLabel>
            <Field name="relationship">
              {({ field }) => (
                <TextField
                { ...field}
                  select
                  name="relationship"
                  error={errors.relationship && touched.relationship}
                  helperText={errors.relationship}
                >
                  {relationshipOptions.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      selected={option.value === values.relationship}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            </Field>
            <br />
            <FormLabel>{t("Emergency Contact PhoneNumber")}</FormLabel>
            <Field name="emergencyContactPhoneNumber">
              {({ field }) => (
                <TextField
                { ...field}
                  name="emergencyContactPhoneNumber"
                  error={
                    errors.emergencyContactPhoneNumber &&
                    touched.emergencyContactPhoneNumber
                  }
                  helperText={errors.emergencyContactPhoneNumber}
                />
              )}
            </Field>
            <br />

            <Button
              style={{
                margin: "20px",
                padding: "20px",
                "&:hover": { backgroundColor: "green" },
              }}
              variant="outlined"
              type="submit"
            >
              {" "}
              Submit{" "}
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default EmergencyForm;

// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";
// import moment from "moment";

// import { useMemo } from "react";
// import { useTranslation } from "react-i18next";
// import { MenuItem, TextField } from "@mui/material";

// const EmergencyForm = ({ values }) => {
//   const { t } = useTranslation();
//   const relationshipOptions = useMemo(
//     () => [
//       { value: "spouse", label: t("spouse") },
//       { value: "parent", label: t("parent") },
//       { value: "child", label: t("child") },
//       { value: "sibling", label: t("sibling") },
//       { value: "friend", label: t("friend") },
//     ],
//     [t]
//   );
//   const emergencyInitialValues = { emergencyContactName: "", relationship: "", emergencyContactPhoneNumber: "" };
//   const emergencySchema = Yup.object({
//     emergencyContactName: Yup.string().required(t("emergencyContactNameIsRequired")),
//     relationship: Yup.string().required(t("relationshipIsRequired")),
//     emergencyContactPhoneNumber: Yup.string().required(t("emergencyContactPhoneNumberIsRequired")),
//   });
//   return (
//     <>
//       <Formik initialValues={emergencyInitialValues} validationSchema={emergencySchema}>
//         {({ errors, touched }) => (
//           <form>
//             ...
//             <TextField select label={t('relationship')}
//             name="relationship"
//             error={errors.relationship && touched.relationship} helperText={errors.relationship}>
//               {relationshipOptions.map((option) => (
//                 <MenuItem key={option.value} value={option.value} selected={option.value === values.relationship}>
//                   {option.label}</MenuItem>))}
//             </TextField>
//             ...
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// };

// const EmergencyForm = ({ values }) => {
//   const { t } = useTranslation();
//   const relationshipOptions = useMemo(
//     () => [
//       { value: "spouse", label: t("spouse") },
//       { value: "parent", label: t("parent") },
//       { value: "child", label: t("child") },
//       { value: "sibling", label: t("sibling") },
//       { value: "friend", label: t("friend") },
//     ],
//     [t]
//   );
//   const emergencyInitialValues = {
//     emergencyContactName: "",
//     relationship: "",
//     emergencyContactPhoneNumber: "",
//   };
//   const emergencySchema = Yup.object({
//     emergencyContactName: Yup.string().required(
//       t("emergencyContactNameIsRequired")
//     ),
//     relationship: Yup.string().required(t("relationshipIsRequired")),
//     emergencyContactPhoneNumber: Yup.string().required(
//       t("emergencyContactPhoneNumberIsRequired")
//     ),
//   });
//   return (
//     <>
//       <Formik
//         initialValues={emergencyInitialValues}
//         validationSchema={emergencySchema}
//       >
//         {({ errors, touched }) => (
//           <form>
//             <TextField
//               label={t("emergencyContactName")}
//               name="emergencyContactName"
//               error={
//                 errors.emergencyContactName && touched.emergencyContactName
//               }
//               helperText={errors.emergencyContactName}
//             />

//             <TextField
//               select
//               label={t("relationship")}
//               name="relationship"
//               error={errors.relationship && touched.relationship}
//               helperText={errors.relationship}
//             >
//               {relationshipOptions.map((option) => (
//                 <MenuItem
//                   key={option.value}
//                   value={option.value}
//                   selected={option.value === values.relationship}
//                 >
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>

//             <TextField
//               label={t("emergencyContactPhoneNumber")}
//               name="emergencyContactPhoneNumber"
//               error={
//                 errors.emergencyContactPhoneNumber &&
//                 touched.emergencyContactPhoneNumber
//               }
//               helperText={errors.emergencyContactPhoneNumber}
//             />
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// };


//   <form>
//   <label htmlFor="emergencyContactName">{t("emergencyContactName")}:</label>
//   <input type="text" name="emergencyContactName" /> {" "}
//   {errors.emergencyContactName && touched.emergencyContactName }
//   <div>{errors.emergencyContactName}</div>
//   <label htmlFor="relationship">{t("relationship")}:</label>
//   <select name="relationship" id="relationship">
//     {relationshipOptions.map((option) => (
//     <option value={option.value} selected={option.value === values.relationship}>{option.label}
//     </option>))}
//   </select>
//     {" "} {errors.relationship && touched.relationship}
//     <div>{errors.relationship}</div>
//   <label htmlFor="emergencyContactPhoneNumber">{t("emergencyContactPhoneNumber")}:</label>
//   <input type="text" name="emergencyContactPhoneNumber" /> {" "}
//   {errors.emergencyContactPhoneNumber && touched.emergencyContactPhoneNumber }
//   <div>{errors.emergencyContactPhoneNumber}</div>
// </form>
