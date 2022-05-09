import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from "../../Profile/My Posts/MyPosts.module.css";

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.fieldPosts}>
                <Field name={"newMessageBody"} component={Textarea}
                       validate={[required, maxLength100]} placeholder={"write message here"}
                       className={s.nativeField} />
                <button className={s.clearlyButton}>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)