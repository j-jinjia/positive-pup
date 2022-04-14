import Footer from "../Footer/Footer";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
