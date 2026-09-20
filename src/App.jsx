import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
const About = lazy(() => import("./pages/about/About.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));
const Service = lazy(() => import("./pages/services/Service.jsx"));
const Doctor = lazy(() => import("./pages/doctors/Doctor.jsx"));
const News = lazy(() => import("./pages/news/News.jsx"));
const Contact = lazy(() => import("./pages/contacts/Contact.jsx"));
const Register = lazy(() => import("./features/auth/Register.jsx"));
const Login = lazy(() => import("./features/auth/Login.jsx"));
const UserProfile = lazy(() => import("./features/user/UserProfile.jsx"));
const AdminPage = lazy(() => import("./features/admin/AdminPage.jsx"));
const DoctorProfile = lazy(() => import("./features/admin/add/doctor/DoctorProfile.jsx"));
const AddDoctor = lazy(() => import("./features/admin/add/doctor/form/AddDoctor.jsx"));
const EditDoctor = lazy(() => import("./features/admin/add/doctor/form/EditDoctor.jsx"));
const ServiceProfile = lazy(() => import("./features/admin/add/service/ServiceProfile.jsx"));
const AddService = lazy(() => import("./features/admin/add/service/form/AddService.jsx"));
const EditService = lazy(() => import("./features/admin/add/service/form/EditService.jsx"));
const NewsProfile = lazy(() => import("./features/admin/add/news/NewsProfile.jsx"));
const AddNews = lazy(() => import("./features/admin/add/news/form/AddNews.jsx"));
const EditNews = lazy(() => import("./features/admin/add/news/form/EditNews.jsx"));
const AppointmentProfile = lazy(() => import("./features/admin/watch/AppointmentProfile.jsx"));
const ContactProfile = lazy(() => import("./features/admin/watch/ContactProfile.jsx"));
const Appointment = lazy(() => import("./pages/appointment/Appointment.jsx"));
const NewsDetails = lazy(() => import("./pages/news/NewsDetails.jsx"));
const DoctorDetails = lazy(() => import("./pages/doctors/DoctorDetails.jsx"));
const ServiceDetails = lazy(() => import("./pages/services/ServiceDetails.jsx"));
const Try = lazy(() => import("./components/Try.jsx"));





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
          path: 'service/:id',
          element: <ServiceDetails />
        },
        {
          path: '/doctor',
          element: <Doctor />
        },
        {
          path: 'doctor/:id',
          element: <DoctorDetails />
        },
        {
          path: '/news',
          element: <News />
        },
        {
          path:'news/:id',
          element: <NewsDetails />
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
          path: '/try',
          element: <Try />
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
      <Suspense fallback={<div>Loading....</div>}>
      <RouterProvider router={router} />
      </Suspense>
    </div>

  )
}
