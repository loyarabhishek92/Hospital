import doctorCover from '@/assets/images/doctor.png';
import appointmentCover from '@/assets/images/appointmentCover.png';
import doctorheader from '@/assets/images/doctorheader.png';
// import vector from '@/assets/images/vector.png';
import CommonDoctor from '@/components/CommonDoctor.jsx';
import CommonNews from '@/components/CommonNews.jsx';
import ContactContainer from '@/components/ContactContainer.jsx';
import Footer from '@/components/Footer.jsx';

export default function About() {
  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${doctorCover})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

          <div className="w-full text-[#202f72]">

            {/* Small Heading */}
            <div className="flex gap-x-2 font-medium tracking-wider">
              <span>Home</span>
              <span>/</span>
              <span>About</span>

            </div>



            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold text-[#202f72]">About us</h1>



          </div>

        </div>
      </section>

      {/* doctor review section  */}
      <div className="relative min-h-130 overflow-hidden mt-15 flex justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${doctorheader})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-[#202f72] opacity-50"></div>


        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center text-white space-y-6 w-150 my-15">


          <img src="" alt="imag" />


          {/* Main Heading */}
          <h1 className="font-serif text-xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque ut ipsam cumque esse qui praesentium magnam ipsum nostrum consectetur.</h1>

          <h1 className='font-serif font-bold text-xl'>John Doe</h1>


        </div>

      </div>

      {/* common doctor section  */}
      <div className=" mt-20 flex flex-col gap-x-5 justify-center items-center">
        <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">trusted care </h2>
        <h1 className="text-3xl font-serif font-bold tracking-wider">Our Doctors</h1>
      </div>
      <CommonDoctor />


      {/* common news section  */}
      <CommonNews />

      {/* contact container section  */}
      <ContactContainer />

      {/* footer section  */}
      <Footer />



    </div>
  )
}
