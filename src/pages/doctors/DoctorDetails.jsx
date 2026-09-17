import { base } from "@/app/mainApi.js";
import CommonNews from "@/components/CommonNews.jsx";
import ContactContainer from "@/components/ContactContainer.jsx";
import Footer from "@/components/Footer.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Skeleton } from "@/components/ui/skeleton.jsx";
import { useGetDoctorQuery } from "@/features/admin/add/doctor/doctorApi.js";
import { Badge } from "lucide-react";
import { useParams } from "react-router-dom";

import doctorCover from '@/assets/images/doctor.png'
import appointmentCover from '@/assets/images/appointmentCover.png'


export default function DoctorDetails() {

  const { id } = useParams();
  const { data: doctor, isLoading, error } = useGetDoctorQuery(id);



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

      <section className="relative min-h-70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${doctorCover})` }}></div>
        <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


        {/* Hero Content */}
        <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

          <div className="w-full text-[#202f72]">

            {/* Small Heading */}
            <div className="flex gap-x-2 font-medium tracking-wider">
              <span>Home</span>
              <span>/</span>
              <span>Doctor</span>
              <span>/</span>
              <span>{doctor.name}</span>

            </div>



            {/* Main Heading */}
            <h1 className="font-serif text-5xl font-bold text-[#202f72]">{doctor.specialist}</h1>



          </div>

        </div>
      </section>






      <div className=" py-5 mx-auto max-w-7xl px-5 lg:px-8">


        <Card className="grid md:grid-cols-2 gap-6">

          {/* Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={`${base}/${doctor.image}`}
              alt={doctor.name}
              className="rounded-xl w-full max-h-100 object-cover"
            />
          </div>

          {/* Product Info */}
          <CardContent className="flex flex-col gap-4">

            <h1 className="text-3xl font-bold">{doctor.name}</h1>

            <div className="flex gap-2">
              <Badge>linkdin</Badge>
              <Badge variant="outline">facebook</Badge>
            </div>

            <p className="text-gray-600">
              {doctor.specialist}
            </p>



          </CardContent>
        </Card>

      </div>


      {/* common news section  */}
      <CommonNews />


      {/* contact section  */}
      <ContactContainer />

      {/* footer section  */}
      <Footer />




    </div>
  )
}
