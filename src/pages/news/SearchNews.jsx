import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Formik } from "formik";
import { Search } from "lucide-react";


export default function SearchNews() {
    return (
        <div>
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
        </div>
    )
}
