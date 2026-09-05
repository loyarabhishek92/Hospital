import Footer from "@/components/Footer.jsx";
import { useNavigate } from "react-router-dom";


export default function AdminPage() {
  const nav = useNavigate();
  return (
    <div>
      <div className="px-50 pt-5">
        <h1 className="font-serif font-bold text-2xl">Explore Admin dashboard</h1>

        <div className=" grid grid-cols-5 gap-5 text-3xl pt-10">
          <div onClick={() => nav('/doctorprofile')} className="h-50 w-50 cursor-pointer text-white flex items-center justify-center bg-[#1F2B6C] rounded-2xl">Doctor</div>
          <div onClick={() => nav('/serviceprofile')} className="h-50 w-50 cursor-pointer flex items-center justify-center bg-[#BFD2F8] rounded-2xl">Service</div>
          <div onClick={() => nav('/newsprofile')} className="h-50 w-50 cursor-pointer flex items-center justify-center bg-[#159EEC] rounded-2xl">News</div>
          <div onClick={() => nav('/adminappointment')} className="h-50 w-50 cursor-pointer text-white flex items-center justify-center bg-[#1F2B6C] rounded-2xl">Appointment</div>
          <div onClick={() => nav('/admincontact')} className="h-50 w-50 cursor-pointer flex items-center justify-center bg-[#BFD2F8] rounded-2xl">Contact</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
