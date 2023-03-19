import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { TAddMessage } from './types';

let AddMessage: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [isWBReady, setWBReady] = useState<'pending' | 'ready'>('pending');

  const onOpenHandler = () => {
    setWBReady('ready');
  };

  useEffect(() => {
    wsChannel?.addEventListener('open', onOpenHandler);

    return () => {
      wsChannel?.removeEventListener('open', onOpenHandler);
    };
  }, [wsChannel]);

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(val: TAddMessage, { resetForm }) => {
        //@ts-ignore
        wsChannel?.send(val.message);
        resetForm();
      }}>
      <Form>
        <Field name={'message'} autocomplete={'off'} placeholder={'Write your message here'} />
        <div>
          <button disabled={wsChannel === null && isWBReady !== 'ready'} type="submit">
            send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddMessage;
