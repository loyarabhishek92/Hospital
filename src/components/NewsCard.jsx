import { base } from "@/app/mainApi.js";
import { Eye, Heart } from "lucide-react";


export default function NewsCard({news}) {
    const formattedDate = new Date(news.date).toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
        }
    );
    return (
        <article className="flex min-h-[192px] overflow-hidden rounded-md bg-white shadow-sm">

            {/* Image */}
            <div className="w-[200px] shrink-0">
                <img
                    src={`${base}/${news.image}`}
                    alt={news.title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between px-6 py-6">

                <div>
                    <p className="text-sm font-normal tracking-wide text-sky-500">
                        {formattedDate} | By {news.author}
                    </p>

                    <h3 className="mt-3 text-[21px] leading-8 text-gray-800">
                        {news.title}
                    </h3>
                </div>

                {/* Statistics */}
                <div className="flex items-center gap-5">

                    <div className="flex items-center gap-2">
                        <Eye
                            size={22}
                            strokeWidth={2}
                            className="text-blue-500"
                        />

                        <span className="text-sm text-gray-700">
                            {news.views}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Heart
                            size={22}
                            strokeWidth={2}
                            className="text-pink-500"
                        />

                        <span className="text-sm text-gray-700">
                            {news.likes}
                        </span>
                    </div>

                </div>
            </div>
        </article>
    )
}
