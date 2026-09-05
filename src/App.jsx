
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
import AddDoctor from "./features/admin/add/doctor/form/AddDoctor.jsx";
import EditDoctor from "./features/admin/add/doctor/form/EditDoctor.jsx";
import ServiceProfile from "./features/admin/add/service/ServiceProfile.jsx";
import AddService from "./features/admin/add/service/form/AddService.jsx";
import EditService from "./features/admin/add/service/form/EditService.jsx";
import NewsProfile from "./features/admin/add/news/NewsProfile.jsx";
import AddNews from "./features/admin/add/news/form/AddNews.jsx";
import EditNews from "./features/admin/add/news/form/EditNews.jsx";
import AppointmentProfile from "./features/admin/watch/AppointmentProfile.jsx";
import ContactProfile from "./features/admin/watch/ContactProfile.jsx";
import Appointment from "./pages/appointment/Appointment.jsx";




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
          path: '/appointment',
          element: <Appointment />
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
          path: 'form/addDoctor',
          element: <AddDoctor />
        },
        {
          path: 'form/editDoctor/:id',
          element: <EditDoctor />
        },
        {
          path: 'serviceprofile',
          element: <ServiceProfile />
        },
        {
          path: 'form/addService',
          element: <AddService />
        },
        {
          path: 'form/editService/:id',
          element: <EditService />
        },
        {
          path: 'newsprofile',
          element: <NewsProfile />
        },
        {
          path: 'form/addNews',
          element: <AddNews />
        },
        {
          path: 'form/editNews/:id',
          element: <EditNews />
        },
        {
          path: 'adminappointment',
          element: <AppointmentProfile />
        },
        {
          path: 'admincontact',
          element: <ContactProfile />
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
