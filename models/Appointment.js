import mongoose from "mongoose";

export const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: Number,
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    message: String,
}, {timestamps: true});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;