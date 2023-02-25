import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { TFilter } from '../../../../redux/users-reducer/types';
import { TUsersSearchFormProps } from '../../types';
import { getFilter } from '../../../../redux/users-selectors';

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

  const filter = useSelector(getFilter);

  return (
    <Formik
      enableReinitialize
      initialValues={{ term: filter.term, friend: String(filter.friend) }}
      validate={formValidate}
      onSubmit={submitForm}>
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
          <Field name="friend" as="select">
            <option value="">All</option>
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
