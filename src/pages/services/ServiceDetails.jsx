
import appointmentCover from '@/assets/images/appointmentCover.png';
import ContactContainer from "@/components/ContactContainer.jsx";
import Footer from "@/components/Footer.jsx";
import { useGetServiceQuery, useGetServicesQuery } from "@/features/admin/add/service/serviceApi.js";
import { useParams } from "react-router-dom";
import { base } from '@/app/mainApi.js';
import { HeartPlusIcon } from 'lucide-react';
import CommonDoctor from '@/components/CommonDoctor.jsx';


export default function ServiceDetails() {


    const { id } = useParams();
    const { data: service, isLoading, error } = useGetServiceQuery(id);
    const { data } = useGetServicesQuery();

    if (isLoading) return <h1>loading..</h1>
    if (error) return <h1>{error.data}</h1>

    console.log(service);


    return (
        <div>
            <section className="relative min-h-70 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center">
                    <img src={`${base}/${service.image}`} alt="" className='w-full object-cover' />
                </div>
                <div className="absolute inset-0 bg-cover bg-center bg-white opacity-45"></div>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${appointmentCover})` }}></div>


                {/* Hero Content */}
                <div className="relative flex min-h-70 items-center mx-auto max-w-7xl px-5 lg:px-8">

                    <div className="w-full text-[#202f72]">

                        {/* Small Heading */}
                        <div className="flex gap-x-2 font-medium tracking-wider">
                            <span>Home</span>
                            <span>/</span>
                            <span>Service</span>

                        </div>



                        {/* Main Heading */}
                        <h1 className="font-serif text-5xl font-bold text-[#202f72]">{service.name}</h1>



                    </div>

                </div>
            </section>


            {/* service section  */}
            <div className=" lg:grid lg:grid-cols-4 lg:space-x-5 mt-15 h-full mx-auto max-w-7xl px-5 lg:px-8">

                <div className="border-2 border-grey-500 rounded-sm h-fit hidden lg:grid">


                    <div className="flex flex-col w-full">
                        {data.services?.map((serviceItem) => (
                            <div className=" hover:bg-[#202f72] hover:text-gray-300" key={serviceItem._id}>
                                <div className='p-5 flex gap-2 items-center font-medium'>

                                    <HeartPlusIcon />
                                    <h1>{serviceItem.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:flex lg:flex-col  lg:col-span-3 space-y-4">
                    <img src={`${base}/${service.image}`} alt="image" />
                    <p>{service.description}</p>
                </div>




            </div>


            {/* common doctor section  */}
            <div className=" mt-20 flex flex-col gap-x-5 justify-center items-center mx-auto max-w-7xl px-5 lg:px-8">
                <h2 className="uppercase text-xl text-blue-400 tracking-wider font-extrabold">meet the </h2>
                <h1 className="text-3xl font-serif font-bold tracking-wider">Team Members</h1>
            </div>
            <CommonDoctor />


            {/* contact section  */}
            <ContactContainer />

            {/* footer section  */}
            <Footer />
        </div>
    )
}
