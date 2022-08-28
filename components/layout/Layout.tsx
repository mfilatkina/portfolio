import Navbar from "../navbar/Navbar";
import { LayoutProps } from "./Layout.props";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
