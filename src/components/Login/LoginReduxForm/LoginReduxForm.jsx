import React from "react";
import { Field, reduxForm } from "redux-form";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Input } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validators";

import s from "./LoginReduxForm.module.scss";

const LoginForm = (props) => {
  return (
    <form className={s.form_login} onSubmit={props.handleSubmit}>
      <Field name={"email"} className={s.field} placeholder={"Email"} component={Input} validate={[required]} />
      <Field
        name={"password"}
        className={s.field}
        placeholder={"Password"}
        component={Input}
        validate={[required]}
        type={"password"}
      />
      <div className={s.wrapper_for_buttons}>
        <Stack>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
        <label className={s.container_for_buttons}>
          <Field className={s.field_checkbox} name={"rememberMe"} component={Input} type="checkbox" />
          <span className={s.checkbox_span}>remember me</span>
        </label>
      </div>

      {props.captcha && (
        <>
          <img className={s.img_captcha} src={props.captcha} />
          <Field className={s.field} placeholder={"captcha"} name={"captcha"} component={Input} />
        </>
      )}

      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
