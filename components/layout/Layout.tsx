import NavBar from "@components/layout/Navbar";
import { LayoutProps } from "@interfaces/layout";

const Layout = ({ children }: LayoutProps) => {
  const overWriteChakraTheme = "font-primary";
  return (
    <div className={overWriteChakraTheme}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
