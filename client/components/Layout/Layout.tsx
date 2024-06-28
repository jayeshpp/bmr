'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { SlidingPane } from '../SlidingPane';
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/context/ThemeProvider';

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  const [isPaneOpen, setPaneOpen] = useState(false);
  const pathname = usePathname();

  const handlePanClose = () => {
    setPaneOpen(false);
  };

  const handleOpenPane = () => {
    setPaneOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    setPaneOpen(false);
  }, [pathname]);

  return (
    <ThemeProvider>
      <Header handleOpenPane={handleOpenPane} />
      <SlidingPane isOpen={isPaneOpen} onClose={handlePanClose} />
      {children}
      <Footer />
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </ThemeProvider>
  );
};
