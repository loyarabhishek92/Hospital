import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalSearchQuery } from "./searchApi.js";
import { useFormik } from "formik";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch, FaTimes } from "react-icons/fa";
import { ArrowRight, Calendar, Eye, Heart, User } from "lucide-react";
import { base } from "@/app/mainApi.js";
import { Button } from "@/components/ui/button.jsx";


export default function SearchBar() {
    const nav = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    // 1. Get current search term from URL
    const currentQuery = searchParams.get('q') || '';

    // 2. RTK Query Hook - Only fetch if currentQuery is not empty
    const { data, isLoading, isFetching } = useGlobalSearchQuery(currentQuery, {
        skip: currentQuery === '', // Skip fetching if input is empty
    });

    // 3. Formik Setup
    const formik = useFormik({
        initialValues: {
            searchTerm: currentQuery,
        },
        enableReinitialize: true, // Update form if URL changes externally
        onSubmit: (values) => {
            // Update URL params on submit
            if (values.searchTerm.trim()) {
                setSearchParams({ q: values.searchTerm });
            } else {
                setSearchParams({}); // Clear params if empty
            }
        },
    });

    // Toggle Handler
    const toggleSearch = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            // If closing, clear search
            formik.resetForm();
            setSearchParams({});
        }
    };
    return (
        <div className="relative flex items-center">
            {/* Search Icon Button */}
            {!isOpen && (
                <button onClick={toggleSearch} className="p-2 text-white">
                    <FaSearch size={20} />
                </button>
            )}

            {/* Input Field Form */}
            {isOpen && (
                <form onSubmit={formik.handleSubmit} className="flex items-center bg-white rounded-md">
                    <input
                        type="text"
                        name="searchTerm"
                        placeholder="Search doctors, services, news..."
                        onChange={formik.handleChange}
                        value={formik.values.searchTerm}
                        className="px-3 py-1 text-black outline-none"
                        autoFocus
                    />
                    <button type="submit" className="p-2 text-gray-600">
                        <FaSearch />
                    </button>
                    <button type="button" onClick={toggleSearch} className="p-2 text-red-500">
                        <FaTimes />
                    </button>
                </form>
            )}

            {/* Display Results (Dropdown or Section) */}
            {isOpen && currentQuery && (
                <div className="absolute top-12 right-0 w-80 bg-white shadow-lg p-4 rounded-md z-50 text-black">
                    {isLoading || isFetching ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            {/* Doctors Section */}
                            {data?.doctors?.length > 0 && (
                                <div className="mb-2">
                                    <h4 className="font-bold text-sm text-gray-500">Doctors</h4>
                                    {data.doctors.map((doc) => (
                                        <div key={doc._id} className='rounded-sm'>
                                            <img src={`${base}/${doc.image}`} alt="image" className='rounded-t-sm object-cover h-80 w-full' />
                                            <div className='flex flex-col items-center space-y-2 py-5 bg-[#BFD2F8]'>
                                                <h1>Dr. {doc.name}</h1>
                                                <h1 className='text-2xl font-bold tracking-wider'>{doc.specialist}</h1>

                                                {/* doctor social media icon  */}
                                                <div className="flex items-center gap-3">
                                                    {/* LinkedIn */}
                                                    <a
                                                        href={doc.linkedinId}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2B6C] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#101846]"
                                                    >
                                                        <FaLinkedinIn size={15} className="text-[#BFD2F8]" />
                                                    </a>

                                                    {/* Facebook */}
                                                    <a
                                                        href={doc.facebookId}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2B6C] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#101846]"
                                                    >
                                                        <FaFacebookF size={15} className="text-[#BFD2F8]" />
                                                    </a>

                                                    {/* Instagram */}
                                                    <a
                                                        href={doc.instagramId}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2B6C] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#101846]"
                                                    >
                                                        <FaInstagram size={15} className="text-[#BFD2F8]" />
                                                    </a>
                                                </div>



                                            </div>

                                            <div className='text-center py-3 bg-[#202f72] text-[#BFD2F8] rounded-b-sm cursor-pointer' onClick={() => nav(`/doctor/${doc._id}`)}>
                                                View Profile
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Services Section */}
                            {data?.services?.length > 0 && (
                                <div className="mb-2">
                                    <h4 className="font-bold text-sm text-gray-500">Services</h4>
                                    {data.services.map((srv) => (
                                        <div key={srv._id} className='rounded-sm border-2 border-gray-200'>
                                            <img src={`${base}/${srv.image}`} alt="image" className='rounded-t-sm object-cover h-80 w-full' />
                                            <div className='flex flex-col space-y-2 py-5 px-5 pt-15'>
                                                <h1 className='text-2xl font-bold tracking-wider'>{srv.name}</h1>
                                                <h1>{srv.description}</h1>


                                                <div className='flex gap-2 py-3 cursor-pointer ' onClick={() => nav(`/service/${srv._id}`)}>
                                                    <h1 className='text-blue-400'>Learn More</h1> <ArrowRight />
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* News Section */}
                            {data?.news?.length > 0 && (
                                <div>
                                    <h4 className="font-bold text-sm text-gray-500">News</h4>
                                    {data.news.map((n) => (
                                        <div key={n._id} className='flex flex-col space-y-3 cursor-pointer hover:bg-gray-100 p-1'>
                                            <img src={`${base}/${n.image}`} alt="image" />

                                            <div className="flex space-x-2 mt-3">
                                                <div className="flex space-x-2">
                                                    <Calendar />
                                                    <span>{n.date}</span>
                                                    <span>{n.createdAt}</span>
                                                </div>

                                                <div className="flex space-x-2">
                                                    <User />
                                                    <h1>{n.author}</h1>
                                                </div>

                                                <div className="flex space-x-2">
                                                    <Eye />
                                                    <span>0</span>
                                                </div>

                                                <div className="flex space-x-2">
                                                    <Heart />
                                                    <span>0</span>
                                                </div>
                                            </div>
                                            <h1 className="font-serif text-3xl  text-[#202f72]">{n.title}</h1>
                                            <p className='mt-3 line-clamp-4'>{n.description}</p>

                                            <Button className="text-black w-fit p-6 rounded-full mt-3" onClick={() => nav(`/news/${n._id}`)}>Read More <ArrowRight /></Button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* No Results */}
                            {data?.doctors?.length === 0 &&
                                data?.services?.length === 0 &&
                                data?.news?.length === 0 && (
                                    <p className="text-gray-500">No results found.</p>
                                )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
