import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import AppBar from 'components/AppBar';
import { Loader } from 'components/Loader/Loader';
import { authOperations, authSelectors } from './redux/auth';
import getError from './redux/selectors';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const ContactsView = lazy(() =>
  import('views/ContactsView.jsx' /* webpackChunkName: "ContactsView" */),
);
const RegisterView = lazy(() =>
  import('views/RegisterView.jsx' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('views/LoginView.jsx' /* webpackChunkName: "LoginView" */),
);
const HomeView = lazy(() =>
  import('views/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>
            </Switch>
          </Suspense>
        </>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}
