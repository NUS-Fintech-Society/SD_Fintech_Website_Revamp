import HomeNavbar from '@components/home/HomeNavbar';
import Navbar from '@components/layout/Navbar';
import { LayoutProps } from '@interfaces/layout';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
  const overWriteChakraTheme = 'text-base overflow-x-hidden';
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className={overWriteChakraTheme}>
      {!isSSR && window.location.pathname != '/' && <Navbar />}
      {!isSSR && window.location.pathname == '/' && <HomeNavbar />}
      <div className="pt-[74px] ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
