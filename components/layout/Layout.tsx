import NavBar from '@components/layout/Navbar';
import { LayoutProps } from '@interfaces/layout';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
  const overWriteChakraTheme = 'text-base overflow-x-hidden';
  return (
    <div className={overWriteChakraTheme}>
      <NavBar />
      <div className="pt-[74px] ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
