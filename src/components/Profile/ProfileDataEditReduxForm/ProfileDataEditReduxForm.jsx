import s from "./ProfileDataEditReduxForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

let ProfileDataEdit = ({toEditMode, profile, handleSubmit, error}) => {
    return (
        <form className={s.contacts} onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={s.formSummaryError }>
                {error}
            </div>}
            <div>
                <b>Full name:</b>
                <Field placeholder={"Your full name"} name={"fullName"} component={Input} />
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field  placeholder="Yes" name={"lookingForAJob"} component={Input} type="checkbox" value="yes" />
            </div>
            <div>
                <b>Description:</b>
                <Field placeholder={"Tell something about you"} name={"lookingForAJobDescription"} component={Textarea} />
            </div>
            <div>
                <b>About me:</b>
                <Field placeholder={"Tell something"} name={"aboutMe"} component={Textarea} />
            </div>
            <div><b>Contacts:</b>{ Object.keys(profile.contacts).map(key => {
                return <div>
                    {key}: <Field key={key} placeholder={key} name={"contacts." + key} component={Input}/>
                </div>
            }) }</div>
        </form>
    )
}

let ProfileDataEditReduxForm = reduxForm({form: "dataEdit"})(ProfileDataEdit)

export default ProfileDataEditReduxForm
