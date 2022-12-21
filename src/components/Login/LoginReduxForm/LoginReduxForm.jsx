import React from "react";
import { Field, reduxForm } from "redux-form";

import { Input } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validators";

import s from "./LoginReduxForm.module.scss";

const LoginForm = (props) => {
  return (
    <form className={s.form_main_login} onSubmit={props.handleSubmit}>
      <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
      <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"} />

      <div className={s.container_for_buttons}>
        <Field name={"rememberMe"} component={Input} type="checkbox" />
        <span className={s.checkbox_span}>remember me</span>
        <div>
          {props.captcha && (
            <div>
              <img src={props.captcha} />
              <Field placeholder={"captcha"} name={"captcha"} component={Input} />
            </div>
          )}
        </div>
        <button className={s.button_login}>Login</button>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
