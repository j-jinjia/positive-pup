import Footer from "../Footer/Footer";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__children"> {children} </div>
      <Footer />
    </div>
  );
};
export default Layout;
