import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const hadleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };
  const patternLetters = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  const patternPhone = /^\d{3}-\d{2}-\d{2}$/;

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "min 3 characters")
      .max(50, "max 50 characters")
      .required("This field is required")
      .matches(patternLetters, "Enter only letters"),
    number: Yup.string()
      .min(7, "min 7 numbers")
      .max(9, "max 7 numbers")
      .required("This field is required")
      .matches(patternPhone, "Number format ХХХ-ХХ-ХХ"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hadleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label className={s.inputBox}>
          Name
          <Field
            className={s.formField}
            type="text"
            name="name"
            id="name"
          ></Field>
          <ErrorMessage name="name" component="p" className={s.error} />
        </label>
        <label className={s.inputBox}>
          Number
          <Field
            className={s.formField}
            type="text"
            name="number"
            id="number"
          ></Field>
          <ErrorMessage name="number" component="p" className={s.error} />
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
