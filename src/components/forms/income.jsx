import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Button } from "@mui/material";

const IncomeForm = ({ values }) => {
  const incomeInitialValues = {
    add_income_source: "",
    officeName: "",
  };
  const incomeSchema = Yup.object({
    add_income_source: Yup.string().required("Income source is required"),
    officeName: Yup.string().required("Office name is required"),
  });

  return (
    <>
      <Formik
        initialValues={incomeInitialValues}
        validationSchema={incomeSchema}
      >
        {({ values, errors, touched }) => (
          <form>
            <label htmlFor="add_income_source">Add Income Source:</label>
            <input type="text" name="add_income_source" />{" "}
            {errors.add_income_source && touched.add_income_source}
            <label>
              {" "}
              <div>{errors.add_income_source}</div>{" "}
            </label>
            <label htmlFor="officeName">Office Name:</label>
            <input type="text" name="officeName" />{" "}
            {errors.officeName && touched.officeName}
            <label>
              <div>{errors.officeName}</div>{" "}
            </label>
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
            {/*               <Grid item xs={12}>
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
            </Button> */}
          </form>
        )}
      </Formik>
    </>
  );
};
export default IncomeForm;
