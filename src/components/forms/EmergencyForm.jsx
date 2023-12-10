import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import moment from "moment";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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

  export default EmergencyForm;