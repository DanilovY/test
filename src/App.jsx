import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContact } from "./redux/contactsOps";

import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const isLoader = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <h1> Phonebook </h1>
      <ContactForm />
      <SearchBox />
      {isLoader && <Loader />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
}

export default App;
