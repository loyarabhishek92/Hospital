import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useGetDoctorQuery, useUpdateDoctorMutation } from '../doctorApi.js';
import { useSelector } from 'react-redux';
import { Spinner } from '@/components/ui/spinner.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Formik } from 'formik';
import { toast } from '@/components/ui/toast.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { specialists } from './AddDoctor.jsx';
import { Button } from '@/components/ui/button.jsx';
import { base } from '@/app/mainApi.js';


const editSchema = Yup.object({
  name: Yup.string().min(4, 'Name must be at least 4 characters').max(40, 'Title must be at most 40 characters').required('Title is required'),
  specialist: Yup.string().required('Specialist is required'),
  linkedinId: Yup.string().required('LinkedinId is required'),
  facebookId: Yup.string().required('FacebookId is required'),
  instagramId: Yup.string().required('InstagramId is required'),
  image: Yup.mixed().test('file Type', 'Unsupported file', (val) => {
    if (!val) return true;
    return val && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type)
  }),
});

export default function EditDoctor() {

    const {id} = useParams();
    const {isLoading, data, error} = useGetDoctorQuery(id);
    const [updateDoctor, {isLoading: updateLoading}] = useUpdateDoctorMutation();
    const {user} = useSelector(state => state.userSlice);
    const nav = useNavigate();

    if(isLoading) return <Spinner />
    if(error) return <p className="text-destructive">{error.data.message}</p>


  return (
    <div className="mt-5">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Edit your doctors</CardTitle>
          <CardDescription>
            Enter doctor details below to edit your product.
          </CardDescription>
        </CardHeader>
        <CardContent>


          <Formik

            initialValues={{

              name: data.name,
              specialist: data.specialist,
              linkedinId: data.linkedinId,
              facebookId: data.facebookId,
              instagramId: data.instagramId,
              image: '',
              imageReview: data.image,


            }}
            onSubmit={async (val) => {
              const formData = new FormData();
              formData.append('name', val.name);
              formData.append('specialist', val.specialist);
              formData.append('linkedinId', val.linkedinId);
              formData.append('facebookId', val.facebookId);
              formData.append('instagramId', val.instagramId);
             

              if (val.image) formData.append('image', val.image);
              try {
                await updateDoctor({ id, body: formData, token: user.token }).unwrap();
                toast.add({
                    type: 'success',
                    title: 'updated successfully',
                    description: 'doctor has been updated.'
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
                    <Label htmlFor="name">Name</Label>
                    <Input
                      name='name'
                      onChange={handleChange}
                      value={values.name}
                      id="name"
                      type="text"
                    />
                    {errors.name && touched.name && <p className="text-destructive">{errors.name}</p>}
                  </div>

                

                  <div className="grid gap-2">
                    <Label htmlFor="specialist">Specialist</Label>
                    <Select
                      onValueChange={(val) => {
                        setFieldValue('specialist', val);
                      }}

                      value={values.specialist}
                    >
                      <SelectTrigger className="w-full ">
                        <SelectValue placeholder="Select a Specialist" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Specialists</SelectLabel>

                          {specialists.map((specialist, index) => (
                            <SelectItem key={index} value={specialist}>{specialist}</SelectItem>
                          ))}

                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {errors.specialist && touched.specialist && <p className="text-destructive">{errors.specialist}</p>}
                  </div>


                  

                  <div className="grid gap-2">
                    <Label htmlFor="linkedinId">LinkedinId</Label>
                    <Input
                      name='linkedinId'
                      onChange={handleChange}
                      value={values.linkedinId}
                      id="linkedinId"
                      type="text"
                      placeholder="LinkedinId"
                    />
                    {errors.linkedinId && touched.linkedinId && <p className="text-destructive">{errors.linkedinId}</p>}
                  </div>





                  <div className="grid gap-2">
                    <Label htmlFor="facebookId">FacebookId</Label>
                    <Input
                      name='facebookId'
                      onChange={handleChange}
                      value={values.facebookId}
                      id="facebookId"
                      type="text"
                      placeholder="FacebookId"

                    />
                    {errors.facebookId && touched.facebookId && <p className="text-destructive">{errors.facebookId}</p>}
                  </div>


                  <div className="grid gap-2">
                    <Label htmlFor="instagramId">InstagramId</Label>
                    <Input
                      name='instagramId'
                      onChange={handleChange}
                      value={values.instagramId}
                      id="instagramId"
                      type="text"
                      placeholder="InstagramId"

                    />
                    {errors.instagramId && touched.instagramId && <p className="text-destructive">{errors.instagramId}</p>}
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
