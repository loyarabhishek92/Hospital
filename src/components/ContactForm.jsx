import { useAddContactMutation } from "@/features/admin/watch/contactApi.js";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { toast } from "./ui/toast.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Button } from "./ui/button.jsx";
import * as Yup from 'yup';




const addSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    subject: Yup.string().required('Subject is required'),
});


export default function ContactForm() {

    const { user } = useSelector(state => state.userSlice);
    const [addContact, { isLoading }] = useAddContactMutation();


    return (
        <div className="bg-[#202f72] rounded-md mt-10">


            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }}


                onSubmit={async (val, { resetForm }) => {
                    const formData = new FormData();
                    formData.append('name', val.name);
                    formData.append('email', val.email);
                    formData.append('subject', val.subject);
                    formData.append('message', val.message);

                    try {
                        await addContact({
                            body: formData,
                            token: user.token,
                        }).unwrap();
                        toast.add({
                            type: 'success',
                            title: 'Summited successfully',
                            description: 'Your Contact has been submitted.'
                        });
                        resetForm();
                    } catch (err) {
                        toast.add({
                            type: 'error',
                            title: 'Failed to submit',
                            description: 'check carefully'
                        });
                    }
                }}
            validationSchema={addSchema}
            >
                {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-3xl overflow-hidden rounded-lg bg-[#253477] shadow-lg"
                    >
                        {/* FORM GRID */}

                        <div className="grid grid-cols-1 md:grid-cols-2">

                            {/* NAME */}
                            <div className="border-b border-r border-[#aeb8e0]">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="
                h-16
                rounded-none
                border-0
                bg-transparent
                px-6
                text-lg
                text-white
                placeholder:text-white
                focus-visible:ring-0
              "
                                />

                                {touched.name &&
                                    errors.name && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.name}
                                        </p>
                                    )}
                            </div>



                            {/* EMAIL */}
                            <div className="border-b border-r border-[#aeb8e0]">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="
                h-16
                rounded-none
                border-0
                bg-transparent
                px-6
                text-lg
                text-white
                placeholder:text-white
                focus-visible:ring-0
              "
                                />

                                {touched.email &&
                                    errors.email && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.email}
                                        </p>
                                    )}
                            </div>

                                    {/* message */}
                            <div className="md:col-span-2 border-b border-r border-[#aeb8e0]">
                                <Input
                                    name="subject"
                                    placeholder="Subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="
                h-16
                rounded-none
                border-0
                bg-transparent
                px-6
                text-lg
                text-white
                placeholder:text-white
                focus-visible:ring-0
              "
                                />
                                {touched.subject &&
                                    errors.subject && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.subject}
                                        </p>
                                    )}

                            </div>









                            {/* MESSAGE */}
                            <div className="md:col-span-2">
                                <Textarea
                                    name="message"
                                    placeholder="Message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="
                min-h-[240px]
                resize-none
                rounded-none
                border-0
                bg-transparent
                px-6
                py-6
                text-lg
                text-white
                placeholder:text-white
                focus-visible:ring-0
              "
                                />


                            </div>
                        </div>

                        {/* SUBMIT */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="
            h-16
            w-full
            rounded-none
            bg-[#c2d4fa]
            text-xl
            font-medium
            tracking-wide
            text-[#253477]
            hover:bg-[#b3c9f5]
          "
                        >
                            {isLoading ? "SUBMITTING..." : "SUBMIT"}
                        </Button>
                    </form>
                )}
            </Formik>





        </div>
    )
}
