import Footer from "@/components/Footer.jsx";
import { useNavigate } from "react-router-dom";


export default function AdminPage() {
  const nav = useNavigate();
  return (
    <div>
      <div className=" mt-5 mx-auto px-5 max-w-7xl lg:px-8">
        <h1 className="font-serif font-bold text-2xl">Explore Admin dashboard</h1>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-5 text-3xl pt-10">


          <div onClick={() => nav('/doctorprofile')} className="overflow-hidden h-50 w-full border-1 border-[rgba(255,165,0,0.5)] rounded-2xl shadow-md hover:shadow-xl transition duration-300 group cursor-pointer bg-[#1F2B6C] text-white"><h1 className="w-full h-full object-cover group-hover:scale-105 transition duration-300 flex items-center justify-center">Doctor</h1></div>


          <div onClick={() => nav('/serviceprofile')} className="h-50 w-full cursor-pointer flex items-center justify-center bg-[#BFD2F8] rounded-2xl">Service</div>


          <div onClick={() => nav('/newsprofile')} className="h-50 w-full cursor-pointer flex items-center justify-center bg-[#159EEC] rounded-2xl">News</div>


          <div onClick={() => nav('/adminappointment')} className="h-50 w-full cursor-pointer text-white flex items-center justify-center bg-[#1F2B6C] rounded-2xl">Appointment</div>


          <div onClick={() => nav('/admincontact')} className="overflow-hidden h-50 w-full border-1 border-[rgba(255,165,0,0.5)] rounded-2xl shadow-md hover:shadow-xl transition duration-300 group cursor-pointer bg-[#BFD2F8] "><h1 className="w-full h-full object-cover group-hover:scale-105 transition duration-300 flex items-center justify-center">Contact</h1></div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
