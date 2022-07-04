import NavBar from "@components/layout/Navbar";
import { LayoutProps } from "@interfaces/layout";
import Footer from "./Footer";

const Layout = ({ children }: LayoutProps) => {
  const overWriteChakraTheme = 'font-primary';
  return (
    <div className={overWriteChakraTheme}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
