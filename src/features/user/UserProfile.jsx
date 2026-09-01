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


export default function UserProfile() {

    const { user } = useSelector(state => state.userSlice);
    const { isLoading, error, data } = useGetUserQuery(user.token);
     const nav = useNavigate();

    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    return (
        <div className="p-5">
            {isLoading ? <div className="animate-pulse mb-5">
                <div className="bg-gray-300 h-32 w-64 rounded mb-3"></div>
                <div className="bg-gray-300 h-4 w-40 rounded mb-2"></div>
                <div className="bg-gray-300 h-4 w-32 rounded "></div>
            </div> : <Card className="w-full max-w-sm">
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

            </Card>}

            
                        {/* {error?.data?.message} */}

        </div>
    )
}
