import appointment from "@/assets/images/appointment.png";
import appointmentCover from "@/assets/images/appointmentCover.png";
import call from "@/assets/icons/call.svg";
import AppointmentForm from "@/components/AppointmentForm.jsx";
import GoogleMap from "@/components/GoogleMap.jsx";
import Footer from "@/components/Footer.jsx";
import React from "react";
import { Clock, LocationEdit, Mail, PhoneCall } from "lucide-react";
import ContactContainer from "@/components/ContactContainer.jsx";







export default function Appointment() {



    return (
        <div>
            <section className="relative min-h-70 w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointment})` }}></div>
                <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


                {/* Hero Content */}
                <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

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



            {/* appointment form + schedule section  */}
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 pt-15 mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col items-center lg:items-start gap-2">

                        <h1 className="font-serif text-4xl font-bold text-[#202f72]">Book an Appointment</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sequi? Dolores laborum autem vel temporibus aliquam animi atque, debitis magnam!</p>
                    </div>



                    {/* appointment form  */}
                    <div className="mt-15">
                    <AppointmentForm />
                    </div>

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
            <div className=" mt-15 mx-auto max-w-7xl px-5 lg:px-8">
                <GoogleMap />
            </div>

            {/* contact section  */}
            <ContactContainer />

            {/* footer section  */}
            <Footer />

        </div>
    )
}
