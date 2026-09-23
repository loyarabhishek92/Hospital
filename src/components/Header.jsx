import call from "../assets/icons/call.svg";
import time from "../assets/icons/time.svg";
import location from "../assets/icons/location.svg";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import DropDownMenu from "./DropDownMenu.jsx";
import { useState } from "react";
import SearchBar from "@/pages/search/SearchBar.jsx";




const links = [["/", "Home"], ["/about", "About us"], ["/service", "Services"], ["/doctor", "Doctors"], ["/news", "News"], ["/contact", "Contact"]];






export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const closeMenu = () => setMobileMenu(false);

    const { user } = useSelector(state => state.userSlice);

    return (
        <header className="sticky top-0 z-50 w-full bg-white">

            {/* top header  */}
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                <div className="flex min-h-[100px] flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-4">

                    {/* logo  */}
                    <NavLink to={'/'} className="hidden lg:flex lg:justify-start">
                        <span className="text-[#253477] font-serif text-4xl font-bold tracking-tight sm:text-5xl">MED</span>
                        <span className="text-[#159EEC] font-serif text-4xl font-bold tracking-tight sm:text-5xl">DICAL</span>
                    </NavLink>



                    {/* information  */}
                    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-5 lg:flex-nowrap lg:gap-x-8">

                        <div className="flex space-x-5 lg:space-x-10">
                            {/* Emergency  */}
                            <div className="flex items-center gap-3">
                                <div>
                                    <img src={call} className="hidden lg:w-10 lg:h-10" alt="call" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium uppercase text-gray-900 sm:text-base">Emergency</p>
                                    <a href="tel: +977-9844580317" className="text-[#159EEC] whitespace-nowrap text-sm font-medium sm:text-base hover:underline">(237) 542-254-854</a>
                                </div>
                            </div>

                            {/* working hours  */}
                            <div className="flex gap-3 items-center justify-center">
                                <div>
                                    <img src={time} className="hidden lg:w-10 lg:h-10" alt="time" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium uppercase text-gray-900 sm:text-base">WORK HOUR</p>
                                    <p className="text-[#159EEC] whitespace-nowrap text-sm font-medium sm:text-base uppercase">09:00 - 20:00 Everyday</p>
                                </div>
                            </div>
                        </div>

                        {/* location  */}
                        <div className="flex gap-3 items-center">
                            <div>
                                <img src={location} className="hidden lg:w-10 lg:h-10" alt="location" />
                            </div>
                            <div>
                                <p className="text-sm font-medium uppercase text-gray-900 sm:text-center">LOCATION</p>
                                <p className="text-[#159EEC] whitespace-nowrap text-sm font-medium sm:text-center uppercase">0123 Some Place</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* navigation bar  */}
            <nav className="bg-[#1F2B6C]">

                <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-5 lg:px-8">

                    {/* logo  */}
                    <NavLink to={'/'} className="lg:hidden flex justify-start">
                        <span className="text-[#BFD2F8] font-serif text-4xl font-bold tracking-tight sm:text-5xl">MED</span>
                        <span className="text-white font-serif text-4xl font-bold tracking-tight sm:text-5xl">DICAL</span>
                    </NavLink>

                    {/* desktop menu  */}
                    <div className="hidden items-center gap-7 lg:flex">
                        {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? "text-base font-semibold tracking-wider text-[#8fc9ff]" : "text-base tracking-wider font-semibold text-white transition hover:text-[#8fc9ff]"}>{label}</NavLink>)}
                    </div>


                    {/* right side  */}
                    <div className="ml-auto flex items-center gap-5">

                        {/* Search */}
                        <SearchBar />



                        {/* appointment  */}
                        <NavLink to={'/appointment'} className=" hidden h-[50px] min-w-[175px] items-center justify-center rounded-full bg-[#bfd5fa] px-2 text-base font-medium text-gray-900 transition hover:bg-white md:flex" >Appointment</NavLink>


                        {/* profile  */}

                        {user ? <DropDownMenu user={user} /> : <div className="hidden items-center gap-7 lg:flex"> <NavLink to={'/login'} className='text-base font-medium text-white transition hover:text-[#8fc9ff]'>Login</NavLink>
                            <NavLink to={'/register'} className='text-base font-medium text-white transition hover:text-[#8fc9ff]'>Sign up</NavLink></div>}


                        {/* Mobile menu button */}
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="text-white lg:hidden"
                        >
                            {mobileMenu ? (
                                <X size={34} />
                            ) : (
                                <Menu size={34} />
                            )}
                        </button>
                    </div>
                </div>



                {/* MOBILE menu  */}
                {mobileMenu && (
                    <div className="border-t border-white/20 bg-[#263576] lg:hidden">

                        <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">

                            {links.map(([to, label]) => <NavLink key={to} to={to} onClick={closeMenu} className={"border-b border-white/10 py-3 text-white"}>{label}</NavLink>)}

                            <NavLink to={'/appointment'} onClick={closeMenu} className="mt-4 rounded-full bg-[#bfd5fa] px-6 py-3 text-center font-medium text-gray-900">Appointment</NavLink>
                            <NavLink to={'/login'} onClick={closeMenu} className="border-b border-white/10 py-3 text-white">Login</NavLink>
                            <NavLink to={'/register'} onClick={closeMenu} className="border-b border-white/10 py-3 text-white">Sign up</NavLink>
                        </div>

                    </div>
                )}







            </nav>

        </header>
    )
}
