import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/operations.js';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Register = lazy(() => import('./pages/Register/Register.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const FashionNews = lazy(() => import('./pages/FashionNews/FashionNews.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/fashion-news"
              component={<Register />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/fashion-news" component={<Login />} />
          }
        />
        <Route
          path="/fashion-news"
          element={
            <PrivateRoute redirectTo="/login" component={<FashionNews />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
