import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';
import s from './LoginPage.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };

    if (!email.value) {
      toast(`We need an email.`);
      return;
    }

    if (!password.value) {
      toast(`We need a password.`);
      return;
    }

    dispatch(login(user));
    e.target.reset();
  };

  return (
    <div className={s.container}>
      <form className={s.loginForm} onSubmit={handleSubmit}>
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
          src="https://giphy.com/embed/eHRJnn8lMfskRFCyii"
          alt="gif"
        ></iframe>
      </form>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default LoginPage;
