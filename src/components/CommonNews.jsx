import { useGetNewsQuery } from "@/features/admin/add/news/newsApi.js";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel.jsx";
import { useState } from "react";
import NewsCard from "./NewsCard.jsx";


export default function CommonNews() {

    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);

    const {
        data,
        isLoading,
        isError,
    } = useGetNewsQuery();

    if (isLoading) {
        return (
            <section className="py-20 text-center">
                Loading news...
            </section>
        );
    }

    if (isError) {
        return (
            <section className="py-20 text-center text-red-500">
                Failed to load news.
            </section>
        );
    }

    const news = data?.newsForAdmin || [];

    /*
     * Create groups:
     *
     * slide 1:
     * [news1, news2, news3, news4]
     *
     * slide 2:
     * [news5, news6, news7, news8]
     */
    const slides = [];

    for (let i = 0; i < news.length; i += 4) {
        slides.push(news.slice(i, i + 4));
    }

    const handleApi = (carouselApi) => {
        setApi(carouselApi);

        setCurrent(carouselApi.selectedScrollSnap());

        carouselApi.on("select", () => {
            setCurrent(carouselApi.selectedScrollSnap());
        });
    };

    const goToSlide = (index) => {
        api?.scrollTo(index);
    };







    return (

        <section className="mx-auto px-5 mt-30 max-w-7xl lg:px-8">

            {/* Heading */}
            <div className="flex flex-col gap-x-5 justify-center items-center">
                <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">Better information, Better health</h2>
                <h1 className="text-3xl font-serif font-bold tracking-wider text-[#253477]">News</h1>
            </div>

            {/* Carousel */}
            <div className="mt-20">

                <Carousel
                    setApi={handleApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >

                    <CarouselContent>

                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>

                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">

                                    {slide.map((item) => (
                                        <NewsCard
                                            key={item._id}
                                            news={item}
                                        />
                                    ))}

                                </div>

                            </CarouselItem>
                        ))}

                    </CarouselContent>

                </Carousel>

            </div>

            {/* Dots */}
            <div className="mt-10 flex justify-center gap-3">

                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-4 w-4 cursor-pointer rounded-full transition-all duration-200 ${current === index
                            ? "scale-110 bg-[#1d2d68]"
                            : "bg-blue-200"
                            }`}
                        aria-label={`Go to news slide ${index + 1}`}
                    />
                ))}

            </div>

        </section>





    )
}
