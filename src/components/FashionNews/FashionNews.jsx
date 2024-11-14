import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import css from './FashionNews.module.css';

export default function FashionNews({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContact({ id: id, name: newName, number: newNumber }))
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
        <form className={css.form}>
          <div className={css.labelWrapper}>
            <label className={css.lable}>Fashion news text:</label>
            <input
              className={css.field}
              type="text"
              value={newName}
              onChange={handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
              title="Name may contain only letters."
              required
            />
          </div>
          <div className={css.labelWrapper}>
            <label className={css.lable}>Fashion news date:</label>
            <input
              className={css.field}
              type="text"
              value={newNumber}
              onChange={handleNumberChange}
              pattern=" /^[Z0-9]+$/"
              title="Phone number format "
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
          <Button variant="delete" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
