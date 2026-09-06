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


            <div className="px-50 grid grid-cols-2 gap-x-10 pt-15">
                <div className="flex flex-col gap-y-5">
                    <h1 className="font-serif text-4xl font-bold text-[#202f72]">Book an Appointment</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sequi? Dolores laborum autem vel temporibus aliquam animi atque, debitis magnam!</p>





                    <div className="bg-[#202f72] rounded-md mt-10">
                        <form>
                            {/* Name & Gender */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="h-16 w-full border-b border-r-0 border-[#b7c6ec] bg-transparent px-6 text-white placeholder:text-white outline-none md:border-r"
                                />

                                <div className="relative">
                                    <select
                                        name="gender"
                                        className="h-16 w-full appearance-none border-b border-[#b7c6ec] bg-transparent px-6 pr-12 text-white outline-none"
                                    >
                                        <option value="" className="text-black">
                                            Gender
                                        </option>
                                        <option value="Male" className="text-black">
                                            Male
                                        </option>
                                        <option value="Female" className="text-black">
                                            Female
                                        </option>
                                        <option value="Other" className="text-black">
                                            Other
                                        </option>
                                    </select>

                                    <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
                                        <svg
                                            width="14"
                                            height="9"
                                            viewBox="0 0 14 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.5 1.5L7 7L12.5 1.5"
                                                stroke="#C5D3F5"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="h-16 w-full border-b border-[#b7c6ec] bg-transparent px-6 text-white placeholder:text-white outline-none md:border-r"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    className="h-16 w-full border-b border-[#b7c6ec] bg-transparent px-6 text-white placeholder:text-white outline-none"
                                />
                            </div>

                            {/* Date & Time */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="date"
                                        name="date"
                                        className="h-16 w-full border-b border-[#b7c6ec] bg-transparent px-6 text-white outline-none md:border-r"
                                    />

                                    {(
                                        <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-white">
                                            Date
                                        </span>
                                    )}
                                </div>

                                <div className="relative">
                                    <input
                                        type="time"
                                        name="time"
                                        className="h-16 w-full border-b border-[#b7c6ec] bg-transparent px-6 text-[19px] text-white outline-none"
                                    />

                                    {(
                                        <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-white">
                                            Time
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Doctor & Department */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative">
                                    <select
                                        name="doctor"
                                        className="h-16 w-full appearance-none border-b border-[#b7c6ec] bg-transparent px-6 pr-12 text-white outline-none md:border-r"
                                    >
                                        <option value="" className="text-black">
                                            Doctor
                                        </option>
                                        <option value="Dr. John" className="text-black">
                                            Dr. John
                                        </option>
                                        <option value="Dr. Smith" className="text-black">
                                            Dr. Smith
                                        </option>
                                        <option value="Dr. David" className="text-black">
                                            Dr. David
                                        </option>
                                    </select>

                                    <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
                                        <svg
                                            width="14"
                                            height="9"
                                            viewBox="0 0 14 9"
                                            fill="none"
                                        >
                                            <path
                                                d="M1.5 1.5L7 7L12.5 1.5"
                                                stroke="#C5D3F5"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div className="relative">
                                    <select
                                        name="department"
                                        className="h-16 w-full appearance-none border-b border-[#b7c6ec] bg-transparent px-6 pr-12 text-white outline-none"
                                    >
                                        <option value="" className="text-black">
                                            Department
                                        </option>
                                        <option value="Cardiology" className="text-black">
                                            Cardiology
                                        </option>
                                        <option value="Neurology" className="text-black">
                                            Neurology
                                        </option>
                                        <option value="Dental" className="text-black">
                                            Dental
                                        </option>
                                        <option value="Orthopedic" className="text-black">
                                            Orthopedic
                                        </option>
                                    </select>

                                    <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
                                        <svg
                                            width="14"
                                            height="9"
                                            viewBox="0 0 14 9"
                                            fill="none"
                                        >
                                            <path
                                                d="M1.5 1.5L7 7L12.5 1.5"
                                                stroke="#C5D3F5"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="7"
                                className="block w-full resize-none bg-transparent px-6 py-5 text-white placeholder:text-white outline-none"
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                className="h-16 w-full bg-[#bfd1f7] font-medium tracking-wide text-[#273574] transition hover:bg-[#aec4f2]"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>





                </div>

                <div className="bg-[#202f72] text-white py-15 px-15 rounded-md">
                    <h1 className="text-6xl text-center font-serif">Shedule hours</h1>


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


                </div>

            </div>
            djflasjf
        </div>
    )
}
