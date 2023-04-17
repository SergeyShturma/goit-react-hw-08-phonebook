import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts, getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import s from './ContactList.module.css';
import Loader from 'components/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <span>
              {name}: {number}
            </span>
            <button
              className={s.button}
              type="button"
              onClick={() => handleDelete(id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
