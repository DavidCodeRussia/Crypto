import React from "react";
import { Formik } from "formik";
import { TFilter } from "../../../../redux/users-reducer/types";
import { TUsersSearchFormProps } from "../../types";

const formValidate = (values: any) => {
  const errors = {};

  return errors;
};

const UsersSearchForm: React.FC<TUsersSearchFormProps> = ({ onFilterChanged }) => {
  const submitForm = (
    values: TFilter,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    console.log("values которые приходят в onSubmit", values);
    onFilterChanged(values);
  };

  return (
    <Formik initialValues={{ term: "" }} validate={formValidate} onSubmit={submitForm}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input name="term" onChange={handleChange} onBlur={handleBlur} value={values.term} />
          {errors.term && touched.term && errors.term}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default UsersSearchForm;
