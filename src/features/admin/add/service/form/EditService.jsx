import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useGetServiceQuery, useUpdateServiceMutation } from '../serviceApi.js';
import { useSelector } from 'react-redux';
import { Spinner } from '@/components/ui/spinner.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Formik } from 'formik';
import { toast } from '@/components/ui/toast.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Button } from '@/components/ui/button.jsx';
import { base } from '@/app/mainApi.js';

const editSchema = Yup.object({
  name: Yup.string().min(4, 'Name must be at least 4 characters').max(40, 'Name must be at most 40 characters').required('Name is required'),
  description: Yup.string().min(4, 'Description must be at least 4 characters').max(500, 'Description must be at most 40 characters').required('Description is required'),

  image: Yup.mixed().test('file Type', 'Unsupported file', (val) => {
    if (!val) return true;
    return val && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type)
  }),
});

export default function EditService() {
  const { id } = useParams();
  const { isLoading, data, error } = useGetServiceQuery(id);
  const [updateService, { isLoading: updateLoading }] = useUpdateServiceMutation();
  const { user } = useSelector(state => state.userSlice);
  const nav = useNavigate();

  if (isLoading) return <Spinner />
  if (error) return <p className="text-destructive">{error.data.message}</p>
  return (
    <div className="mt-5 px-50">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Edit your services</CardTitle>
          <CardDescription>
            Enter service details below to edit your service.
          </CardDescription>
        </CardHeader>
        <CardContent>


          <Formik

            initialValues={{

              name: data.name,
              description: data.description,
              image: '',
              imageReview: data.image,


            }}
            onSubmit={async (val) => {
              const formData = new FormData();
              formData.append('name', val.name);
              formData.append('description', val.description);


              if (val.image) formData.append('image', val.image);
              try {
                await updateService({ id, body: formData, token: user.token }).unwrap();
                toast.add({
                  type: 'success',
                  title: 'Updated successfully',
                  description: 'Your service has been update.'
                });
                nav(-1)

              } catch (err) {
                toast.add({
                  type: 'error',
                  title: 'Failed to update',
                  description: 'check carefully'
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
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      name='description'
                      onChange={handleChange}
                      value={values.description}
                      id="description"
                      type="text"
                      placeholder="Description"
                    />
                    {errors.description && touched.description && <p className="text-destructive">{errors.description}</p>}
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
