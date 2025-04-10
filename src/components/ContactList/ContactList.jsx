import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map((item) => (
        <Contact
          key={item.id}
          item={item}
          handleDelete={() => dispatch(deleteContact(item.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
