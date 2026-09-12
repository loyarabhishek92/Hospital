import doctor from '@/assets/images/doctor.png'
import appointmentCover from '@/assets/images/appointmentCover.png'
import doctorheader from '@/assets/images/doctorheader.png';
import Footer from '@/components/Footer.jsx'
import CommonNews from '@/components/CommonNews.jsx'
import ContactContainer from '@/components/ContactContainer.jsx'
import { base } from '@/app/mainApi.js'
import { useGetDoctorsQuery } from '@/features/admin/add/doctor/doctorApi.js'
import { useNavigate } from 'react-router-dom'

export default function Doctor() {
  const { data, isLoading, error } = useGetDoctorsQuery();
  const nav = useNavigate();

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.data.message}</h1>
  console.log(data)
  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${doctor})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center px-50">

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
      <div className='mx-50 mt-15 grid grid-cols-3 gap-6'>
        {data.doctors?.map((doctor, index) => (
          <div key={index} className='rounded-sm'>
            <img src={`${base}/${doctor.image}`} alt="image" className='rounded-t-sm' />
            <div className='flex flex-col items-center space-y-2 py-5 bg-[#BFD2F8]'>
              <h1>{doctor.name}</h1>
              <h1 className='text-2xl font-bold tracking-wider'>{doctor.specialist}</h1>

              <div className='flex space-x-2.5'>
                <span>linkdin</span>
                <span>facebook</span>
                <span>insta</span>
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
        <div className="relative flex flex-col items-center space-y-6 bg-amber-800 w-150 my-15">


          <img src={doctor.image} alt="imag" />


          {/* Main Heading */}
          <h1 className="font-serif text-xl font-bold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque ut ipsam cumque esse qui praesentium magnam ipsum nostrum consectetur.</h1>


<hr className='text-black bg-amber-200' />
<h1>Jhon doe</h1>


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
