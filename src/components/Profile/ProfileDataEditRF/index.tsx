// @ts-nocheck
import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import { TProfileDataEditRF, TProfileDataEditRFFormData } from "../types";

import s from "./ProfileDataEditRF.module.scss";

let ProfileDataEditRF: React.FC<TProfileDataEditRF> = ({ profile, handleSubmit }) => {
  return (
    <form className={s.information} onSubmit={handleSubmit}>
      <div className={s.block1}>
        {/* {error && <div className={s.formSummaryError}>{error}</div>} */}
        <div>
          <b>Full name:</b>
          <Field placeholder={"Your full name"} name={"fullName"} component={Input} />
        </div>
        <div>
          <b>Looking for a job:</b>
          <Field
            placeholder="Yes"
            name={"lookingForAJob"}
            component={Input}
            type="checkbox"
            value="yes"
          />
        </div>
        <div>
          <b>Birthday:</b>
          <Field
            placeholder={"Write here your birthday"}
            name={"lookingForAJobDescription"}
            component={Textarea}
          />
        </div>
        <div>
          <b>About me:</b>
          <Field placeholder={"Tell something"} name={"aboutMe"} component={Textarea} />
        </div>
        <div>
          <b>Contacts:</b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key}>
                {key}:{" "}
                <Field key={key} placeholder={key} name={"contacts." + key} component={Input} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.block2}>
        <div>
          <Stack>
            <Button size="small" variant="contained" type="submit">
              Save
            </Button>
          </Stack>
        </div>
      </div>
    </form>
  );
};

let ProfileDataEditReduxForm = reduxForm<TProfileDataEditRFFormData, TProfileDataEditRF>({
  form: "dataEdit",
})(ProfileDataEditRF);

export default ProfileDataEditReduxForm;
