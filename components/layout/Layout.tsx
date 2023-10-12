import HomeNavbar from '@components/home/HomeNavbar';
import Navbar from '@components/layout/Navbar';
import { LayoutProps } from '@interfaces/layout';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
  const overWriteChakraTheme =
    'flex flex-col min-h-screen text-base overflow-x-hidden';
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className="space-between relative flex min-h-screen flex-col">
      <div className={overWriteChakraTheme}>
        {!isSSR && window.location.pathname !== '/' && <Navbar />}
        {!isSSR && window.location.pathname === '/' && <HomeNavbar />}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
