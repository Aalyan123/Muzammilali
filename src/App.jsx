// App.js
import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

import ScrollToTop from "./ScrollTop";
import Navbar from "./HomePage/Navbar";
import Services from "./Services/Allservices";
import HomePage from "./HomePage/FinalHomePage";
import About from "./About/FinalAbout";
import AppLayout from "./Layout/Layout";
import Portfolio from "./Portfolio/FinalPortfolio";
import Contact from "./Contact/FinalContact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/services", element: <Services /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-white">
          <RingLoader color="#8925F7" size={70} />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
};

export default App;
