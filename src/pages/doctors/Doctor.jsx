import doctor from '@/assets/images/doctor.png';
import appointmentCover from '@/assets/images/appointmentCover.png';
import doctorheader from '@/assets/images/doctorheader.png';
import Footer from '@/components/Footer.jsx';
import CommonNews from '@/components/CommonNews.jsx';
import ContactContainer from '@/components/ContactContainer.jsx';
import vector from '@/assets/images/vector.png';
import { useGetDoctorsQuery } from '@/features/admin/add/doctor/doctorApi.js';
import { useNavigate } from 'react-router-dom';
import { base } from '@/app/mainApi.js';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Doctor() {
   const { data, isLoading, isError } = useGetDoctorsQuery();
  const nav = useNavigate();

   if (isLoading) {
      return (
        <section className="py-20 text-center">
          Loading doctors...
        </section>
      );
    }
  
    if (isError) {
      return (
        <section className="py-20 text-center text-red-500">
          Failed to load doctors.
        </section>
      );
    }
 
  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${doctor})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

          <div className="w-full text-[#202f72]">

            {/* Small Heading */}
            <div className="flex gap-x-2 font-medium tracking-wider">
              <span>Home</span>
              <span>/</span>
              <span>Doctor</span>

            </div>



            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold text-[#202f72]">Our Doctors</h1>



          </div>

        </div>
      </section>


      {/* doctor section  */}
      <div className='mx-auto px-5 max-w-7xl lg:px-8 mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.doctors?.map((doctor) => (
          <div key={doctor._id} className='rounded-sm'>
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
        ))}

      </div>
    



      {/* doctor review section  */}
      <div className="relative min-h-130 overflow-hidden mt-15 flex justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${doctorheader})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-[#202f72] opacity-50"></div>


        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center text-white space-y-6 w-150 my-15">


          <img src={vector} alt="imag" />


          {/* Main Heading */}
          <h1 className="font-serif text-xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque ut ipsam cumque esse qui praesentium magnam ipsum nostrum consectetur.</h1>

          <h1 className='font-serif font-bold text-xl'>John Doe</h1>


        </div>

      </div>






      {/* common news section  */}
      <CommonNews />


      {/* contact section  */}
      <ContactContainer />

      {/* footer section  */}
      <Footer />

    </div>
  )
}
