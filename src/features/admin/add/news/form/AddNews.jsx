import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useAddNewsMutation } from '../newsApi.js';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Formik } from 'formik';
import { toast } from '@/components/ui/toast.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Spinner } from '@/components/ui/spinner.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';

const addSchema = Yup.object({
    title: Yup.string().min(4, 'Title must be at least 4 characters').max(40, 'Title must be at most 40 characters').required('Title is required'),
    author: Yup.string().min(4, 'Author must be at least 4 characters').max(40, 'Author must be at most 40 characters').required('Author is required'),
    description: Yup.string().min(4, 'Description must be at least 4 characters').max(500, 'Description must be at most 40 characters').required('Description is required'),
    date: Yup.string().required('Date is required'),
    image: Yup.mixed().test('file Type', 'Unsupported file', (val) => {
        return val && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type)
    }).required(),
});


export const DaysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
];



export default function AddNews() {
    const { user } = useSelector(state => state.userSlice);
    const [addNews, { isLoading }] = useAddNewsMutation();
    const nav = useNavigate();
    return (
        <div className="mt-5 px-50">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Add your News</CardTitle>
                    <CardDescription>
                        Enter news details below to add your news.
                    </CardDescription>
                </CardHeader>
                <CardContent>


                    <Formik
                        initialValues={{
                            title: '',
                            author: '',
                            description: '',
                            date: '',
                            image: '',
                            imageReview: '',
                        }}

                        onSubmit={async (val) => {
                            const formData = new FormData();
                            formData.append('title', val.title);
                            formData.append('author', val.author);
                            formData.append('description', val.description);
                            formData.append('date', val.date);
                            formData.append('image', val.image);

                            try {
                                await addNews({
                                    body: formData,
                                    token: user.token,
                                }).unwrap();
                                toast.add({
                                    type: 'success',
                                    title: 'Added successfully',
                                    description: 'Your News has been added.'
                                });
                                nav(-1);
                            } catch (err) {
                                toast.add({
                                    type: 'error',
                                    title: 'Failed to add',
                                    description: 'check carefully'
                                });
                            }
                        }}

                        validationSchema={addSchema}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.title}
                                            name='title'
                                            id="title"
                                            type="text"
                                            placeholder="Enter a service name"
                                        />
                                        {errors.title && touched.title && <p className="text-destructive">{errors.title}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="author">Author</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.author}
                                            name='author'
                                            id="author"
                                            type="text"
                                            placeholder="Enter a service name"
                                        />
                                        {errors.author && touched.author && <p className="text-destructive">{errors.author}</p>}
                                    </div>


                                    <div className="grid gap-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            onChange={handleChange}
                                            value={values.description}
                                            name='description'
                                            id="description"
                                            type="text"
                                            placeholder="Description"
                                        />
                                        {errors.description && touched.description && <p className="text-destructive">{errors.description}</p>}
                                    </div>



                                    <div className="grid gap-2">
                                        <Label htmlFor="specialist">Day of week</Label>


                                        <Select onValueChange={(val) => {
                                            setFieldValue('date', val)
                                        }}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a Day of week" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Days of week</SelectLabel>

                                                    {DaysOfWeek.map((date, index) => (

                                                        <SelectItem value={date} key={index}>{date}</SelectItem>
                                                    ))}

                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {errors.date && touched.date && <p className="text-destructive">{errors.date}</p>}

                                    </div>




                                    <div className="grid gap-2">
                                        <Label htmlFor="image">Select Image</Label>
                                        <Input
                                            name="image"

                                            onChange={(e) => {
                                                const file = e.target.files[0];

                                                setFieldValue('imageReview', URL.createObjectURL(file));
                                                setFieldValue('image', file)
                                            }}
                                            type="file"
                                            placeholder="image"
                                        />
                                        {values.imageReview && !errors.image && <img src={values.imageReview} alt={values.fullname} />}

                                        {errors.image && touched.image && <p className="text-destructive">{errors.image}</p>}
                                    </div>

                                </div>


                                <div className="w-full flex justify-end mt-5">

                                    <Button
                                        disabled={isLoading} type="submit" className="bg-blue-900 p-5">
                                        {isLoading ? <Spinner /> : 'Add'}
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
