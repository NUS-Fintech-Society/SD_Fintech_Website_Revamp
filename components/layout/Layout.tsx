import NavBar from '@components/layout/Navbar';
import { LayoutProps } from '@interfaces/layout';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
  const overWriteChakraTheme = 'font-primary overflow-x-hidden';
  return (
    <div className={overWriteChakraTheme}>
      <NavBar />
      <div className="pt-[88px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
