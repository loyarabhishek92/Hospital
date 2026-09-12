import news from '@/assets/images/news.png';
import appointmentCover from '@/assets/images/appointmentCover.png';
import Footer from '@/components/Footer.jsx';
import { base } from '@/app/mainApi.js';
import { useGetNewsQuery } from '@/features/admin/add/news/newsApi.js';
import RecentNews from '@/components/RecentNews.jsx';
import { ArrowRight, Calendar, Eye, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useNavigate } from 'react-router-dom';
import ContactContainer from '@/components/ContactContainer.jsx';

export default function News() {
  const { data, isLoading, error } = useGetNewsQuery();
  const nav = useNavigate();

  if (isLoading) return <h1>Loading</h1>
  if (error) return <h1>{error.data}</h1>
  return (
    <div>
      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${news})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center px-50">

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
      <div className="mx-50 grid grid-cols-3 space-x-5 mt-15">

        <div className="flex flex-col col-span-2 space-y-10">
          {data.news?.map((newsItem, index) => (

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
        </div>




        {/* Recent News  */}
        <div>
          <RecentNews />
        </div>


      </div>

      {/* contact section  */}
      <ContactContainer />


      {/* footer section  */}
      <div>
        <Footer />
      </div>

    </div>
  )
}
