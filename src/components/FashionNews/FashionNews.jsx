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

export default function FashionNews({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const namePattern =
    /^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/;
  const datePattern =
    /^(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4}$/;

  const handleSave = () => {
    if (!namePattern.test(newName)) {
      toast.error('Name may contain only letters and appropriate symbols.');
      return;
    }
    if (!datePattern.test(newNumber)) {
      toast.error('Date must be in the format "Month YYYY".');
      return;
    }

    setShowModal(false);
    dispatch(editFashionNews({ id, name: newName, number: newNumber }))
      .unwrap()
      .then(() => {
        toast.success('Edit success');
      })
      .catch(() => {
        toast.error('Edit error');
      });
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal visible={showModal} setVisible={setShowModal}>
        <form className={css.form} onSubmit={e => e.preventDefault()}>
          <div className={css.labelWrapper}>
            <label className={css.label}>Fashion news text:</label>
            <input
              className={css.field}
              type="text"
              value={newName}
              onChange={handleNameChange}
              pattern={namePattern.source}
              title="Name may contain only letters and appropriate symbols."
              required
            />
          </div>
          <div className={css.labelWrapper}>
            <label className={css.label}>Fashion news date:</label>
            <input
              className={css.field}
              type="text"
              value={newNumber}
              onChange={handleNumberChange}
              pattern={datePattern.source}
              title="Date must be in the format 'Month YYYY'."
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
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <div className={css.btnWrapper}>
          <Button variant="clear" onClick={() => setShowModal(true)}>
            Edit
          </Button>
          <Button
            variant="delete"
            onClick={() => dispatch(deleteFashionNews(id))}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
