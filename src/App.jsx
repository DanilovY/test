import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import hero from "./data/hero.json";
import { nanoid } from "nanoid";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? hero
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const hendleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContacts = (contact) => {
    const obj = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    setContacts((prev) => [...prev, obj]);
  };
  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1> Phonebook </h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox search={search} filter={hendleSearch} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
