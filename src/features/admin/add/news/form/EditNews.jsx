import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useGetSingleNewsQuery, useUpdateNewsMutation } from '../newsApi.js';
import { useSelector } from 'react-redux';
import { Spinner } from '@/components/ui/spinner.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Formik } from 'formik';
import { toast } from '@/components/ui/toast.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { DaysOfWeek } from './AddNews.jsx';
import { Button } from '@/components/ui/button.jsx';
import { base } from '@/app/mainApi.js';

const editSchema = Yup.object({
    title: Yup.string().min(4, 'Title must be at least 4 characters').max(40, 'Title must be at most 40 characters').required('Title is required'),
    author: Yup.string().min(4, 'Author must be at least 4 characters').max(40, 'Author must be at most 40 characters').required('Author is required'),
    description: Yup.string().min(4, 'Description must be at least 4 characters').max(40, 'Description must be at most 40 characters').required('Description is required'),
    date: Yup.string().required('Date is required'),
    image: Yup.mixed().test('file Type', 'Unsupported file', (val) => {
        if (!val) return true;
        return val && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type)
    }),
});

export default function EditNews() {
    const { id } = useParams();
    const { isLoading, data, error } = useGetSingleNewsQuery(id);
    const [updateNews, { isLoading: updateLoading }] = useUpdateNewsMutation();
    const { user } = useSelector(state => state.userSlice);
    const nav = useNavigate();

    if (isLoading) return <Spinner />
    if (error) return <p className="text-destructive">{error.data.message}</p>
    return (
        <div className="mt-5 px-50">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Edit your news</CardTitle>
                    <CardDescription>
                        Enter news details below to edit your news.
                    </CardDescription>
                </CardHeader>
                <CardContent>


                    <Formik

                        initialValues={{

                            title: data.title,
                            author: data.author,
                            description: data.description,
                            date: data.date,
                            image: '',
                            imageReview: data.image,


                        }}
                        onSubmit={async (val) => {
                            const formData = new FormData();
                            formData.append('title', val.title);
                            formData.append('author', val.author);
                            formData.append('description', val.description);
                            formData.append('date', val.date);
                            


                            if (val.image) formData.append('image', val.image);
                            try {
                                await updateNews({ id, body: formData, token: user.token }).unwrap();
                                toast.add({
                                    type: 'success',
                                    title: 'updated successfully',
                                    description: 'news has been updated.'
                                });
                                nav(-1)

                            } catch (err) {
                                toast.add({
                                    type: 'error',
                                    title: 'Failed to update',
                                    description: 'check your fields..'
                                });
                            }



                        }}
                        validationSchema={editSchema}

                    >
                        {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            name='title'
                                            onChange={handleChange}
                                            value={values.title}
                                            id="title"
                                            type="text"
                                        />
                                        {errors.title && touched.title && <p className="text-destructive">{errors.title}</p>}
                                    </div>


                                     <div className="grid gap-2">
                                        <Label htmlFor="author">Author</Label>
                                        <Input
                                            name='author'
                                            onChange={handleChange}
                                            value={values.author}
                                            id="author"
                                            type="text"
                                        />
                                        {errors.author && touched.author && <p className="text-destructive">{errors.author}</p>}
                                    </div>


                                     <div className="grid gap-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Input
                                            name='description'
                                            onChange={handleChange}
                                            value={values.description}
                                            id="description"
                                            type="text"
                                        />
                                        {errors.description && touched.description && <p className="text-destructive">{errors.description}</p>}
                                    </div>



                                    <div className="grid gap-2">
                                        <Label htmlFor="date">Day of week</Label>
                                        <Select
                                            onValueChange={(val) => {
                                                setFieldValue('date', val);
                                            }}

                                            value={values.date}
                                        >
                                            <SelectTrigger className="w-full ">
                                                <SelectValue placeholder="Select a day of week" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Days of week</SelectLabel>

                                                    {DaysOfWeek.map((date, index) => (
                                                        <SelectItem key={index} value={date}>{date}</SelectItem>
                                                    ))}

                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>

                                        {errors.date && touched.date && <p className="text-destructive">{errors.date}</p>}
                                    </div>





                                    <div className="grid gap-2">
                                        <Label htmlFor="image">Select Image</Label>
                                        <Input
                                            name='image'
                                            onChange={(e) => {
                                                const file = e.target.files[0];



                                                setFieldValue('imageReview', URL.createObjectURL(file));
                                                setFieldValue('image', file);

                                            }}

                                            type="file"
                                            placeholder="image"
                                        />
                                        {values.imageReview && !errors.image && <img src={values.image ? values.imageReview : `${base}/${values.imageReview}`} alt={values.fullname} />}

                                        {errors.image && touched.image && <p className="text-destructive">{errors.image}</p>}
                                    </div>
                                </div>


                                <div className="w-full flex justify-end  mt-5">
                                    <Button disabled={updateLoading} type="submit" className="bg-blue-900 p-5">
                                        {updateLoading ? <Spinner /> && <h1>Updating....</h1> : "Update"}
                                    </Button>
                                </div>




                            </form>
                        )}
                    </Formik>





                </CardContent>

            </Card>
        </div>
    )
}
