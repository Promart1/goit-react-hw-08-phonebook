import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/operations';
import { useAuth } from 'hooks';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './page/login/LoginPage';
import RegisterPage from './page/register/RegisterPage';
import ProtectedRoute from 'routes/ProtectedRoute';
import { Contacts } from './page/contacts/Contacts';
import NotFound from './page/notFound/NotFound';
import { ClipLoader } from 'react-spinners';
import { selectIsRefreshing } from 'redux/selectors';
import Layout from './Layout/Layout';
import Home from './page/home/Home';
import PublicRoute from 'routes/PublicRoute';

export const App = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (isRefreshing) {
    return <ClipLoader color="#36d7b7" size={50} />;
  }
  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/singup"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Contacts />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
