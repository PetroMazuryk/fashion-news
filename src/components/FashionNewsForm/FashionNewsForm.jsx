import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFashionNews } from '../../redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';
import { Button } from '../Button/Button';

import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import css from './FashionNewsForm.module.css';

const FashionNewsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Must contain only letters')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Title required for entry'),
  number: Yup.string()
    .matches(
      /^(January|February|March|April|May|June|July|August|September|October|November|December)\s(\d{4})$/,
      "Date must be in the format 'Month YYYY'."
    )
    .min(5, 'Month and year must be specified')
    .max(20, 'Must be exactly 10 digits')
    .required('Date required for entry'),
});

const initialValues = {
  name: '',
  number: '',
};

export const FashionNewsForm = () => {
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
        `A fashion news with the name "${name}" or number "${number}" already exists`
      );
    } else {
      toast.success(
        `Congratulations, you have added a fashion news with a name "${name}" `
      );

      const newContact = { name, number };
      dispatch(addFashionNews(newContact));
      resetForm();
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={FashionNewsSchema}
        onSubmit={handleFormSubmit}
      >
        <Form className={css.form}>
          <div className={css.labelWrapper}>
            <label className={css.label} htmlFor={nameFieldId}>
              Title
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
              Date
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
            Add fashion
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
