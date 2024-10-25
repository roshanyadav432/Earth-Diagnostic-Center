import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import MyModal from "./components/MyModal";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:name" element={<MyModal />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="*"
          element={
            <center>
              <h1>Oops!! </h1>
              <h2>No page Found</h2>
              <Link to={"/"}>Home Page</Link>
            </center>
          }
        />
      </Routes>
    </>
  );
}

export default App;
