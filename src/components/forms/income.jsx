import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import moment from "moment";
import { Button, Grid, Input, TextField } from "@mui/material";
import axios from "axios";
import { useAuthInfo } from "../../helpers/AuthCheck";
import { useRef, useState } from "react";

const IncomeForm = ({ close }) => {
  const fileRefButton = useRef(null);
  const userInfo = useAuthInfo();
  const userId = userInfo._id;
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

  const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  const incomeInitialValues = {
    incomeSource: "",
    officeName: "",
    workplaceLocation: "",
    file: null,
  };

  const incomeSchema = Yup.object({
    incomeSource: Yup.string().required("Income source is required"),
    officeName: Yup.string().required("Office name is required"),
    workplaceLocation: Yup.string().required("Workplace Location is required"),
    file: Yup.mixed().required("Upload a File"),
  });

  const handleSubmit = async (values, actions) => {
    // event.preventDefault();
    // console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("values", values);
    formData.append("userId", userId);
    // console.log(formData);
    // console.log(values);

    try {
      const response = await fetch(REACT_APP_BASE_URL+"/income-info", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error(
          "Failed to send image. Server responded with " + response.status
        );
        return;
      }

      // const response = await axios.post('/users/avatar', formData);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      // try {
      //   // Make API call here
      //   const response = await axios.post(`/income-info`, { formData }
      //   );
      //   console.log(response);
      //   //message(response);

      //   // Handle successful response
      // } catch (error) {
      //   console.error(error);
      //   //message(error);
      //   // Handle error response
      // }
      // Reset form values
      actions.setSubmitting(false);
      actions.resetForm();
      close();
    }
  };

  return (
    <>
      <div style={{ marginBlock:"1.3rem" }}>
        <h1>Add Income Sources</h1>
      </div>
      
      <Formik
        initialValues={incomeInitialValues}
        validationSchema={incomeSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => (
          <Form
            style={{ marginBlock: "0.1rem", textAlign: "center" }}
            encType="multipart/form-data"
          >
            <Grid container spacing={1} rowGap={1}>
              <Grid item sm={4}>
                <legend htmlFor="income_source">Add Income Source:</legend>
              </Grid>
              <Grid item sm={8}>
                <Grid item xs={12} sm={9} md={8} m="auto">
                  <Field name="incomeSource">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="Add Income Source"
                        error={errors.incomeSource && touched.incomeSource}
                        multiline
                        rows={3}
                        fullWidth
                        name="incomeSource"
                        id="incomeSource"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="income_source" component="div" />{" "}
                </Grid>
              </Grid>
              <Grid item sm={4}>
                <legend htmlFor="workplaceLocation">WorkPlace Location:</legend>
              </Grid>
              <Grid item sm={8}>
                <Grid item xs={12} sm={9} md={8} m="auto">
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
              <Grid item sm={4}>
                <legend htmlFor="officeName">Office Name:</legend>
              </Grid>
              <Grid item sm={8}>
                <Grid item xs={12} sm={9} md={8} m="auto">
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
                <legend
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    // marginBlock: "1rem",
                  }}
                >
                  <h2>Recent proof of income</h2>
                  <h5>
                    Attach your three most recent payslips or any other
                    supporting documents that prove your income.
                  </h5>{" "}
                </legend>

                <div>
                  <input
                    hidden
                    ref={fileRefButton}
                    label="Upload a proof of your paycheck"
                    // error={errors.file && touched.file}
                    type="file"
                    // name="file"
                    // id="file"
                    onChange={(event) => {
                      setFieldValue("file", event.target.files[0]);
                      setFile(event.target.files[0]);
                    }}
                  />
                  <ErrorMessage name="file" component="div" />{" "}
                  <Button
                    fullWidth
                    style={{
                      backgroundColor: "red",
                      padding: "16px",
                      color: "white",
                      "&:hover": { backgroundColor: "blue" },
                    }}
                    onClick={() => {
                      fileRefButton.current.click();
                    }}
                  >
                    Upload a Proof Of Paycheck
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{
                    // margin: "20px",
                    padding: "8px",
                    "&:hover": { backgroundColor: "green" },
                  }}
                  variant="outlined"
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
    </>
  );
};
export default IncomeForm;
