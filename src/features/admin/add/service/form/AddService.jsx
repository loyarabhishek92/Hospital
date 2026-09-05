

import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useAddServiceMutation } from '../serviceApi.js';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Formik } from 'formik';
import { toast } from '@/components/ui/toast.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Spinner } from '@/components/ui/spinner.jsx';

const addSchema = Yup.object({
    name: Yup.string().min(4, 'Name must be at least 4 characters').max(40, 'Name must be at most 40 characters').required('Name is required'),
    description: Yup.string().min(4, 'Description must be at least 4 characters').max(500, 'Description must be at most 40 characters').required('Description is required'),
    image: Yup.mixed().test('file Type', 'Unsupported file', (val) => {
        return val && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type)
    }).required(),
});


export default function AddService() {
     const { user } = useSelector(state => state.userSlice);
    const [addService, { isLoading }] = useAddServiceMutation();
    const nav = useNavigate();
    return (
        <div className="mt-5 px-50">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Add your service</CardTitle>
                    <CardDescription>
                        Enter service details below to add your product.
                    </CardDescription>
                </CardHeader>
                <CardContent>


                    <Formik
                        initialValues={{
                            name: '',
                            description: '',
                            image: '',
                            imageReview: '',
                        }}

                        onSubmit={async (val) => {
                            const formData = new FormData();
                            formData.append('name', val.name);
                            formData.append('description', val.description);
                            formData.append('image', val.image);

                            try {
                                await addService({
                                    body: formData,
                                    token: user.token,
                                }).unwrap();
                                 toast.add({
                                    type: 'success',
                                    title: 'Added successfully',
                                    description: 'Your service has been added.'
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
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.name}
                                            name='name'
                                            id="name"
                                            type="text"
                                            placeholder="Enter a service name"
                                        />
                                        {errors.name && touched.name && <p className="text-destructive">{errors.name}</p>}
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
