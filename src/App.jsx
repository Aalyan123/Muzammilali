import Navbar from "./HomePage/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Services from "./Services/Allservices";
import HomePage from "./HomePage/FinalHomePage";
import About from "./About/FinalAbout";
import AppLayout from "./Layout/Layout"
import Portfolio from "./Portfolio/FinalPortfolio";
import Contact from "./Contact/FinalContact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
      {
      path: "/",
      element: <HomePage/>
    },
      {
      path: "/services",
      element: <Services/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/portfolio",
      element: <Portfolio/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
      ]
    },
    
  ])
    return <RouterProvider router={router} />;

};

export default App;















  
  // return (
  //   <>
  //     {/* <Navbar />
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/services" element={<Services />} />
       
  //     </Routes> */}
  //   </>
  // );
