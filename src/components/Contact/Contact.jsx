import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ item, handleDelete }) => {
  return (
    <>
      <div className={s.contbox}>
        <div className={s.contitem}>
          <FaUser />
          <p>{item.name}</p>
        </div>
        <div className={s.contitem}>
          <FaPhoneAlt />
          <p>{item.number}</p>
        </div>
      </div>
      <button className={s.contBtn} onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
