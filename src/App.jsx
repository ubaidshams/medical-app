import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";

const App = () => {
  return (
    <ParallaxProvider>
      <Router>
        <Navbar />
        <CustomRoutes />
        <Footer />
      </Router>
    </ParallaxProvider>
  );
};

export default App;
