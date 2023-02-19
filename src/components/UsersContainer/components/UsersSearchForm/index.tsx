import React from 'react';
import { Formik } from 'formik';
import { TFilter } from '../../../../redux/users-reducer/types';
import { TUsersSearchFormProps } from '../../types';

const formValidate = (values: any) => {
  const errors = {};
  // if (!values.term) {
  //   errors.term = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.term)) {
  //   errors.term = 'Invalid term address';
  // }
  return errors;
};

const UsersSearchForm: React.FC<TUsersSearchFormProps> = ({ onFilterChanged }) => {
  const submitForm = (
    values: TFilter,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values));
    //   setSubmitting(false);
    // }, 400);
    onFilterChanged(values);
  };

  return (
    <Formik initialValues={{ term: '' }} validate={formValidate} onSubmit={submitForm}>
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
          <input
            type="email"
            name="term"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.term}
          />
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
