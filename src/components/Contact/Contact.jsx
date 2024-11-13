import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
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
            <label className={css.lable}>New Name:</label>
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
            <label className={css.lable}>New Number:</label>
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

          <div className={css.BtnWrapperModal}>
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
          <p>
            {' '}
            <FaUserAlt className={css.icon} size="18" />
            {name}
          </p>
          <p>
            {' '}
            <FaPhone className={css.icon} size="18" />
            {number}
          </p>
        </div>
        <div className={css.BtnWrapper}>
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
