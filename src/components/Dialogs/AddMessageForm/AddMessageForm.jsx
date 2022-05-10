import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import s from "../../Profile/My Posts/MyPosts.module.css";

let maxLength100 = maxLengthCreator(150);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.fieldPosts}>
                <Field name={"newMessageBody"} component={Textarea}
                       validate={maxLength100} placeholder={"write message here"}
                       className={s.nativeField} />
                <button className={s.clearlyButton}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)