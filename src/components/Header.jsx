import call from "../assets/icons/call.svg";
import time from "../assets/icons/time.svg";
import location from "../assets/icons/location.svg";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button.jsx";
import { Search } from "lucide-react";

export default function Header() {
    return (
        <div>
            <div className="flex justify-between items-center gap-20 px-65 py-5">
                <div className="text-4xl font-serif font-extrabold">
                    <span className="text-black">MED</span>
                    <span className="text-[#159EEC]">DICAL</span>
                </div>

                <div className="flex gap-5 uppercase font-medium">
                    <div className="flex gap-2 items-center">
                        <div>
                            <img src={call} className="h-10 w-10" alt="call" />
                        </div>
                        <div>
                            <p>Emergency</p>
                            <p className="text-[#159EEC]">(237) 542-254-854</p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div>
                            <img src={time} alt="time" />
                        </div>
                        <div>
                            <p>WORK HOUR</p>
                            <p className="text-[#159EEC]">09:00 - 20:00 Everyday</p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div>
                            <img src={location} alt="location" />
                        </div>
                        <div>
                            <p>LOCATION</p>
                            <p className="text-[#159EEC]">0123 Some Place</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-between bg-[#1F2B6C] px-65 py-5 text-white">
                <nav className="flex gap-5">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About Us</NavLink>
                    <NavLink to={'/service'}>Services</NavLink>
                    <NavLink to={'/doctor'}>Doctors</NavLink>
                    <NavLink to={'/news'}>News</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/register'}>Sign up</NavLink>

                </nav>

                <div className="flex gap-3 items-center">
                    <Search />
                    <Button className="text-black">Appointment</Button>

                </div>


            </div>

        </div>
    )
}
