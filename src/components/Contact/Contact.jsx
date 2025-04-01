import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, handleDelete }) => {
  return (
    <>
      <div className={s.contbox}>
        <div className={s.contitem}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={s.contitem}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.contBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
