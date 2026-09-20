import { base } from "@/app/mainApi.js";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function DoctorCard({doctor}) {
    const nav = useNavigate();
    return (

        <div className='rounded-sm'>
            <img src={`${base}/${doctor.image}`} alt="image" className='rounded-t-sm object-cover h-100 w-full' />
            <div className='flex flex-col items-center space-y-2 py-5 bg-[#BFD2F8]'>
                <h1>Dr. {doctor.name}</h1>
                <h1 className='text-2xl font-bold tracking-wider'>{doctor.specialist}</h1>

                {/* doctor social media icon  */}
                <div className="flex items-center gap-3">
                    {/* LinkedIn */}
                    <a
                        href={doctor.linkedinId}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2B6C] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#101846]"
                    >
                        <FaLinkedinIn size={15} className="text-[#BFD2F8]" />
                    </a>

                    {/* Facebook */}
                    <a
                        href={doctor.facebookId}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2B6C] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#101846]"
                    >
                        <FaFacebookF size={15} className="text-[#BFD2F8]" />
                    </a>

                    {/* Instagram */}
                    <a
                        href={doctor.instagramId}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2B6C] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#101846]"
                    >
                        <FaInstagram size={15} className="text-[#BFD2F8]" />
                    </a>
                </div>



            </div>

            <div className='text-center py-3 bg-[#202f72] text-[#BFD2F8] rounded-b-sm cursor-pointer' onClick={() => nav(`/doctor/${doctor._id}`)}>
                View Profile
            </div>
        </div>





    )
}
