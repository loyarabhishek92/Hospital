import { base } from "@/app/mainApi.js";
import { useGlobalSearchQuery } from "@/pages/search/searchApi.js";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";






export default function Try() {

  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);

  // Get current search term from URL
  const currentQuery = searchParams.get('q') || '';

  // RTK Query Hook
  const { data, isLoading, isFetching } = useGlobalSearchQuery(currentQuery, {
    skip: currentQuery === '',
  });

  // Formik Setup
  const formik = useFormik({
    initialValues: { searchTerm: currentQuery },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (values.searchTerm.trim()) {
        setSearchParams({ q: values.searchTerm });
      } else {
        setSearchParams({});
      }
    },
  });

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // Prevent body scroll when overlay is open
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      formik.resetForm();
      setSearchParams({}); // Clear URL when closing
    }
  };





  return (
    <>
      {/* 1. The Search Icon in Navbar */}
      <button
        onClick={toggleSearch}
        className="text-white hover:text-blue-200 transition-colors p-2"
        aria-label="Search"
      >
        <FaSearch size={20} />
      </button>

      {/* 2. The Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-[#1e3a8a]/95 backdrop-blur-sm overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-8">

            {/* Header with Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleSearch}
                className="text-white hover:text-red-400 p-2 transition-colors"
              >
                <FaTimes size={32} />
              </button>
            </div>

            {/* Search Input Form */}
            <form onSubmit={formik.handleSubmit} className="relative max-w-3xl mx-auto mb-12">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-6 text-gray-400 text-xl" />
                <input
                  ref={inputRef}
                  type="text"
                  name="searchTerm"
                  placeholder="Search doctors, services, news..."
                  onChange={formik.handleChange}
                  value={formik.values.searchTerm}
                  className="w-full bg-white text-gray-800 text-xl rounded-full py-4 pl-16 pr-32 outline-none shadow-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Search Results Area */}
            <div className="max-w-4xl mx-auto text-white">
              {isLoading || isFetching ? (
                <div className="text-center text-xl text-blue-200">Searching...</div>
              ) : currentQuery ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                  {/* Doctors Column */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-blue-400 pb-2 mb-4 text-blue-200">
                      Doctors
                    </h3>
                    {data?.doctors?.length > 0 ? (
                      <ul className="space-y-3">
                        {data.doctors.map((doc) => (
                          <li key={doc._id}>
                            <Link to={`/doctor/${doc._id}`} onClick={toggleSearch} className="block p-3 rounded bg-blue-800/50 hover:bg-blue-700 transition-colors">
                              <div className="flex space-x-3 items-center ">
                                <img src={`${base}/${doc.image}`} className="rounded-full h-10 w-10" alt="" />
                                <div>
                                  <div className="font-semibold">{doc.name}</div>
                                  <div className="text-sm text-blue-300">{doc.specialist}</div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-blue-300 text-sm">No doctors found.</p>
                    )}
                  </div>

                  {/* Services Column */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-blue-400 pb-2 mb-4 text-blue-200">
                      Services
                    </h3>
                    {data?.services?.length > 0 ? (
                      <ul className="space-y-3">
                        {data.services.map((srv) => (
                          <li key={srv._id}>
                            <Link to={`/service/${srv._id}`} onClick={toggleSearch} className="block p-3 rounded bg-blue-800/50 hover:bg-blue-700 transition-colors">
                              <div className="flex space-x-3 items-center">
                                <img src={`${base}/${srv.image}`} className="rounded-full h-10 w-10" alt="" />
                                <h1 className="font-semibold">{srv.name}</h1>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-blue-300 text-sm">No services found.</p>
                    )}
                  </div>

                  {/* News Column */}
                  <div>
                    <h3 className="text-xl font-bold border-b border-blue-400 pb-2 mb-4 text-blue-200">
                      News
                    </h3>
                    {data?.news?.length > 0 ? (
                      <ul className="space-y-3">
                        {data.news.map((n) => (
                          <li key={n._id}>
                            <Link to={`/news/${n._id}`} onClick={toggleSearch} className="block p-3 rounded bg-blue-800/50 hover:bg-blue-700 transition-colors">
                              <div className="flex space-x-3 items-center ">
                                <img src={`${base}/${n.image}`} className="rounded-full h-10 w-10" alt="" />
                                <div>
                                  <div className="font-semibold">{n.title}</div>
                                  <div className="text-sm text-blue-300">{n.date} | By {n.author}</div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-blue-300 text-sm">No news found.</p>
                    )}
                  </div>

                </div>
              ) : (
                <div className="text-center text-blue-300 mt-20">
                  <p className="text-xl">Start typing to search across our platform.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  )
}
