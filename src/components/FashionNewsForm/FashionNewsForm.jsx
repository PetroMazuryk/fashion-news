import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFashionNews } from '../../redux/contacts/operations';
import { selectAllNews } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';
import { Button } from '../Button/Button';

import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import css from './FashionNewsForm.module.css';


const FashionNewsSchema = Yup.object().shape({
  title: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Must contain only letters')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Title required for entry'),
  date: Yup.string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
      "Date must be in the format 'DD.MM.YYYY'."
    )
   .required('Date required for entry'),
   content: Yup.string()
    .min(10, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Content is required'),
});

const initialValues = {
  title: '',
  date: '',
  content: '',
};

export const FashionNewsForm = () => {
  const titleFieldId = useId();
  const dateFieldId = useId();
  const contentFieldId = useId();

  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);

  const handleFormSubmit = (values, { resetForm }) => {
    const { title, date,content } = values;

    const newsAlreadyExists = news.find(
      contact =>
        contact.title.toLowerCase() === title.toLowerCase() 
       
    );

    if (newsAlreadyExists) {
      toast.error(
      `A fashion news with the name "${title}" already exists`
      );
    } else {
      toast.success(
        `Congratulations, you have added a fashion news with a name "${title}" `
      );

      const newContact = { title, date,content };
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
            <label className={css.label} htmlFor={titleFieldId}>
              Title
            </label>
            <Field
              className={css.field}
              type="text"
              name="title"
              id={titleFieldId}
            />
            <ErrorMessage className={css.error} name="title" component="span" />
          </div>
          <div className={css.labelWrapper}>
            <label className={css.label} htmlFor={dateFieldId}>
              Date
            </label>
            <Field
              className={css.field}
              type="text"
              name="date"
              id={dateFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="date"
              component="span"
            />
          </div>

          <div className={css.labelWrapper}>
  <label className={css.label} htmlFor={contentFieldId}>
    Content
  </label>
  <Field
    as="textarea"
    className={css.fielвContent}
    name="content"
    id="content"
    rows={1}
  />
  <ErrorMessage className={css.error} name="content" component="span" />
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
