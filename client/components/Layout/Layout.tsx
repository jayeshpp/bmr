'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { SlidingPane } from '../SlidingPane';
import { usePathname } from 'next/navigation';

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
    <>
      <Header handleOpenPane={handleOpenPane} />
      <SlidingPane isOpen={isPaneOpen} onClose={handlePanClose} />
      {children}
      <Footer />
    </>
  );
};
