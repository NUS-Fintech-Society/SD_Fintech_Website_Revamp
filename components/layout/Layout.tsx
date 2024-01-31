import HomeNavbar from '@components/home/HomeNavbar';
import Navbar from '@components/layout/Navbar';
import { LayoutProps } from '@interfaces/layout';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
  const overWriteChakraTheme = 'min-h-screen text-base overflow-x-hidden';
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className={overWriteChakraTheme}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
