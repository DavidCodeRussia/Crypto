import React from "react";
import { Formik, Field } from "formik";
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
    onFilterChanged(values);
  };

  return (
    <Formik initialValues={{ term: "", friend: "" }} validate={formValidate} onSubmit={submitForm}>
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
          <Field name="term" onChange={handleChange} onBlur={handleBlur} value={values.term} />
          <Field type="checkbox" name="friend">
            <option value="null">All</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
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
