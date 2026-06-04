import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";

import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
import FAQ from "./components/Pages/FAQ.jsx";
import Contact from "./components/Pages/Contact.jsx";
import About from "./components/about.jsx";
import Press from "./components/Pages/Press.jsx";
import Warenty from "./components/Pages/Warenty.jsx";

 
import Laptops from "./components/Pages/Laptops.jsx";
import Smartphone from "./components/Pages/SmartPhone.jsx";


// ✅ Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

// ✅ Scroll
import ScrollToTop from "./components/ScrollToTop.jsx";

// ✅ Layout
function Layout({ children }) {
  const location = useLocation();

  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(
    location.pathname
  );

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">

      {/* ScrollToTop */}
      <ScrollToTop />

      {/* NAVBAR */}
      {!hideLayout && <Navbar />}

      {/* CONTENT */}
      <div className="flex-1">
        {children}
      </div>

      {/* FOOTER */}
      {!hideLayout && <Footer />}

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer Pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/FAQ" element={<Layout><FAQ /></Layout>} />
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/press" element={<Layout><Press /></Layout>} />
        <Route path="/warranty" element={<Layout><Warenty /></Layout>} />


    
        <Route path="/laptops" element={<Layout><Laptops /></Layout>} />
        <Route path="/smartphones" element={<Layout><Smartphone /></Layout>} />

        {/* Admin Pages */}
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center py-12 font-sans">
                404: Page Not Found
              </div>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;