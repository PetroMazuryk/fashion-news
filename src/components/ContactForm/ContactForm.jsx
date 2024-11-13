import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';
import { Button } from '../Button/Button';

import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Must contain only letters')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Username required for entry'),
  number: Yup.string()
    .matches(/^[0-9-]+$/, 'Must only be numbers or dashes')
    .min(5, 'Must be exactly 5 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Number required for entry'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleFormSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const contactAlreadyExists = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (contactAlreadyExists) {
      toast.error(
        `A contact with the name "${name}" or number "${number}" already exists`
      );
    } else {
      toast.success(
        `Congratulations, you have added a contact with a name "${name}" `
      );

      const newContact = { name, number };
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleFormSubmit}
      >
        <Form className={css.form}>
          <div className={css.labelWrapper}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.labelWrapper}>
            <label className={css.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={css.field}
              type="name"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <Button
            style={{
              width: 110,
              margin: 'auto',
            }}
            variant="add"
            type="submit"
          >
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
