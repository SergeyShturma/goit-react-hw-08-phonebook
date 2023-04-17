// import s from 'components/App.module.css';
import { useDispatch } from 'react-redux';
// import Notification from 'components/Notification/Notification';
// import NotificationGood from 'components/NotificationGood/NotificationGood';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/user/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Layout from './Layout';
import Loader from './Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const ContactsPage = lazy(() => import('../pages/ContactPage/ContactPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
}
