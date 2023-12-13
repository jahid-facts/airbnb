import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";

const IncomeForm = ({ close }) => {
  const userInfo = useAuthInfo();
  const userId = userInfo._id;

  const incomeInitialValues = {
    income_source: "",
    officeName: "",
    workplaceLocation: "",
  };

  const incomeSchema = Yup.object({
    add_income_source: Yup.string().required("Income source is required"),
    officeName: Yup.string().required("Office name is required"),
    workplaceLocation: Yup.string().required("Workplace Location is required"),
  });

  const handleSubmit = async (values, actions) => {
    console.log(values);
    try {
      // Make API call here
      const response = await axios.post(`/income-info`, { userId, values });
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
    <>
      <h1>Add Income Sources</h1>
      <br />
      <Formik
        initialValues={incomeInitialValues}
        validationSchema={incomeSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form style={{ marginBlock: "3rem", textAlign:"center"}}>
            <Grid container spacing={2} rowGap={1}>
              <Grid item sm={3}>
                <legend htmlFor="income_source">Add Income Source:</legend>
              </Grid>
              <Grid item sm={8}>
                <Grid item xs={12} sm={9} md={6} m="auto">
                  <Field name="income_source">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="Add Income Source"
                        error={errors.income_source && touched.income_source}
                        multiline
                        rows={3}
                        fullWidth
                        name="income_source"
                        id="income_source"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="income_source" component="div" />{" "}
                </Grid>
              </Grid>
              <Grid item sm={3}>
                <legend htmlFor="workplaceLocation">WorkPlace Location:</legend>
              </Grid>
              <Grid item sm={8}>
                <Grid item xs={12} sm={9} md={6} m="auto">
                  <Field name="workplaceLocation">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="WorkPlace Location"
                        error={
                          errors.workplaceLocation && touched.workplaceLocation
                        }
                        multiline
                        rows={3}
                        fullWidth
                        name="workplaceLocation"
                        id="workplaceLocation"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="income_source" component="div" />{" "}
                </Grid>
              </Grid>
              <Grid item sm={3}>
                <legend htmlFor="officeName">Office Name:</legend>
              </Grid>
              <Grid item sm={8}>
                <Grid item xs={12} sm={9} md={6} m="auto">
                  <Field name="officeName">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="Office Name"
                        error={errors.officeName && touched.officeName}
                        fullWidth
                        name="officeName"
                        id="officeName"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="officeName" component="div" />{" "}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{
                    margin: "20px",
                    padding: "20px",
                    "&:hover": { backgroundColor: "green" },
                  }}
                  variant="outlined"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Form>
        )}
      </Formik>
    </>
  );
};
export default IncomeForm;
