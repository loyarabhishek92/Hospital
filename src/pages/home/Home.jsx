import hero from "@/assets/images/hero.png";

export default function Home() {
  return (
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

    
    // <div className="w-full h-screen bg-cover bg-center"
    //   style={{ backgroundImage: `url(${hero})` }}>
    //   <div className="flex items-center justify-center h-full">
    //     <h1 className="text-5xl font-bold text-white">
    //       Welcome to Our Hospital
    //     </h1>
    //   </div>
    //   <h1>this is home page....</h1>
    //   {/* <img src="/hero.png" alt="hero" className="w-full h-auto object-cover" /> */}
    //   <h1>Luis, neque quia repudiandae enim necessitatibus repellat iusto quae provident, adipisci optio sed fugit consectetur pariatur. Libero dolore dicta excepturi maxime.</h1>
    // </div>
  )
}
