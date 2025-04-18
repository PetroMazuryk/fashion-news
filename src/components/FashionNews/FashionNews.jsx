import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteFashionNews,
  editFashionNews,
} from '../../redux/contacts/operations';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

import toast from 'react-hot-toast';
import css from './FashionNews.module.css';

export default function FashionNews({ contact: { _id, title, date } }) {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDate, setNewDate] = useState(date);


 
  const titlePattern =
    /^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/;

    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;

  const handleSave = () => {
    if (!titlePattern.test(newTitle)) {
      toast.error('Title may contain only letters and appropriate symbols.');
      return;
    }
    if (!datePattern.test(newDate)) {
      toast.error('Date must be in the format "DD.MM.YYYY".');
      return;
    }

    setShowModal(false);
    dispatch(editFashionNews({ _id, title: newTitle, date: newDate }))
      .unwrap()
      .then(() => {
        toast.success('Edit success');
      })
      .catch(() => {
        toast.error('Edit error');
      });
  };

  const handleCancel = () => setShowModal(false);

  return (
    <div>
      <Modal visible={showModal} setVisible={setShowModal}>
        <form className={css.form} onSubmit={e => e.preventDefault()}>
          <div className={css.labelWrapper}>
            <label className={css.label}>Fashion news text:</label>
            <input
              className={css.field}
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              pattern={titlePattern.source}
              title="Title may contain only letters and appropriate symbols."
              required
            />
          </div>
          <div className={css.labelWrapper}>
            <label className={css.label}>Fashion news date:</label>
            <input
              className={css.field}
              type="text"
              value={newDate}
              onChange={e => setNewDate(e.target.value)}
              pattern={datePattern.source}
              title="Date must be in the format 'DD.MM.YYYY'."
              required
            />
          </div>

          <div className={css.btnWrapperModal}>
            <Button variant="clear" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="add" onClick={handleSave}>
              Yes
            </Button>
          </div>
        </form>
      </Modal>

      <div className={css.contactWrapper}>
        <div>
          <p>{title}</p>
          <p>{date}</p>
      
        </div>
        <div className={css.btnWrapper}>
          <Button variant="clear" onClick={() => setShowModal(true)}>
            Edit
          </Button>
          <Button
            variant="delete"
            onClick={() => dispatch(deleteFashionNews(_id))}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}