import { useSelector } from "react-redux";
import { useGetUserQuery, useUpdateUserMutation } from "./userApi.js"
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Formik } from "formik";
import { updateUserValidator } from "@/lib/formValidator.js";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Spinner } from "@/components/ui/spinner.jsx";
import { Button } from "@/components/ui/button.jsx";
import { toast } from "@/components/ui/toast.jsx";
import { base } from "@/app/mainApi.js";


export default function UserProfile() {

    const { user } = useSelector(state => state.userSlice);
    const { isLoading, error, data } = useGetUserQuery(user.token);
     const nav = useNavigate();
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();


    return (
        <div className="mt-5 mx-auto max-w-7xl px-5 lg:px-8">
            {isLoading ? <div className="animate-pulse mb-5">
                <div className="bg-gray-300 h-32 w-64 rounded mb-3"></div>
                <div className="bg-gray-300 h-4 w-40 rounded mb-2"></div>
                <div className="bg-gray-300 h-4 w-32 rounded "></div>
            </div> : <div className="border-2 border-gray-200 rounded-2xl w-full max-w-7xl flex flex-wrap p-5 gap-5">
                <div className="flex flex-row items-center gap-2 lg:flex-col">
                    <img  src={`${base}/${data?.image}`} className="h-20 w-20 lg:w-30 lg:h-30 rounded-full lg:rounded-sm border-2 border-amber-300" alt="profileimg" />

                    <h1>{data?.username} | {data?.email} | {data?.role}</h1>
                </div>
                <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Update your profile</CardTitle>
                    <CardDescription>
                        Enter your details below to update your account
                    </CardDescription>
                </CardHeader>
                <CardContent>


                    <Formik
                        initialValues={{
                            username: data?.username,
                            email: data?.email,
                        }}

                        onSubmit={async (val) => {
                            try {
                                await updateUser({
                                    body: val,
                                    token: user.token
                                }).unwrap();
                                toast.add({
                                    type: 'success',
                                    title: 'updated successfully',
                                    description: 'Your profile has been updated'
                                });
                                nav('/');
                            } catch (err) {
                                toast.add({
                                    type: 'error',
                                    title: 'Failed to update',
                                    description: 'check your valid field'
                                });
                            }
                        }}

                        validationSchema={updateUserValidator}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (

                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">

                                    <div className="grid gap-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.username}
                                            name='username'
                                            id="username"
                                            type="text"
                                            placeholder="Monan das"
                                        />
                                        {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.email}
                                            name='email'
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                        />
                                        {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
                                    </div>
                                    <CardFooter className="flex-col gap-2">
                                        <Button
                                        disabled={isUpdating} type="submit" className="w-full">
                                            {isUpdating ? <Spinner /> : 'Update'}
                                        </Button>
                                    </CardFooter>
                                </div>
                            </form>
                        )}
                    </Formik>







                </CardContent>

            </Card>
            </div>}

            
                        {/* {error?.data?.message} */}

        </div>
    )
}
