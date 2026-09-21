import { NavLink } from "react-router-dom";
import { Input } from "./ui/input.jsx";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SendIcon } from "lucide-react";




export default function Footer() {
  return (
    <div className="bg-[#1F2B6C] text-gray-50 font-work-sans">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between pt-10 mx-auto px-5 mt-20 max-w-7xl lg:px-8">

        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl font-serif font-extrabold uppercase text-[#BFD2F8]">meddical</h1>
          <p>Leading the way in Medical Execellence, Trusted Care.</p>
        </div>

        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:space-x-10">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-extrabold">Important Links</h2>
            <nav className="flex flex-col gap-y-1.5">
              <NavLink to={'/appointment'}>Appointment</NavLink>
              <NavLink to={'/doctor'}>Doctors</NavLink>
              <NavLink to={'/service'}>Services</NavLink>
              <NavLink to={'/about'}>About Us</NavLink>
            </nav>
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-extrabold">Contact Us</h2>
            <div className="flex flex-col gap-y-1.5">
              <h3>Call: (237) 681-812-255</h3>
              <h3>Email: <a href="https://mail.google.com">loyarabhishek92@gmail.com</a></h3>
              <h3>Address: 0123 Kupondole</h3>
              <h3>Nepal</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-7">
          <h2 className="text-xl font-extrabold">Newsletter</h2>
          <div className="relative flex items-center gap-y-1.5 ">
            <Input type="text" placeholder="Enter your email Address" className="bg-[#BFD2F8] text-black max-w-full h-10 rounded-sm" />
            <div className="absolute right-2">
              <SendIcon className="text-[#1F2B6C]" />
            </div>
          </div>
        </div>

      </div>

      <hr className="mt-10  mx-auto px-5 max-w-7xl lg:px-8" />

      <div className="flex flex-wrap justify-between items-center gap-5 pb-10 lg:pb-20 pt-5 lg:pt-10 mx-auto px-5 mt-10 lg:mt-20 max-w-7xl lg:px-8">
        <h2>&copy; 2026 Gupta Care pvt.ltd All Rights Reserved by DevMERNyar.Coder</h2>

        {/* social media icon  */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#BFD2F8] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8dabe7]"
          >
            <FaLinkedinIn size={15} className="text-[#1F2B6C]" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#BFD2F8] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8dabe7]"
          >
            <FaFacebookF size={15} className="text-[#1F2B6C]" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#BFD2F8] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8dabe7]"
          >
            <FaInstagram size={15} className="text-[#1F2B6C]" />
          </a>

        </div>

      </div>

    </div >
  )
}
