import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";

const PersonalInfoForm = ({ values }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: moment(),
    phoneNumber: "",
  };

  const personalValidationSchema = Yup.object({
    firstName: Yup.string().required("firstName name is required"),
    lastName: Yup.string().required("lastName name is required"),
    dateOfBirth: Yup.date()
      .required("Date of Birth is required")
      .test("age", "You must be at least 18 years old", (value) => {
        const age = moment().diff(moment(value), "years");
      }),
    phoneNumber: Yup.string()
      .matches(
        /^\(?[1-9]\)?[-. ]?[2-9]\d{6,}$/,
        "Please enter a valid phone number"
      )
      .when("region", {
        is: "US",
        then: Yup.string().required("Please enter a US phone number"),
      })
      .when("region", {
        is: "BD",
        then: Yup.string().required("Please enter a Bangladeshi phone number"),
      })
      .when("region", {
        is: "CA",
        then: Yup.string().matches(
          /^\(?[1-9]\)?[-. ]?[2-9]\d{6}$/,
          "Please enter a valid Canadian phone number"
        ),
      }),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={personalValidationSchema}
      >
        {({ errors, touched }) => (
          <Grid container margin={"auto"} textAlign={"center"}>
            <form >
              <Grid items>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" />{" "}
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid items>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" />{" "}
                {errors.lastName && touched.lastName && (
                  <div>{errors.lastName}</div>
                )}
              </Grid>
              <Grid items>
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input type="date" name="dateOfBirth" />{" "}
                {errors.dateOfBirth && touched.dateOfBirth && (
                  <div>{errors.dateOfBirth}</div>
                )}
              </Grid>
              <Grid items>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" name="phoneNumber" />{" "}
                {errors.phoneNumber && touched.phoneNumber && (
                  <div>{errors.phoneNumber}</div>
                )}
              </Grid>
            </form>
          </Grid>
        )}
      </Formik>
    </>
  );
};
export default PersonalInfoForm;
