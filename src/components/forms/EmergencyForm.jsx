import { Form, Formik } from "formik";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@mui/material";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const EmergencyForm = ({ values }) => {
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
    emergencyContactPhoneNumber: Yup.string().required(
      t("emergencyContactPhoneNumberIsRequired")
    ),
  });
  return (
    <Formik
      initialValues={emergencyInitialValues}
      validationSchema={emergencySchema}
    >
      {({ values, errors, touched }) => (
        <Form>
          <legend> Emergency Contact Information </legend>
          <br />

          <FormControl>
            <FormLabel>{t("Emergency Contact Name")}</FormLabel>
            <TextField
              name="emergencyContactName"
              error={
                errors.emergencyContactName && touched.emergencyContactName
              }
              helperText={errors.emergencyContactName}
            />
            <br />
            <FormLabel>{t("Relationship")}</FormLabel>
            <TextField
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
            <br />
            <FormLabel>{t("Emergency Contact PhoneNumber")}</FormLabel>
            <TextField
              name="emergencyContactPhoneNumber"
              error={
                errors.emergencyContactPhoneNumber &&
                touched.emergencyContactPhoneNumber
              }
              helperText={errors.emergencyContactPhoneNumber}
            />
            {errors.overall && ( // Custom validation for overall errors (optional)
              <FormHelperText>{errors.overall}</FormHelperText>
            )}
            <br />
          </FormControl>
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
          
        </Form>
      )}
    </Formik>
  );
};

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

export default EmergencyForm;

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
