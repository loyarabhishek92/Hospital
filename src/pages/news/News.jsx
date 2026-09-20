import React from 'react';
import news from '@/assets/images/news.png';
import appointmentCover from '@/assets/images/appointmentCover.png';
import Footer from '@/components/Footer.jsx';
import { base } from '@/app/mainApi.js';
import { useGetNewsQuery } from '@/features/admin/add/news/newsApi.js';
import RecentNews from '@/components/RecentNews.jsx';
import { ArrowLeft, ArrowRight, Calendar, Eye, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ContactContainer from '@/components/ContactContainer.jsx';

import { cn } from '@/lib/utils.js';

export default function News() {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data, isLoading, error } = useGetNewsQuery({ page });
  // Generate page numbers array [1, 2, 3, 4, 5]
  const pageNumbers = Array.from({ length: data?.totalPages }, (_, i) => i + 1);

  const adminData = data?.newsForAdmin;

  // 3. Function to update the URL
  const handlePageChange = (page) => {
    if (page >= 1 && page <= data?.totalPages) {
      // Update the 'page' param in the URL
      setSearchParams({ page: page.toString() });

      // Optional: Scroll to top of news list on change
      window.scrollX({ top: 0, behavior: 'smooth' });
      // useEffect(() => {
      //   window.scrollTo({ top: 0, behavior: 'smooth' });
      // }, [page]);
    }
  };





  if (isLoading) return <h1>Loading</h1>
  if (error) return <h1>{error.data.message}</h1>
  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${news})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

          <div className="w-full text-[#202f72]">

            {/* Small Heading */}
            <div className="flex gap-x-2 font-medium tracking-wider">
              <span>Home</span>
              <span>/</span>
              <span>News</span>
            </div>



            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold text-[#202f72]">Blog Posts</h1>

          </div>

        </div>
      </section>


      {/* news section  */}
      <div className=" grid grid-cols-1 lg:grid-cols-3 space-x-5 mt-15 mx-auto max-w-7xl px-5 lg:px-8">

        <div className="flex flex-col col-span-2 space-y-10">
          {data?.news?.map((newsItem, index) => (

            <div key={index} className='flex flex-col space-y-3'>
              <img src={`${base}/${newsItem.image}`} alt="image" />

              <div className="flex space-x-2 mt-3">
                <div className="flex space-x-2">
                  <Calendar />
                  <span>{newsItem.date}</span>
                  <span>{newsItem.createdAt}</span>
                </div>

                <div className="flex space-x-2">
                  <User />
                  <h1>{newsItem.author}</h1>
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
              <h1 className="font-serif text-3xl  text-[#202f72]">{newsItem.title}</h1>
              <p className='mt-3 line-clamp-4'>{newsItem.description}</p>

              <Button className="text-black w-fit p-6 rounded-full mt-3" onClick={() => nav(`/news/${newsItem._id}`)}>Read More <ArrowRight /></Button>
            </div>
          ))}






          {(data?.totalPages > 1) && <div className="flex items-center justify-between w-full py-4 px-2 select-none">

            {/* --- PREVIOUS BUTTON --- */}
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={cn(
                "flex items-center gap-2 text-lg transition-colors duration-200 font-medium",
                page === 1
                  ? "text-gray-300 cursor-not-allowed" // Faded state
                  : "text-gray-500 hover:text-blue-600 cursor-pointer"
              )}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Previous Page</span>
            </button>

            {/* --- PAGE NUMBERS --- */}
            <div className="hidden md:flex items-center gap-1">
              {pageNumbers.map((number, index) => (
                <div key={number}>
                  {/* The Number */}
                  <button
                    onClick={() => handlePageChange(number)}
                    className={cn(
                      "text-lg font-medium transition-colors duration-200 px-1",
                      page === number
                        ? "text-blue-600 font-bold" // Active state (Blue)
                        : "text-gray-600 hover:text-blue-400" // Inactive state (Dark Grey)
                    )}
                  >
                    {number}
                  </button>

                  {/* The Separator (Hyphen) - Only show if not the last item */}
                  {index < pageNumbers.length - 1 && (
                    <span className="text-gray-400 mx-1">-</span>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile View: Just "Page 1 of 5" */}
            <div className="md:hidden text-gray-600 font-medium">
              Page {page} of {data?.totalPages}
            </div>

            {/* --- NEXT BUTTON --- */}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data?.totalPages}
              className={cn(
                "flex items-center gap-2 text-lg transition-colors duration-200 font-medium",
                page === data?.totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-blue-600 hover:text-blue-800 cursor-pointer" // Active blue
              )}
            >
              <span>Next Page</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>}


        </div>




        {/* Recent News  */}
        <div className='grid shrink-0 mt-10 lg:mt-0'>
          <RecentNews adminData={adminData} />
        </div>


      </div>

      {/* contact section  */}
      <ContactContainer />


      {/* footer section  */}
      <div>
        <Footer />
      </div>

    </div >
  )
}
