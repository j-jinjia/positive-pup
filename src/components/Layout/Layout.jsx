import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
