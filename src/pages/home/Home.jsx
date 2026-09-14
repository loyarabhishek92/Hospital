import doctorphoto from '@/assets/images/doctor.png'
import appointmentCover from '@/assets/images/appointmentCover.png'
import hero from "@/assets/images/hero.png";
import homeApp from '@/assets/images/homeApp.png';
import AppointmentForm from "@/components/AppointmentForm.jsx";
import CommonDoctor from "@/components/CommonDoctor.jsx";
import CommonNews from "@/components/CommonNews.jsx";
import ContactContainer from "@/components/ContactContainer.jsx";
import Footer from "@/components/Footer.jsx";
import { useGetDoctorsQuery } from "@/features/admin/add/doctor/doctorApi.js";
import { ArrowRight, HeartPulse } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useGetServicesQuery } from '@/features/admin/add/service/serviceApi.js';

export default function Home() {
  const { data, isLoading, error } = useGetDoctorsQuery();
  const { data: service } = useGetServicesQuery();
  const nav = useNavigate();

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.data}</h1>
  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>


        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 lg:px-10">

          <div className="max-w-2xl">

            {/* Small Heading */}
            <p className="mb-4 text-lg font-bold uppercase tracking-[0.3em] text-sky-500">
              Caring for Life
            </p>

            {/* Main Heading */}
            <h1 className="max-w-xl font-serif text-5xl font-bold leading-[1.15] text-[#202f72] md:text-6xl">
              Leading the Way
              <br />
              in Medical Excellence
            </h1>

            {/* Button */}
            <button
              className="mt-10 rounded-full bg-[#c3d5ff] px-11 py-4 
                       text-lg font-semibold text-[#202f72]
                       transition duration-300
                       hover:bg-[#202f72] hover:text-white
                       hover:shadow-lg"
            >
              Our Services
            </button>

          </div>
        </div>
      </section>

      {/* about section  */}
      <div className='mx-50 mt-15 flex flex-col items-center justify-center space-y-2'>

        <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">welcome to meddical </h2>
        <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">A Great Place to Receive Care</h1>
        <div className='flex flex-col items-center mt-5'>
          <span>Lorem ipllo dignissimos in libero eum?Lorem ipsum dolor sit amet.</span>
          <span>Lorem ipllo dignissimos in libero eum? Lorem ipsum dolor sit ametipisicing elit. Fugiat, recusandae.</span>
        </div>
        <div className='flex mt-5 space-x-2 cursor-pointer' onClick={() => nav('/about')}>
          <h1 className='text-blue-400'>Learn More </h1>
          <ArrowRight />
        </div>


      </div>


      {/* doctor cover photo */}
      <div className="relative overflow-hidden mx-50 mt-15">
        <img src={doctorphoto} alt="image" className="w-full h-full object-cover" />
        <img src={appointmentCover} alt="image" className="absolute inset-0 w-full h-full object-cover " />
      </div>


      {/* our services  */}
      <div className='mx-50'>
        <div className=" mt-20 flex flex-col gap-x-5 justify-center items-center">
          <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">care you can belive in </h2>
          <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">Our services</h1>
        </div>


        {/* grid section  */}
        <div className='grid grid-cols-6 space-x-5 mt-15'>

          {/* service part  */}
          <div className='relative border-2 border-gray-200 rounded-sm'>
            {service.services?.map((serviceItem, index) => (
              <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer  h-30 hover:bg-[#253477] hover:text-gray-200 hover:rounded-sm" key={index} onClick={() => nav(`/service/${serviceItem._id}`)}>
                <HeartPulse />
                <h1 className="font-serif" >{serviceItem.name}</h1>
              </div>
            ))}

            <h1 className=' p-2 absolute w-full bottom-0 text-center cursor-pointer bg-[#253477] text-gray-200 rounded-b-sm' onClick={() => nav('/service')}>View All</h1>

          </div>

          {/* content part  */}
          <div className='col-span-3'>
            <div className='flex flex-col space-y-4 mt-10'>
              <h1 className='font-serif font-bold text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, nam.</h1>

              {/* bullet content  */}
              <div className='grid grid-cols-2 gap-8 mb-10'>
                <div className='flex space-x-3 items-center'>
                  <div className='h-4 w-4 rounded-full bg-blue-400'></div>
                  <h1 className='font-serif font-bold'>A Passion for Healing</h1>
                </div>
                <div className='flex space-x-3 items-center'>
                  <div className='h-4 w-4 rounded-full bg-blue-400'></div>
                  <h1 className='font-serif font-bold'>A Passion for Healing</h1>
                </div>
                <div className='flex space-x-3 items-center'>
                  <div className='h-4 w-4 rounded-full bg-blue-400'></div>
                  <h1 className='font-serif font-bold'>A Passion for Healing</h1>
                </div>
                <div className='flex space-x-3 items-center'>
                  <div className='h-4 w-4 rounded-full bg-blue-400'></div>
                  <h1 className='font-serif font-bold'>A Passion for Healing</h1>
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo incidunt sapiente vitae, architecto optio nostrum exercitationem error a tempore sint asperiores voluptates eius reprehenderit aut nesciunt ipsum, corrupti quidem reiciendis eos ullam voluptate eaque. Quidem dicta eveniet optio, explicabo necessitatibus corporis placeat fugit ea odio voluptatum expedita veritatis error!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis repellendus perspiciatis veniam quisquam sed aperiam doloremque harum, assumenda natus vero!</p>
            </div>
          </div>


          {/* picture part  */}
          <div className='bg-amber-800 col-span-2'>
            third column
          </div>
        </div>

      </div>



      {/* our specialist  */}
      <div className="mx-50">
        <div className=" mt-25 flex flex-col gap-x-5 justify-center items-center">
          <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Always caring </h2>
          <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">Our Specialties</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20">

          {data.doctors?.map((doctor, index) => (
            <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer border-2 border-gray-100 h-50 hover:bg-[#253477] hover:text-gray-200 hover:rounded-sm" key={index}>
              <HeartPulse />
              <h1 className="font-serif">{doctor.specialist}</h1>


            </div>
          ))}


        </div>
      </div>


      {/* appointment form  */}
      <div className="mt-15">
        <section className="relative min-h-200 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${homeApp})` }}></div>
          <div className="absolute inset-0 bg-cover bg-center bg-white opacity-80"></div>




          <div className="absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-30 items-center w-full h-fit px-50">

            <div className="flex flex-col space-y-3">
              <h1 className="text-[#159EEC] text-4xl font-bold font-serif">Book an Appointment</h1>
              <p className="font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat recusandae architecto impedit culpa, explicabo illo dolore! Ratione officia repellat id facere, tempora alias, distinctio odio numquam nemo perferendis ipsa aperiam, facilis vitae. Blanditiis, debitis saepe. Dolor facilis magnam consequatur quisquam, eaque dolorum ut officia corporis aspernatur unde dolore! Magnam.</p>
            </div>


            <AppointmentForm />


          </div>
        </section>
      </div>




      {/* common doctor section  */}
      <div className=" mt-20 flex flex-col gap-x-5 justify-center items-center">
        <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">trusted care </h2>
        <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">Our Doctors</h1>
      </div>
      <CommonDoctor />


      {/* common news section  */}
      <CommonNews />

      {/* contact container section  */}
      <ContactContainer />

      {/* footer section  */}
      <Footer />

    </div >
  )
}
