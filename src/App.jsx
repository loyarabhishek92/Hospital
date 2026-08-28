
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import NotFound from "./components/NotFound.jsx";
import Service from "./pages/services/Service.jsx";
import Doctor from "./pages/doctors/Doctor.jsx";
import News from "./pages/news/News.jsx";
import Contact from "./pages/contacts/Contact.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/service',
          element: <Service />
        },
        {
          path: '/doctor',
          element: <Doctor />
        },
        {
          path: '/news',
          element: <News />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}
