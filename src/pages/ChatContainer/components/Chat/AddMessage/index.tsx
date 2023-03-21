import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../../../redux/chat-reducer";
import { TAddMessage } from "./types";
import { AppStateType } from "../../../../../redux/redux-store";

let AddMessage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: AppStateType) => state.chat.status);

  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={(val: TAddMessage, { resetForm }) => {
        dispatch(sendMessage(val.message));
        resetForm();
      }}>
      <Form>
        <Field name={"message"} autoComplete={"off"} placeholder={"Write your message here"} />
        <div>
          <button disabled={status !== "ready"} type="submit">
            send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddMessage;
