import { TContact } from '../types';
import s from './Contact.module.scss';

const Contact: React.FC<TContact> = ({ ContactTitle, ContactValue }) => {
  return (
    <div className={s.contacts}>
      {ContactTitle} {ContactValue}
    </div>
  );
};

export default Contact;
