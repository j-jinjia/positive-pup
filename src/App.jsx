import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Testimonials from "./pages/Testimonials/Testimonials";
import Gallery from "./pages/Gallery/Gallery";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import BookNow from "./pages/BookNow/BookNow";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
