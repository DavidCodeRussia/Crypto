import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import s from "./FormsControls.module.scss";

type TFormProps = {
  meta: WrappedFieldMetaProps;
  children: React.ReactNode;
};

export const Form: React.FC<TFormProps> = ({ meta: { touched, error }, ...props }) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>

      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <Form {...props}>
      <textarea {...props.input} {...restProps} />
    </Form>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <Form {...props}>
      <input {...props.input} {...restProps} />
    </Form>
  );
};
