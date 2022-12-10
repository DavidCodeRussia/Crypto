import s from "./Message.module.scss";

const Message = (props) => {
  return (
    <div className={s.messageBody}>
      <div>{props.message}</div>
    </div>
  );
};

export default Message;
