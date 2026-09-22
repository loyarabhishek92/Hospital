import contact from "@/assets/images/contact.png";
import appointmentCover from "@/assets/images/appointmentCover.png";
import GoogleMap from "@/components/GoogleMap.jsx";
import { Clock, LocationEdit, Mail, PhoneCall } from "lucide-react";
import Footer from "@/components/Footer.jsx";
import ContactForm from "@/components/ContactForm.jsx";
import CommonNews from "@/components/CommonNews.jsx";
import ContactContainer from "@/components/ContactContainer.jsx";

export default function Contact() {
  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contact})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

          <div className="w-full text-[#202f72]">

            {/* Small Heading */}
            <div className="flex gap-x-2 font-medium tracking-wider">
              <span>Home</span>
              <span>/</span>
              <span>Contact</span>
            </div>



            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold text-[#202f72]">Our Contacts</h1>
          </div>
        </div>
      </section>

      {/* google map  */}
      <div className=" mt-15 mx-auto max-w-7xl px-5 lg:px-8">
        <GoogleMap />
      </div>


      {/* contact form and media  */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 pt-15 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-x-5">
          <div className="flex flex-col gap-x-5 items-center lg:items-start">

            <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Get in touch</h2>
            <h1 className="text-3xl font-serif font-bold tracking-wider">Contact</h1>
          </div>



          {/* contact form  */}
          <ContactForm />

        </div>

        {/* contact media */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div className="bg-[#BFD2F8]  py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
            <PhoneCall className="h-8 w-8" />
            <h1 className="text-xl uppercase font-bold font-serif tracking-wider">Emergency</h1>
            <span>(254) 251-214-547</span>
            <span>(254) 251-214-547</span>

          </div>

          <div className="bg-[#202f72] text-[#BFD2F8] py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
            <LocationEdit className="h-8 w-8" />
            <h1 className="text-xl uppercase font-bold font-serif tracking-wider">location</h1>
            <span>2548 Some place</span>
            <span>2547 Some country</span>
          </div>

          <div className="bg-[#BFD2F8] py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
            <Mail className="h-8 w-8" />
            <h1 className="text-xl uppercase font-bold font-serif tracking-wider">Email</h1>
            <span>loyar@gmail.com</span>
            <span>rajrauniyar@gmail.com</span>
          </div>

          <div className="bg-[#BFD2F8] py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
            <Clock className="h-8 w-8" />
            <h1 className="text-xl uppercase font-bold font-serif tracking-wider">working hours</h1>
            <span>Mon-Sat 9:00 - 20:00</span>
            <span>Sunday Emergency only</span>
          </div>


        </div>

        

      </div>

      {/* news */}
      <div>
        <CommonNews />
      </div>


      <div>
        <Footer />
      </div>



    </div>
  )
}
