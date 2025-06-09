import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { Spinner } from './components/Spinner/Spinner.jsx';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/operations.js';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Register = lazy(() => import('./pages/Register/Register.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const FashionNews = lazy(() => import('./pages/FashionNews/FashionNews.jsx'));
const FavoriteNewsPage = lazy(() =>
  import('./pages/FavoriteNewsPage/FavoriteNewsPage.jsx')
);
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
    <div
      style={{
        position: 'fixed',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '19',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <style>
        {`
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  `}
      </style>
      <b
        style={{
          fontSize: 18,
          marginBottom: '10px',
          color: '#f47e60',
          textShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
          animation: 'pulse 1.5s infinite',
        }}
      >
        Refreshing user...
      </b>

      <Spinner />
    </div>
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
        <Route
          path="/favorite-news"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<FavoriteNewsPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
