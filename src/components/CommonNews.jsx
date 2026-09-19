import { base } from "@/app/mainApi.js";
import { useGetNewsQuery } from "@/features/admin/add/news/newsApi.js";
import { EyeIcon, HeartIcon, HeartOff, HeartOffIcon, HeartPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CommonNews() {
    const { isLoading, error, data } = useGetNewsQuery();
    const nav = useNavigate();
    const [count, setCount] = useState(0);

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.data}</h1>


    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }





   
    return (
        <div className="mx-auto px-5 mt-30 max-w-7xl lg:px-8">

            <div className="flex flex-col gap-x-5 justify-center items-center">
                <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Better information, Better health</h2>
                <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">News</h1>
            </div>


            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-20">

                {data.newsForAdmin?.map((news) => (
                <div className="flex gap-x-3.5 overflow-hidden rounded-sm shadow-md hover:shadow-xl transition duration-300 group bg-gray-50" key={news._id}  onClick={() => nav(`/news/${news._id}`)}>
                    <div className="h-50 w-50 overflow-hidden">
                        <img src={`${base}/${news.image}`} alt="image" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    </div>
                    <div className="flex flex-col gap-y-3 py-5">
                        <span className="text-blue-400">{news.date} {news.createdAt} | {news.author}</span>
                        <h1 className="font-serif font-bold">{news.title}</h1>
                        <div className="flex gap-x-2">
                            <EyeIcon />
                            <p>{count}</p>
                            <HeartIcon className="cursor-pointer" />
                            <p>{count}</p>
                        </div>

                    </div>
                </div>
                ))}


            </div>

        </div>
    )
}
