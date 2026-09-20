import { base } from "@/app/mainApi.js";
import { EyeIcon, HeartIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function NewsCard({ news }) {
    const nav = useNavigate();
    const [count, setCount] = useState(0);




    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }
    return (
        <div className="flex gap-x-3.5 overflow-hidden rounded-sm shadow-md hover:shadow-xl transition duration-300 group bg-gray-50" onClick={() => nav(`/news/${news?._id}`)}>
            <div className="h-50 w-50 overflow-hidden">
                <img src={`${base}/${news?.image}`} alt="image" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="flex flex-col gap-y-3 py-5">
                <span className="text-blue-400">{news?.date} {news?.createdAt} | By {news?.author}</span>
                <h1 className="font-serif font-bold">{news?.title}</h1>
                <div className="flex gap-x-2">
                    <EyeIcon />
                    <p>{count}</p>
                    <HeartIcon className="cursor-pointer" />
                    <p>{count}</p>
                </div>

            </div>
        </div>

    )
}
