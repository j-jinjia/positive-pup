import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Services from "./component/Services/Services";
import NotFound from "./component/NotFound/NotFound";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
