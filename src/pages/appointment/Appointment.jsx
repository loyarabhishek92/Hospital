import appointment from "@/assets/images/appointment.png";
import appointmentCover from "@/assets/images/appointmentCover.png";
import call from "@/assets/icons/call.svg";
import AppointmentForm from "@/components/AppointmentForm.jsx";
import GoogleMap from "@/components/GoogleMap.jsx";
import Footer from "@/components/Footer.jsx";
import React from "react";
import { Clock, LocationEdit, Mail, PhoneCall } from "lucide-react";







export default function Appointment() {



    return (
        <div>
            <section className="relative min-h-70 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointment})` }}></div>
                <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


                {/* Hero Content */}
                <div className="relative flex min-h-70 items-center px-50">

                    <div className="w-full text-[#202f72]">

                        {/* Small Heading */}
                        <div className="flex gap-x-2 font-medium tracking-wider">
                            <span>Home</span>
                            <span>/</span>
                            <span>Appointment</span>
                        </div>



                        {/* Main Heading */}
                        <h1 className="font-serif text-5xl font-bold text-[#202f72]">Book an Appointment</h1>
                    </div>
                </div>
            </section>


            <div className="px-50 grid grid-cols-2 gap-x-10 pt-15">
                <div className="flex flex-col gap-y-5">
                    <h1 className="font-serif text-4xl font-bold text-[#202f72]">Book an Appointment</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sequi? Dolores laborum autem vel temporibus aliquam animi atque, debitis magnam!</p>



                    {/* appointment form  */}
                    <AppointmentForm />

                </div>

                {/* schedule hours */}
                <div className="bg-[#202f72] text-white py-15 px-15 rounded-md">
                    <h1 className="text-6xl text-center font-serif text-[#BFD2F8]">Shedule hours</h1>


                    <div className="mt-15 flex flex-col gap-y-7 font-serif">
                        <div className="flex justify-between">
                            <span>sunday</span>
                            <span>-</span>
                            <span>09:00 AM - 07:00 PM</span>
                        </div>

                        <div className="flex justify-between">
                            <span>sunday</span>
                            <span>-</span>
                            <span>09:00 AM - 07:00 PM</span>
                        </div>

                        <div className="flex justify-between">
                            <span>sunday</span>
                            <span>-</span>
                            <span>09:00 AM - 07:00 PM</span>
                        </div>

                        <div className="flex justify-between">
                            <span>sunday</span>
                            <span>-</span>
                            <span>09:00 AM - 07:00 PM</span>
                        </div>

                        <div className="flex justify-between">
                            <span>sunday</span>
                            <span>-</span>
                            <span>09:00 AM - 07:00 PM</span>
                        </div>

                        <div className="flex justify-between">
                            <span>sunday</span>
                            <span>-</span>
                            <span>Closed</span>
                        </div>

                    </div>

                    <hr className="mt-10 mx-10 text-2xl" />



                    <div className="flex gap-3 items-center justify-center mt-10 text-2xl">
                        <div>
                            <img src={call} className="h-15 w-15" alt="call" />
                        </div>
                        <div>
                            <p className="text-3xl font-serif tracking-wider">Emergency</p>
                            <p className="text-[#bfd1f7]">(237) 542-254-854</p>
                        </div>
                    </div>


                </div>

            </div>

            {/* Google Map  */}
            <div className="mx-50 mt-15">
                <GoogleMap />
            </div>

            {/* contact section  */}
            <div className="mx-50 mt-15">
                <div className="flex flex-col gap-x-5 justify-center items-center">
                    <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Get in touch</h2>
                    <h1 className="text-3xl font-serif font-bold tracking-wider">Contact</h1>
                </div>

                <div className="grid grid-cols-4 gap-x-5 mt-10">
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

            {/* footer section  */}
            <div>
                <Footer />
            </div>
        </div>
    )
}
