import { base } from "@/app/mainApi.js";
import Footer from "@/components/Footer.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import { useGetSingleNewsQuery } from "@/features/admin/add/news/newsApi.js";
import { Clock, LocationEdit, Mail, PhoneCall } from "lucide-react";
import { useParams } from "react-router-dom";


export default function NewsDetails() {

    const { id } = useParams();
    const { data: singleNews, isLoading, error } = useGetSingleNewsQuery(id);



    if (isLoading) {
        return (
            <div className="mx-auto p-6">
                <Card className="grid md:grid-cols-2 gap-6 p-6">

                    {/* Image Skeleton */}
                    <Skeleton className="w-full h-100 rounded-xl" />

                    {/* Content Skeleton */}
                    <div className="flex flex-col gap-4">
                        <Skeleton className="h-8 w-[70%]" />
                        <Skeleton className="h-5 w-[40%]" />
                        <Skeleton className="h-5 w-[60%]" />

                        <Skeleton className="h-20 w-full" />

                        <Skeleton className="h-8 w-[30%]" />
                        <Skeleton className="h-5 w-[40%]" />
                        <Skeleton className="h-5 w-[30%]" />

                        <Skeleton className="h-10 w-37.5" />
                    </div>

                </Card>
            </div>
        );
    }

    if (error) return <p>{error.data}</p>


    return (
        <div>
            <div className="mx-auto py-5 px-50">


                <Card className="grid md:grid-cols-2 gap-6">

                    {/* Product Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={`${base}/${singleNews.image}`}
                            alt={singleNews.title}
                            className="rounded-xl w-full max-h-100 object-cover"
                        />
                    </div>

                    {/* Product Info */}
                    <CardContent className="flex flex-col gap-4">

                        <h1 className="text-3xl font-bold">{singleNews.title}</h1>

                        <div className="flex gap-2">
                            {/* <Badge>{product.category}</Badge>
            <Badge variant="outline">{product.brand}</Badge> */}
                        </div>

                        <p className="text-gray-600">
                            {singleNews.description}
                        </p>

                        {/* <div className="text-3xl font-bold text-green-600">
            Rs {product.price}
          </div>

          <div className="text-sm text-gray-500">
            Stock Available: {product.stock}
          </div>

          <div className="text-sm text-yellow-500">
            Rating: ⭐ {product.rating}
          </div> */}

                        {/* <AddToCart product={product} /> */}

                    </CardContent>
                </Card>
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
