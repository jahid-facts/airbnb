import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Button, Grid, TextField } from "@mui/material";
import { useAuthInfo } from "../../helpers/AuthCheck";
import axios from "axios";
// import { Grid } from "antd";

const AboutMeForm = ({close}) => {
  const userInfo = useAuthInfo();
  const userId = userInfo._id;
  //const url = `/personal-info/${userId}`;

  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      // Make API call here
      const response = await axios.post(`/about-info`, { userId, values });
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
    <div>
      <h1>About Yourself</h1>
      <br />
      <Formik
        initialValues={{ aboutMe: "" }}
        validationSchema={Yup.object({
          aboutMe: Yup.string().required(" Enter about Yourself"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form style={{ marginBlock: "3rem" }}>
            <Grid container spacing={1}>
              <Grid items sm={3}>
                <legend htmlFor="aboutMe">About Me:</legend>
              </Grid>

              <Grid item sm={8}>
                <Grid item xs={12} sm={9} md={6} m={"auto"}>
                  <Field name="aboutMe">
                    {({ field }) => (
                      <TextField
                      {...field}
                        label="Tell about yourself "
                        error={errors.aboutMe && touched.aboutMe}
                        multiline
                        rows={6}
                        fullWidth
                        name="aboutMe"
                        id="aboutMe"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="aboutMe" component="div" />{" "}
                </Grid>
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
                  Save & back
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AboutMeForm;
