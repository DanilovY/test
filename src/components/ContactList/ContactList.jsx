import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.contList}>
      {!contacts.length ? (
        <p>No suitable contacts</p>
      ) : (
        contacts.map((item) => (
          <li key={item.id} className={s.contBox}>
            <Contact {...item} handleDelete={handleDelete} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
