import singleNewsphoto from "@/assets/images/singleNewsphoto.png";
import appointmentCover from "@/assets/images/appointmentCover.png";
import Footer from "@/components/Footer.jsx";
import { useGetSingleNewsQuery } from "@/features/admin/add/news/newsApi.js";
import { Calendar, Eye, Heart, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { base } from "@/app/mainApi.js";
import RecentNews from "@/components/RecentNews.jsx";
import ContactContainer from "@/components/ContactContainer.jsx";





export default function NewsDetails() {

    const { id } = useParams();
    const { data: singleNews, isLoading, error } = useGetSingleNewsQuery(id);

    if (isLoading) return <h1>Loading...</h1>


    if (error) return <p>{error.data}</p>


    return (
        <div>
            <section className="relative min-h-70 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${singleNewsphoto})` }}></div>
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
                            <span>/</span>
                            <span>Health care</span>
                        </div>



                        {/* Main Heading */}
                        <h1 className="font-serif text-5xl font-bold text-[#202f72]">{singleNews.title}</h1>


                        <div className="flex space-x-5 mt-2 flex-wrap">
                            <div className="flex space-x-2">
                                <Calendar />
                                <span>{singleNews.date}</span>
                                <span>{singleNews.createdAt}</span>
                            </div>

                            <div className="flex space-x-2">
                                <User />
                                <h1>{singleNews.author}</h1>
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
                    </div>

                </div>
            </section>


            {/* news section  */}
            <div className=" grid grid-cols-1 lg:grid-cols-3 space-x-5 space-y-10 mt-15 mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex flex-col col-span-2 space-y-4">
                    <img src={`${base}/${singleNews.image}`} alt="image" />
                    <p>{singleNews.description}</p>
                </div>

                {/* Recent News  */}
                <div>
                    <RecentNews />
                </div>


            </div>

            {/* contact section  */}
            <ContactContainer />


            {/* footer section  */}
            <Footer />


        </div>
    )
}
