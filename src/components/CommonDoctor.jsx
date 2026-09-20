
import { useGetDoctorsQuery } from "@/features/admin/add/doctor/doctorApi.js";
import { useState } from "react";
import DoctorCard from "./DoctorCard.jsx";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel.jsx";


export default function CommonDoctor() {

  const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
  
    const {
      data,
      isLoading,
      isError,
    } = useGetDoctorsQuery();
  
    if (isLoading) {
      return (
        <section className="py-20 text-center">
          Loading doctors...
        </section>
      );
    }
  
    if (isError) {
      return (
        <section className="py-20 text-center text-red-500">
          Failed to load doctors.
        </section>
      );
    }
  
    const news = data?.doctors || [];
  
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
  
    for (let i = 0; i < news.length; i += 3) {
      slides.push(news.slice(i, i + 3));
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
    
      <div className='mx-auto px-5 max-w-7xl lg:px-8 mt-15 '>
        {/* Carousel */}
      <div className="w-full">

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

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {slide.map((item) => (
                    <DoctorCard
                      key={item._id}
                      doctor={item}
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

      </div>
  
  )
}
