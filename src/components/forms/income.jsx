import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";


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
          {({ errors, touched }) => (
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
            </form>
          )}
        </Formik>
      </>
    );
  };
  export default IncomeForm;