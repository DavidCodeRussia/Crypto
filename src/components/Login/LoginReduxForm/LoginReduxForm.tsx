import { Field, InjectedFormProps, reduxForm } from "redux-form";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Input } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validators";
import { TFormData, TLoginReduxFormOwnProps } from "../type";
import s from "./LoginReduxForm.module.scss";

const LoginForm: React.FC<
  InjectedFormProps<TFormData, TLoginReduxFormOwnProps> & TLoginReduxFormOwnProps
> = ({ handleSubmit, captcha, error }) => {
  return (
    <form className={s.form_login} onSubmit={handleSubmit}>
      <Field
        name={"email"}
        className={s.field}
        placeholder={"Email"}
        component={Input}
        validate={[required]}
      />
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
          <Field
            className={s.field_checkbox}
            name={"rememberMe"}
            component={Input}
            type="checkbox"
          />
          <span className={s.checkbox_span}>remember me</span>
        </label>
      </div>

      {captcha && (
        <>
          <img className={s.img_captcha} src={captcha} alt="" />
          <Field className={s.field} placeholder={"captcha"} name={"captcha"} component={Input} />
        </>
      )}

      {error && <div className={s.formSummaryError}>{error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm<TFormData, TLoginReduxFormOwnProps>({ form: "login" })(LoginForm);

export default LoginReduxForm;
