import { useGetNewsQuery } from "@/features/admin/add/news/newsApi.js";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel.jsx";
import NewsCard from "./NewsCard.jsx";
import { useState } from "react";





export default function Try() {

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
    <section className="bg-[#f8fbfc] px-5 py-16 md:px-10 lg:px-20">

      {/* Heading */}
      <div className="mb-16 text-center">
        <h2 className="font-serif text-4xl font-semibold text-[#1d2d68]">
          News
        </h2>
      </div>

      {/* Carousel */}
      <div className="mx-auto max-w-[1220px]">

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

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

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
            className={`h-3 w-3 rounded-full transition-all duration-200 ${current === index
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
