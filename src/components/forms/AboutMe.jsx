import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Grid, TextField } from "@mui/material";
// import { Grid } from "antd";

const AboutMeForm = ({ values }) => {
  const aboutMeInitialValues = {
    aboutMe: "",
  };
  const aboutMeValidationSchema = Yup.object({
    aboutMe: Yup.string().required(" Enter about Yourself"),
    // This field is optional, so we don't set a validation rule for it.
  });
  return (
    <>
      <Formik
        initialValues={aboutMeInitialValues}
        validationSchema={aboutMeValidationSchema}
      >
        {({ errors, touched }) => (
          <form style={{ marginBlock: "3rem" }}>
            <Grid container spacing={1}>
              <Grid items sm={3}>
                <legend htmlFor="aboutMe">About Me:</legend>
              </Grid>

              <Grid items sm={8}>
                <TextField
                  label="Tell about yourself "
                  error={errors.aboutMe && touched.aboutMe}
                  multiline
                  rows={6}
                  fullWidth
                  name="aboutMe"
                  id="aboutMe"
                />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AboutMeForm;
