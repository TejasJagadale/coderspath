import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import HtmlPage from "./pages/HtmlPage";
import CssPage from "./pages/CssPage";
import JavaScriptPage from "./pages/JavaScriptPage";
import ReactPage from "./pages/ReactPage";
import NodePage from "./pages/NodePage";
import PythonPage from "./pages/PythonPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/main.css";
import SearchPage from "./components/SearchPage";
import ReactPerformance from "./pages/react-performance";
import CssGrid from "./pages/css-grid";
import JavaScriptPromises from "./pages/javascript-promises";
import NodeSecurity from "./pages/node-security";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TandC from "./components/TandC";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/html" element={<HtmlPage />} />
              <Route path="/css" element={<CssPage />} />
              <Route path="/javascript" element={<JavaScriptPage />} />
              <Route path="/react" element={<ReactPage />} />
              <Route path="/node" element={<NodePage />} />
              <Route path="/python" element={<PythonPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/articles/react-performance"
                element={<ReactPerformance />}
              />
              <Route path="/articles/css-grid" element={<CssGrid />} />
              <Route
                path="/articles/javascript-promises"
                element={<JavaScriptPromises />}
              />
              <Route
                path="/articles/node-security"
                element={<NodeSecurity />}
              />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/termsandconditions" element={<TandC />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
