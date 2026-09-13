import hero from "@/assets/images/hero.png";
import CommonDoctor from "@/components/CommonDoctor.jsx";
import CommonNews from "@/components/CommonNews.jsx";
import ContactContainer from "@/components/ContactContainer.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
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

    </div >
  )
}
