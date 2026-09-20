import { Formik } from "formik";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { toast } from "./ui/toast.jsx";
import { useSelector } from "react-redux";
import { useAddAppointmentMutation } from "@/features/admin/watch/appointmentApi.js";
import { useGetDoctorsQuery } from "@/features/admin/add/doctor/doctorApi.js";
import * as Yup from 'yup';



const addSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.number().required('Phone is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    doctor: Yup.string().required('Doctor is required'),
    department: Yup.string().required('Department is required'),
});


export default function AppointmentForm() {
    const { user } = useSelector(state => state.userSlice);
    const [addAppointment, { isLoading }] = useAddAppointmentMutation();
    const { data: doctorData, isLoading: doctorLoading, isError } = useGetDoctorsQuery();

     if (doctorLoading) {
      return (
        <section className="py-20 text-center">
          Loading doctors...
        </section>
      );
    }
  
    if (isError) {
      return (
        <section className="py-20 text-center text-red-500">
          Failed to load doctors.
        </section>
      );
    }

    return (
        <div className="bg-[#202f72] rounded-md">


            <Formik
                initialValues={{
                    name: '',
                    gender: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    doctor: '',
                    department: '',
                    message: ''
                }}


                onSubmit={async (val, { resetForm }) => {
                    const formData = new FormData();
                    formData.append('name', val.name);
                    formData.append('gender', val.gender);
                    formData.append('email', val.email);
                    formData.append('phone', val.phone);
                    formData.append('date', val.date);
                    formData.append('time', val.time);
                    formData.append('doctor', val.doctor);
                    formData.append('department', val.department);
                    formData.append('message', val.message);

                    try {
                        await addAppointment({
                            body: formData,
                            token: user.token,
                        }).unwrap();
                        toast.add({
                            type: 'success',
                            title: 'Added successfully',
                            description: 'Your appointment has been added.'
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
                {({ handleChange, handleSubmit, values, errors, touched, setFieldValue, handleBlur }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-7xl overflow-hidden rounded-lg bg-[#253477] shadow-lg"
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

                            {/* GENDER */}
                            <div className="border-b border-[#aeb8e0]">
                                <Select
                                    value={values.gender}
                                    onValueChange={(value) =>
                                        setFieldValue("gender", value)
                                    }
                                >
                                    <SelectTrigger
                                        className="
                  h-16
                  w-full
                  rounded-none
                  border-0
                  bg-transparent
                  px-6
                  text-lg
                  text-white
                  focus:ring-0
                "
                                    >
                                        <SelectValue placeholder="Gender" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="male">
                                            Male
                                        </SelectItem>

                                        <SelectItem value="female">
                                            Female
                                        </SelectItem>

                                        <SelectItem value="other">
                                            Other
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {touched.gender &&
                                    errors.gender && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.gender}
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

                            {/* PHONE */}
                            <div className="border-b border-[#aeb8e0]">
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={values.phone}
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

                                {touched.phone &&
                                    errors.phone && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.phone}
                                        </p>
                                    )}
                            </div>

                            {/* DATE */}
                            <div className="border-b border-r border-[#aeb8e0]">
                                <Input
                                    type="date"
                                    name="date"
                                    value={values.date}
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
                focus-visible:ring-0
              "
                                />
                                {touched.date &&
                                    errors.date && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.date}
                                        </p>
                                    )}

                            </div>

                            {/* TIME */}
                            <div className="border-b border-[#aeb8e0]">
                                <Input
                                    type="time"
                                    name="time"
                                    value={values.time}
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
                focus-visible:ring-0
              "
                                />
                                {touched.time &&
                                    errors.time && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.time}
                                        </p>
                                    )}

                            </div>

                            {/* DOCTOR */}
                            <div className="border-b border-r border-[#aeb8e0]">
                                <Select
                                    value={values.doctor}
                                    onValueChange={(value) =>
                                        setFieldValue("doctor", value)
                                    }
                                >
                                    <SelectTrigger
                                        className="
                  h-16
                  w-full
                  rounded-none
                  border-0
                  bg-transparent
                  px-6
                  text-lg
                  text-white
                  focus:ring-0
                "
                                    >
                                        <SelectValue placeholder="Doctor" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {doctorData?.doctors?.map((doctor) => (
                                            <SelectItem
                                                key={doctor.name}
                                                value={doctor.name}
                                            >
                                                Dr. {doctor.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {touched.doctor &&
                                    errors.doctor && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.doctor}
                                        </p>
                                    )}

                            </div>

                            {/* DEPARTMENT */}
                            <div className="border-b border-[#aeb8e0]">
                                <Select
                                    value={values.department}
                                    onValueChange={(value) =>
                                        setFieldValue(
                                            "department",
                                            value
                                        )
                                    }
                                >
                                    <SelectTrigger
                                        className="
                  h-16
                  w-full
                  rounded-none
                  border-0
                  bg-transparent
                  px-6
                  text-lg
                  text-white
                  focus:ring-0
                "
                                    >
                                        <SelectValue placeholder="Department" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {doctorData?.doctors?.map((department) => (
                                            <SelectItem
                                                key={department.specialist}
                                                value={department.specialist}
                                            >
                                                {department.specialist}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {touched.department &&
                                    errors.department && (
                                        <p className="px-6 pb-2 text-sm text-red-300">
                                            {errors.department}
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
