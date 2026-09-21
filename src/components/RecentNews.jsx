import { useGetNewsQuery } from "@/features/admin/add/news/newsApi.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "./ui/input.jsx";
import { Button } from "./ui/button.jsx";
import { Search } from "lucide-react";
import { base } from "@/app/mainApi.js";
import { Formik } from "formik";



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

export default function RecentNews({ adminData }) {
    const nav = useNavigate();




    return (
        <div>
            <div className="flex flex-col space-y-7">

                <Formik
                    initialValues={{
                        search: ''
                    }}

                    onSubmit={(val) => {
                        if (val.search.length > 0) {
                            setSearchParams({ search: val.search });
                        }
                    }}
                >
                    {({ handleChange, handleSubmit, values, errors }) => (
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="relative bg-[#253477] rounded-sm flex items-center justify-center">
                                <Input
                                    name='search'
                                    value={values.search}
                                    onChange={handleChange}
                                    placeholder="Search"
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
                                    type='submit'
                                    variant="ghost"
                                    size="icon"
                                    className='text-muted-foreground focus-visible:ring-ring/50 inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                                >
                                    <Search />
                                </Button>

                            </div>
                        </form>
                    )}
                </Formik>


                <div className="border-2 border-grey-500 flex flex-col space-y-4 py-5 px-3 rounded-sm">
                    <h1 className="text-4xl font-serif font-bold tracking-wider text-[#253477]">Recent Posts</h1>

                    <div className="flex flex-col gap-y-3 ">
                        {adminData?.length === 0 && (
                            <div className="flex items-center justify-center h-[60vh] text-red-500 text-lg">
                                No news found.
                            </div>
                        )}


                        {adminData?.map((NewsItem) => (
                            <div className="flex gap-x-3.5 cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-xl transition duration-300 group bg-gray-50" key={NewsItem._id} onClick={() => nav(`/news/${NewsItem._id}`)}>
                                <div className="h-15 w-15 overflow-hidden rounded-sm">
                                    <img src={`${base}/${NewsItem.image}`} alt="image" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-blue-400">{NewsItem.date} {NewsItem.createdAt} | {NewsItem.author}</span>
                                    <h1 className="font-serif font-bold">{NewsItem.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-2 border-grey-500 flex flex-col space-y-4 py-5 px-3 rounded-sm">
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
    )
}
