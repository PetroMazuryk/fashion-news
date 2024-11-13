import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
import { ToasterBar } from './ToasterBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToasterBar />
    </div>
  );
};
