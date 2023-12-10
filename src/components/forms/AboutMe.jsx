import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";

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
            <form>
              <label htmlFor="aboutMe">About Me:</label>
              <textarea name="aboutMe" />{" "}
              {/* {errors.aboutMe && touched.aboutMe && () => (  
            <div>{errors.aboutMe}</div> 
              
              )}  */}
            </form>
          )}
        </Formik>
      </>
    );
  };

  export default AboutMeForm;