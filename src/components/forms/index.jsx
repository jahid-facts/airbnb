import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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
          <form>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" />{" "}
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : (
              ""
            )}
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" />{" "}
            {errors.lastName && touched.lastName && (
              <div>{errors.lastName}</div>
            )}
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input type="date" name="dateOfBirth" />{" "}
            {errors.dateOfBirth && touched.dateOfBirth && (
              <div>{errors.dateOfBirth}</div>
            )}
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" name="phoneNumber" />{" "}
            {errors.phoneNumber && touched.phoneNumber && (
              <div>{errors.phoneNumber}</div>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

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

const EmergencyForm = ({ values }) => {
  const { t } = useTranslation();
  const relationshipOptions = useMemo(
    () => [
      { value: "spouse", label: t("spouse") },
      { value: "parent", label: t("parent") },
      { value: "child", label: t("child") },
      { value: "sibling", label: t("sibling") },
      { value: "friend", label: t("friend") },
    ],
    [t]
  );
  const emergencyInitialValues = { emergencyContactName: "", relationship: "", emergencyContactPhoneNumber: "" };
  const emergencySchema = Yup.object({
    emergencyContactName: Yup.string().required(t("emergencyContactNameIsRequired")),
    relationship: Yup.string().required(t("relationshipIsRequired")),
    emergencyContactPhoneNumber: Yup.string().required(t("emergencyContactPhoneNumberIsRequired")),
  });
  return (
    <>
      <Formik initialValues={emergencyInitialValues} validationSchema={emergencySchema}>
        {({ errors, touched }) => ( 
              <form>
              <label htmlFor="emergencyContactName">{t("emergencyContactName")}:</label>
              <input type="text" name="emergencyContactName" /> {" "} 
              {errors.emergencyContactName && touched.emergencyContactName } 
              <div>{errors.emergencyContactName}</div> 
              <label htmlFor="relationship">{t("relationship")}:</label>
              <select name="relationship" id="relationship">
                {relationshipOptions.map((option) => (   
                <option value={option.value} selected={option.value === values.relationship}>{option.label}
                </option>))} 
              </select> 
                {" "} {errors.relationship && touched.relationship} 
                <div>{errors.relationship}</div> 
              <label htmlFor="emergencyContactPhoneNumber">{t("emergencyContactPhoneNumber")}:</label>
              <input type="text" name="emergencyContactPhoneNumber" /> {" "} 
              {errors.emergencyContactPhoneNumber && touched.emergencyContactPhoneNumber } 
              <div>{errors.emergencyContactPhoneNumber}</div> 
            </form>
        )}
      
      </Formik>
    </>
  );
};


// eslint-disable-next-line import/no-anonymous-default-export
export default { PersonalInfoForm, AddressHistoryForm, AboutMeForm, IncomeForm, EmergencyForm };
