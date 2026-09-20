import doctorphoto from '@/assets/images/doctor.png'
import appointmentCover from '@/assets/images/appointmentCover.png'
import homeApp from '@/assets/images/homeApp.png';
import serviceimg1 from '@/assets/images/serviceimg1.png';
import serviceimg2 from '@/assets/images/serviceimg2.png';
import h1 from '@/assets/images/h1.png';
import h2 from '@/assets/images/h2.png';
import h3 from '@/assets/images/h3.png';
import h4 from '@/assets/images/h4.png';
import h5 from '@/assets/images/h5.png';

import AppointmentForm from "@/components/AppointmentForm.jsx";
import CommonDoctor from "@/components/CommonDoctor.jsx";
import CommonNews from "@/components/CommonNews.jsx";
import ContactContainer from "@/components/ContactContainer.jsx";
import Footer from "@/components/Footer.jsx";
import { useGetDoctorsQuery } from "@/features/admin/add/doctor/doctorApi.js";
import { ArrowRight, HeartPulse } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useGetServicesQuery } from '@/features/admin/add/service/serviceApi.js';
import { Button } from '@/components/ui/button.jsx';
import { Spinner } from '@/components/ui/spinner.jsx';

export default function Home() {
  const { data, isLoading, isError } = useGetDoctorsQuery();
  const { data: service } = useGetServicesQuery();
  const nav = useNavigate();

  if (isLoading) {
        return (
            <section className="py-20  flex items-center justify-center">
                <Spinner className={"size-30 text-blue-400"}/> 
                <h1>Loading page...</h1>
            </section>
        );
    }

    if (isError) {
        return (
            <section className="py-20 text-center text-red-500">
                Failed to load page.
            </section>
        );
    }
  return (
    <div>
      {/* hero section  */}
      <section className="relative overflow-hidden">
        <img src={h1} alt="image" className="w-full h-full object-cover" />
        <img src={h2} alt="image" className="absolute inset-0 w-full h-full object-cover " />
        <img src={h3} alt="image" className="absolute inset-0 w-full h-full object-cover " />
        <img src={h4} alt="image" className="absolute inset-0 w-full h-full object-cover " />
        <img src={h5} alt="image" className="absolute inset-0 w-full h-full object-cover " />

        {/* main container  */}
        <div className='absolute inset-0 w-full h-full flex flex-col justify-center items-center lg:items-start space-y-1 lg:space-y-3 mx-auto max-w-7xl px-5 lg:px-8'>
          <h2 className="uppercase text-blue-400 text-xl tracking-wider font-medium ">caring for life</h2>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold tracking-wider text-[#253477]">Leading the Way <br /> in Medical Excellence </h1>

          <Button className="text-black mt-5 lg:mt-10 w-fit px-10 py-6 rounded-full" onClick={() => nav('/service')}>Our Services</Button>
        </div>


        {/* BOTTOM CARDS */}
        <div
          className="
          lg:absolute bottom-0 left-1/2 z-20 lg:grid w-full max-w-[1240px] -translate-x-1/2 grid-cols-1 gap-4 px-6 hidden md:grid-cols-3 lg:px-0"
        >

          {/* CARD 1 */}
          <div
            className="
            flex
            min-h-[140px]
            items-center
            justify-between
            rounded-t-lg
            bg-[#27347c]
            px-7
            py-6
            text-white
            shadow-lg
            transition
            hover:-translate-y-2
          "
          >
            <div>
              <h3 className="text-lg font-semibold">
                Book an Appointment
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Schedule your visit with our doctors.
              </p>
            </div>

            <div className="text-4xl">
              📅
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
            flex
            min-h-[140px]
            items-center
            justify-between
            rounded-t-lg
            bg-[#b9d0ff]
            px-7
            py-6
            text-[#263575]
            shadow-lg
            transition
            hover:-translate-y-2
          "
          >
            <div>
              <h3 className="text-lg font-semibold">
                Find a Doctor
              </h3>

              <p className="mt-2 text-sm">
                Find experienced medical specialists.
              </p>
            </div>

            <div className="text-4xl">
              👨‍⚕️
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
            flex
            min-h-[140px]
            items-center
            justify-between
            rounded-t-lg
            bg-[#159fe3]
            px-7
            py-6
            text-white
            shadow-lg
            transition
            hover:-translate-y-2
          "
          >
            <div>
              <h3 className="text-lg font-semibold">
                Emergency Care
              </h3>

              <p className="mt-2 text-sm text-white/90">
                24/7 emergency medical assistance.
              </p>
            </div>

            <div className="text-4xl">
              🏥
            </div>
          </div>

        </div>

      </section>




      {/* about section  */}
      <div className='mx-auto px-5  mt-15 flex flex-col items-center justify-center space-y-2 lg:px-8 lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-1'>

        <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">welcome to meddical </h2>
        <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">A Great Place to Receive Care</h1>
        <div className='flex flex-col items-center mt-2 lg:mt-5 lg:flex lg:flex-col lg:items-center'>
          <span>Lorem ipllo dignissimos in libero eum?Lorem ipsum dolor sit amet.</span>
          <span>Lorem ipllo dignissimos in libero eum? Lorem ipsum dolor sit ametipisicing elit. Fugiat, recusandae.</span>
        </div>
        <div className='flex mt-5 space-x-2 cursor-pointer' onClick={() => nav('/about')}>
          <h1 className='text-blue-400'>Learn More </h1>
          <ArrowRight />
        </div>


      </div>


      {/* doctor cover photo */}
      <div className='mx-auto mt-15 max-w-7xl lg:px-8'>
        <div className="relative overflow-hidden ">
          <img src={doctorphoto} alt="image" className=" h-50 w-full bg-top bg-cover inset-0 object-cover" />
          <img src={appointmentCover} alt="image" className="absolute inset-0 w-full h-50 bg-none object-cover " />
        </div>
      </div>


      {/* our services  */}
      <div className='mx-auto px-5 mt-15 max-w-7xl lg:px-8'>
        <div className=" mt-20 flex flex-col gap-x-5 justify-center items-center">
          <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">care you can belive in </h2>
          <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">Our services</h1>
        </div>


        {/* grid section  */}
        <div className='lg:grid lg:grid-cols-6 lg:space-x-5 mt-15 mx-auto'>

          {/* service part  */}
          <div className='grid grid-cols-2 lg:flex lg:flex-col relative border-2 border-gray-200 rounded-sm'>
            {service?.services?.map((serviceItem, index) => (
              <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer  h-30 hover:bg-[#253477] hover:text-gray-200 hover:rounded-sm" key={index} onClick={() => nav(`/service/${serviceItem._id}`)}>
                <HeartPulse />
                <h1 className="font-serif" >{serviceItem.name}</h1>
              </div>
            ))}

            <h1 className=' p-2 absolute w-full bottom-0 text-center cursor-pointer bg-[#253477] text-gray-200 rounded-b-sm' onClick={() => nav('/service')}>View All</h1>

          </div>

          {/* content part  */}
          <div className='hidden lg:grid lg:col-span-3'>
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
          <div className='hidden lg:grid lg:col-span-2'>
            <div className='flex flex-col space-y-5'>
              <img src={serviceimg1} alt="img1" />
              <img src={serviceimg2} alt="img2" />
            </div>
          </div>
        </div>

      </div>



      {/* our specialist  */}
      <div className="mx-auto px-5 mt-15 max-w-7xl lg:px-8">
        <div className=" mt-25 flex flex-col gap-x-5 justify-center items-center">
          <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Always caring </h2>
          <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">Our Specialties</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20">

          {data.doctors?.map((doctor) => (
            <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer border-2 border-gray-100 h-50 hover:bg-[#253477] hover:text-gray-200 hover:rounded-sm" key={doctor._id}>
              <HeartPulse size={50}/>
              <h1 className="font-serif">{doctor.specialist}</h1>


            </div>
          ))}


        </div>
      </div>


      {/* appointment form  */}
      <div className='mt-15'>
        <section className="relative min-h-screen overflow-scroll">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${homeApp})` }}></div>
          <div className="absolute inset-0 bg-cover bg-center bg-white opacity-80"></div>





          <div className="absolute mx-auto px-5 w-full h-full lg:px-36  flex items-center">
            <div className='grid grid-cols-1 lg:grid-cols-2 space-y-14 lg:space-x-32 '>
              <div className="flex flex-col justify-center items-center lg:items-start space-y-3 mt-15">
                <h1 className="text-[#159EEC] text-4xl font-bold font-serif">Book an Appointment</h1>
                <p className="font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat recusandae architecto impedit culpa, explicabo illo dolore! Ratione officia repellat id facere, tempora alias, distinctio odio numquam nemo perferendis ipsa aperiam, facilis vitae. Blanditiis, debitis saepe. Dolor facilis magnam consequatur quisquam, eaque dolorum ut officia corporis aspernatur unde dolore! Magnam.</p>
              </div>

              <AppointmentForm />

            </div>



          </div>
        </section>
      </div>




      {/* common doctor section  */}
      <div className='mx-auto px-5 mt-20 max-w-7xl lg:px-8'>
        <div className="flex flex-col gap-x-5 justify-center items-center">
          <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">trusted care </h2>
          <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">Our Doctors</h1>
        </div>
        <CommonDoctor />
      </div>


      {/* common news section  */}
      <CommonNews />

      {/* contact container section  */}
      <ContactContainer />

      {/* footer section  */}
      <Footer />

    </div >
  )
}
