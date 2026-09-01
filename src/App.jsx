
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import NotFound from "./components/NotFound.jsx";
import Service from "./pages/services/Service.jsx";
import Doctor from "./pages/doctors/Doctor.jsx";
import News from "./pages/news/News.jsx";
import Contact from "./pages/contacts/Contact.jsx";
import Register from "./features/auth/Register.jsx";
import Login from "./features/auth/Login.jsx";
import UserProfile from "./features/user/UserProfile.jsx";
import AdminPage from "./features/admin/AdminPage.jsx";
import DoctorProfile from "./features/admin/add/doctor/DoctorProfile.jsx";



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
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/profile',
          element: <UserProfile />
        },
        {
          path: 'admin',
          element: <AdminPage />
        },
        {
          path: 'doctorprofile',
          element: <DoctorProfile />
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
