import serviceCover from '@/assets/images/service.png';
import appointmentCover from '@/assets/images/appointmentCover.png';
import ContactContainer from '@/components/ContactContainer.jsx';
import Footer from '@/components/Footer.jsx';
import { useGetServicesQuery } from '@/features/admin/add/service/serviceApi.js';
import { useNavigate } from 'react-router-dom';
import { base } from '@/app/mainApi.js';
import { ArrowRight } from 'lucide-react';

export default function Service() {

  const {data, isLoading, error} = useGetServicesQuery();
  const nav = useNavigate();

  if(isLoading) return <h1>Loading..</h1>
  if(error) return <h1>{error.data}</h1>
  


  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${serviceCover})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

          <div className="w-full text-[#202f72]">

            {/* Small Heading */}
            <div className="flex gap-x-2 font-medium tracking-wider">
              <span>Home</span>
              <span>/</span>
              <span>Service</span>

            </div>



            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold text-[#202f72]">Our Services</h1>



          </div>

        </div>
      </section>


       {/* services section  */}
            <div className=' mt-15 grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-5 lg:px-8'>
              {data.services?.map((service, index) => (
                <div key={index} className='rounded-sm border-2 border-gray-200'>
                  <img src={`${base}/${service.image}`} alt="image" className='rounded-t-sm object-cover h-80 w-full' />
                  <div className='flex flex-col space-y-2 py-5 px-5 pt-15'>
                    <h1 className='text-2xl font-bold tracking-wider'>{service.name}</h1>
                    <h1>{service.description}</h1>
      
      
                  <div className='flex gap-2 py-3 cursor-pointer ' onClick={() => nav(`/service/${service._id}`)}>
                    <h1 className='text-blue-400'>Learn More</h1> <ArrowRight />
                  </div>
                  </div>
      
                </div>
              ))}
      
            </div>
      



      {/* contact section  */}
            <ContactContainer />
      
            {/* footer section  */}
            <Footer />
    </div>
  )
}
