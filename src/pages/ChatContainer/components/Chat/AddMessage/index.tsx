import { Field, Form, Formik } from "formik";
import React from "react";

type TAddMessage = {
  message: string;
};

let AddMessage: React.FC<{ wsChannel: WebSocket }> = ({ wsChannel }) => {

  console.log("wsChannel.readyState",wsChannel.readyState )
  console.log("", )

  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={(val: TAddMessage) => {
        //@ts-ignore
        wsChannel.send(val.message);
      }}>
      <Form>
        <Field name={"message"} placeholder={"Write your message here"} />
        <div>
          <button disabled={wsChannel.readyState !== WebSocket.OPEN} type="submit">
            send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddMessage;
