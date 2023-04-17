import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
import s from './RegistrationPage.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (!name.value) {
      toast(`We need a name.`);
      return;
    }

    if (!email.value) {
      toast(`We need an email.`);
      return;
    }

    if (!password.value) {
      toast(`We need a password.`);
      return;
    }

    dispatch(register(user));

    e.target.reset();
  };

  return (
    <form className={s.loginForm} onSubmit={handleSubmit}>
      <label className={s.loginFormLabel}>Name </label>
      <input
        className={s.loginFormInput}
        type="text"
        name="name"
        placeholder="Type your name"
        autoComplete="on"
      />
      <label className={s.loginFormLabel}>Email </label>
      <input
        className={s.loginFormInput}
        type="email"
        name="email"
        placeholder="Type your email"
        autoComplete="on"
      />
      <label className={s.loginFormLabel}>Password</label>
      <input
        className={s.loginFormInput}
        type="password"
        name="password"
        placeholder="Type your password"
        autoComplete="on"
      />
      <button className={s.loginFormBtn} type="submit">
        Submit
      </button>
      <iframe
        title="Fun"
        className={s.gif}
        src="https://giphy.com/embed/Ti7Yo6NnQn317jAUnc"
        alt="gif"
      ></iframe>
      <ToastContainer autoClose={2000} />
    </form>
  );
};

export default RegistrationPage;
