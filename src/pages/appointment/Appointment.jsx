import appointment from "@/assets/images/appointment.png";
import appointmentCover from "@/assets/images/appointmentCover.png";

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


            <div>
                 <div>
                     <h1 className="font-serif text-5xl font-bold text-[#202f72]">Book an Appointment</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sequi? Dolores laborum autem vel temporibus aliquam animi atque, debitis magnam!</p> 
                </div>
                <div></div>
                
            </div>
        </div>
    )
}
