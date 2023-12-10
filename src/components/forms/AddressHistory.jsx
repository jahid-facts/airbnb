import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";



const AddressHistoryForm = ({ values }) => {
    const addressHistoryInitialValues = {
      addresses: [],
      addresses: [
        { street: "", city: "", state: "", zipCode: "" },
        // This is the first address object. You can add more objects to the array as needed.
      ],
      // ... Rest of the component code here ... //
    };
  
    const addressSchema = Yup.object({
      addresses: Yup.array().of(
        Yup.object({
          street: Yup.string().required("Street is required"),
          city: Yup.string().required("City is required"),
          state: Yup.string().required("State is required"),
          zipCode: Yup.string().required("Zip Code is required"),
        })
      ),
    });
    return (
      <Formik
        initialValues={addressHistoryInitialValues}
        validationSchema={addressSchema}
        //onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <form>
            <div>
              {values.addresses.map((address, index) => (
                <div key={index}>
                  <label htmlFor="street">Street</label>
                  <input type="text" name={`addresses[${index}].street`} />
                  {errors.addresses &&
                    errors.addresses[index] &&
                    touched.addresses &&
                    touched.addresses[index] && (
                      <span>{errors.addresses[index]}</span>
                    )}
                  <label htmlFor="city">City</label>
                  <input type="text" name={`addresses[${index}].city`} />
                  {errors.addresses &&
                    errors.addresses[index] &&
                    touched.addresses &&
                    touched.addresses[index] && (
                      <span>{errors.addresses[index]}</span>
                    )}
                  <label htmlFor="state">State</label>
                  <input type="text" name={`addresses[${index}].state`} />
                  {errors.addresses &&
                    errors.addresses[index] &&
                    touched.addresses &&
                    touched.addresses[index] && (
                      <span>{errors.addresses[index]}</span>
                    )}
                  <label htmlFor="zipCode">Zip Code</label>
                  <input type="text" name={`addresses[${index}].zipCode`} />
                  {errors.addresses &&
                    errors.addresses[index] &&
                    touched.addresses &&
                    touched.addresses[index] && (
                      <span>{errors.addresses[index]}</span>
                    )}
                </div>
              ))}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    );
  };

  export default AddressHistoryForm;