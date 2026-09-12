import singleNewsphoto from "@/assets/images/singleNewsphoto.png";
import appointmentCover from "@/assets/images/appointmentCover.png";
import Footer from "@/components/Footer.jsx";
import { useGetNewsQuery, useGetSingleNewsQuery } from "@/features/admin/add/news/newsApi.js";
import { Calendar, Clock, Eye, Heart, LocationEdit, Mail, PhoneCall, Search, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { base } from "@/app/mainApi.js";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";


const categories = [
    {
        category: 'Surgery',
        total: 5
    },
    {
        category: 'Health Care',
        total: 4
    },
    {
        category: 'Medical',
        total: 7
    },
    {
        category: 'Professional',
        total: 150
    }
];


export default function NewsDetails() {

    const { id } = useParams();
    const { data: singleNews, isLoading, error } = useGetSingleNewsQuery(id);
    const { data } = useGetNewsQuery();
    const nav = useNavigate();



    if (isLoading) return <h1>Loading...</h1>


    if (error) return <p>{error.data}</p>


    return (
        <div>
            <section className="relative min-h-70 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${singleNewsphoto})` }}></div>
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
                            <span>/</span>
                            <span>Health care</span>
                        </div>



                        {/* Main Heading */}
                        <h1 className="font-serif text-5xl font-bold text-[#202f72]">A passion for putting patients first.</h1>


                        <div className="flex space-x-5 mt-2">
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
            <div className="mx-50 grid grid-cols-2 space-x-5 mt-15">
                <div className="flex flex-col space-y-4">
                    <img src={`${base}/${singleNews.image}`} alt="image" />
                    <p>{singleNews.description}</p>
                </div>

                <div className="flex flex-col space-y-7">
                    <div className="relative bg-[#253477] rounded-sm flex items-center justify-center">
                        <Input placeholder= "Search"
                        className="h-16
                rounded-none
                border-0
                bg-transparent
                px-6
                text-lg
                text-white
                placeholder:text-white
                focus-visible:ring-0"
                        />
                        <Button
                            type='button'
                            variant="ghost"
                            size="icon"
                            className='text-muted-foreground focus-visible:ring-ring/50 inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                        >
                            <Search />
                        </Button>
                    </div>

                    <div className="border-2 border-grey-500 flex flex-col space-y-4 py-5 px-3">
                        <h1 className="text-4xl font-serif font-bold tracking-wider text-[#253477]">Recent Posts</h1>

                        <div className="flex flex-col gap-y-3 ">
                            {data.news?.map((news) => (
                                <div className="flex gap-x-3.5 cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-xl transition duration-300 group bg-gray-50" key={news._id} onClick={() => nav(`/news/${news._id}`)}>
                                    <div className="h-15 w-15 overflow-hidden rounded-sm">
                                        <img src={`${base}/${news.image}`} alt="image" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className="text-blue-400">{news.date} {news.createdAt} | {news.author}</span>
                                        <h1 className="font-serif font-bold">{news.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-2 border-grey-500 flex flex-col space-y-4 py-5 px-3">
                        <h1 className="text-4xl font-serif font-bold tracking-wider text-[#253477]">Categories</h1>

                        <div className="flex flex-col gap-y-3 mt-8">

                            {categories.map((item, index) => (
                                <div className="flex justify-between mx-10" key={index}>
                                <h1 className="text-2xl">{item.category}</h1>
                                <h2 className="bg-[#159EEC] text-white w-fit h-fit rounded-4xl flex items-center justify-center p-2">{item.total}</h2>
                            </div>
                            ))}
                            

                        </div>
                    </div>
                </div>

            </div>

            {/* contact section  */}
            <div className="mx-50 mt-15">
                <div className="flex flex-col gap-x-5 justify-center items-center">
                    <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Get in touch</h2>
                    <h1 className="text-3xl font-serif font-bold tracking-wider">Contact</h1>
                </div>

                <div className="grid grid-cols-4 gap-x-5 mt-10">
                    <div className="bg-[#BFD2F8]  py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
                        <PhoneCall className="h-8 w-8" />
                        <h1 className="text-xl uppercase font-bold font-serif tracking-wider">Emergency</h1>
                        <span>(254) 251-214-547</span>
                        <span>(254) 251-214-547</span>

                    </div>

                    <div className="bg-[#202f72] text-[#BFD2F8] py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
                        <LocationEdit className="h-8 w-8" />
                        <h1 className="text-xl uppercase font-bold font-serif tracking-wider">location</h1>
                        <span>2548 Some place</span>
                        <span>2547 Some country</span>
                    </div>

                    <div className="bg-[#BFD2F8] py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
                        <Mail className="h-8 w-8" />
                        <h1 className="text-xl uppercase font-bold font-serif tracking-wider">Email</h1>
                        <span>loyar@gmail.com</span>
                        <span>rajrauniyar@gmail.com</span>
                    </div>

                    <div className="bg-[#BFD2F8] py-15 pl-7 rounded-sm flex flex-col gap-y-1.5">
                        <Clock className="h-8 w-8" />
                        <h1 className="text-xl uppercase font-bold font-serif tracking-wider">working hours</h1>
                        <span>Mon-Sat 9:00 - 20:00</span>
                        <span>Sunday Emergency only</span>
                    </div>
                </div>
            </div>


            {/* footer section  */}
            <div>
                <Footer />
            </div>

        </div>
    )
}
