import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Header } from 'components/Header/Header';
import s from '../ContactPage/ContactPage.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { getContacts } from 'redux/operations';
import { useEffect } from 'react';
import NotificationGood from 'components/NotificationGood/NotificationGood';
import Notification from 'components/Notification/Notification';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isContacts = Boolean(useSelector(getFilteredContacts).length);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <h1 className={s.title}> Contacts</h1>
      <div className={s.contactsWrapper}>
        <ContactForm />
        <>
          {isContacts ? (
            <>
              <Filter />
              <ContactList />
              <NotificationGood />
            </>
          ) : (
            <Notification />
          )}
        </>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}
