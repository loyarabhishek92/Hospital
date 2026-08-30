import mongoose from "mongoose";

export const appointmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    message: String,
}, {timestamps: true});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;