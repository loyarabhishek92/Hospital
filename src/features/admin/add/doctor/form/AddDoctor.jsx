import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useAddDoctorMutation } from "../doctorApi.js";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/toast.jsx";
import * as Yup from 'yup';
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Spinner } from "@/components/ui/spinner.jsx";


export const specialists = [
    'Neurologist',
    'Dermatologist',
    'Cardiologist',
    'Pediatrician'
];


const addSchema = Yup.object({
    name: Yup.string().min(4, 'Name must be at least 4 characters').max(40, 'Name must be at most 40 characters').required('Title is required'),
    specialist: Yup.string().required('Specialist is required'),
    linkedinId: Yup.string().required('LinkedinId is required'),
    facebookId: Yup.string().required('FacebookId is required'),
    instagramId: Yup.string().required('InstagramId is required'),
    image: Yup.mixed().test('file Type', 'Unsupported file', (val) => {
        return val && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type)
    }).required(),
});





export default function AddDoctor() {
    const {user} = useSelector(state => state.userSlice);
    const [addDoctor, {isLoading}] = useAddDoctorMutation();
    const nav = useNavigate();
  return (
     <div className="mt-5">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Add your Doctor</CardTitle>
                    <CardDescription>
                        Enter doctor details below to add your doctor.
                    </CardDescription>
                </CardHeader>
                <CardContent>


                    <Formik
                        initialValues={{
                            name: '',
                            specialist: '',
                            linkedinId: '',
                            facebookId: '',
                            instagramId: '',
                            image: '',
                            imageReview: '',
                        }}

                        onSubmit={async (val) => {
                            const formData = new FormData();
                            formData.append('name', val.name);
                            formData.append('specialist', val.specialist);
                            formData.append('linkedinId', val.linkedinId);
                            formData.append('facebookId', val.facebookId);
                            formData.append('instagramId', val.instagramId);
                            formData.append('image', val.image);

                            try {
                                await addDoctor({
                                    body: formData,
                                    token: user.token,
                                }).unwrap();
                                toast.add({
                                    type: 'success',
                                    title: 'Added successfully',
                                    description: 'Your doctor has been added.'
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
                                            placeholder="Enter doctor name"
                                        />
                                        {errors.name && touched.name && <p className="text-destructive">{errors.name}</p>}
                                    </div>

                                    


                                    <div className="grid gap-2">
                                        <Label htmlFor="specialist">Specialist</Label>


                                        <Select onValueChange={(val) => {
                                            setFieldValue('specialist', val)
                                        }}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a Specialist" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Specialists</SelectLabel>

                                                    {specialists.map((specialist, index) => (

                                                        <SelectItem value={specialist} key={index}>{specialist}</SelectItem>
                                                    ))}

                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {errors.specialist && touched.specialist && <p className="text-destructive">{errors.specialist}</p>}

                                    </div>


                                

                                    <div className="grid gap-2">
                                        <Label htmlFor="linkedinId">LinkedinId</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.linkedinId}
                                            name="linkedinId"
                                            id="linkedinId"
                                            type="text"
                                            placeholder="LinkedinId"
                                        />
                                        {errors.linkedinId && touched.linkedinId && <p className="text-destructive">{errors.linkedinId}</p>}
                                    </div>





                                    <div className="grid gap-2">
                                        <Label htmlFor="facebookId">FacebookId</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.facebookId}
                                            name="facebookId"
                                            id="facebookId"
                                            type="text"
                                            placeholder="FacebookId"
                                        />
                                        {errors.facebookId && touched.facebookId && <p className="text-destructive">{errors.facebookId}</p>}
                                    </div>



                                     <div className="grid gap-2">
                                        <Label htmlFor="instagramId">InstagramId</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.instagramId}
                                            name="instagramId"
                                            id="instagramId"
                                            type="text"
                                            placeholder="InstagramId"
                                        />
                                        {errors.instagramId && touched.instagramId && <p className="text-destructive">{errors.instagramId}</p>}
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
