import { Clock, LocationEdit, Mail, PhoneCall } from "lucide-react";


export default function ContactContainer() {
  return (
    <div>
      <div className="mx-auto px-5 mt-20 max-w-7xl lg:px-8">
        <div className="flex flex-col gap-x-5 justify-center items-center">
          <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Get in touch</h2>
          <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">Contact</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
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
    </div>
  )
}
