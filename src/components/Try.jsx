import doctorimage from '@/assets/images/hero.png';
import { CalendarDays, CreditCard, Stethoscope } from 'lucide-react';


export default function Try() {
    
    return (
      <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${doctorimage})`,
      }}
    >
      {/* Light overlay over background image */}
      <div className="absolute inset-0 bg-white/55"></div>

      {/* Top-left decorative circle */}
      <div className="absolute -left-40 -top-44 h-[400px] w-[600px] rounded-full bg-[#a9d5ee]/90"></div>

      {/* Right decorative circle */}
      <div className="absolute -right-40 top-[245px] h-[400px] w-[650px] rounded-full bg-[#d4e0ff]/70"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1240px] items-center px-6 sm:px-8 lg:px-0">

        {/* LEFT TEXT */}
        <div className="w-full max-w-[700px] pb-32 pt-24 lg:pb-20">

          {/* Small title */}
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-[#149fe3] sm:text-base md:text-lg">
            CARING FOR LIFE
          </p>

          {/* Main heading */}
          <h1
            className="
              max-w-[650px]
              font-serif
              text-[42px]
              font-bold
              leading-[1.08]
              text-[#263575]
              sm:text-[50px]
              md:text-[58px]
              lg:text-[62px]
          "
          >
            Leading the Way
            <br />
            in Medical Excellence
          </h1>

          {/* Button */}
          <button
            className="
              mt-8
              rounded-full
              bg-[#bfd3fa]
              px-10
              py-4
              text-base
              font-medium
              text-[#263575]
              transition
              duration-300
              hover:bg-[#a9c4f5]
              hover:shadow-lg
              active:scale-95
          "
          >
            Our Services
          </button>
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          z-20
          grid
          w-full
          max-w-[1240px]
          -translate-x-1/2
          grid-cols-1
          gap-4
          px-6
          sm:px-8
          md:grid-cols-3
          lg:px-0
      "
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
    )
}
