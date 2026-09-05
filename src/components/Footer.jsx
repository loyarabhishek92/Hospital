import { NavLink } from "react-router-dom";
import { Input } from "./ui/input.jsx";




export default function Footer() {
  return (
    <div className="bg-[#1F2B6C] text-gray-50 font-work-sans mt-20">
      <div className="px-50 grid grid-cols-4 justify-between pt-10">

        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-serif font-extrabold uppercase text-[#BFD2F8]">meddical</h1>
          <p>Leading the way in Medical Execellence, Trusted Care.</p>
        </div>

        <div className="flex flex-col gap-y-7">
          <h2 className="text-xl font-extrabold">Important Links</h2>
          <nav className="flex flex-col gap-y-1.5">
            <NavLink to={'/appointment'}>Appointment</NavLink>
            <NavLink to={'/doctor'}>Doctors</NavLink>
            <NavLink to={'/service'}>Services</NavLink>
            <NavLink to={'/about'}>About Us</NavLink>
          </nav>
        </div>

        <div className="flex flex-col gap-y-7">
          <h2 className="text-xl font-extrabold">Contact Us</h2>
          <div className="flex flex-col gap-y-1.5">
            <h3>Call: (237) 681-812-255</h3>
            <h3>Email: <a href="https://mail.google.com">loyarabhishek92@gmail.com</a></h3>
            <h3>Address: 0123 Kupondole</h3>
            <h3>Nepal</h3>
          </div>
        </div>

        <div className="flex flex-col gap-y-7">
          <h2 className="text-xl font-extrabold">Newsletter</h2>
          <div className="flex flex-col gap-y-1.5 ">
            <Input type="text" placeholder="Enter your email Address" className="bg-[#BFD2F8] text-black max-w-full h-10 rounded-sm" />
          </div>
        </div>

      </div>

      <hr className="mt-10 mx-50" />

      <div className="flex justify-between px-50 pb-20 pt-10">
        <h2>&copy; 2026 Gupta Care pvt.ltd All Rights Reserved by DevMERNyar.Coder</h2>
        <div className="flex">
          <div><a href="">linkedin icon</a></div>
          <div><a href="">facebook icon</a></div>
          <div><a href="">insta icon</a></div>
        </div>

      </div>

    </div >
  )
}
