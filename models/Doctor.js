import mongoose from "mongoose";

export const specialists = [
    'Neurologist',
    'Dermatologist',
    'Cardiologist',
    'Pediatrician'
];

export const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    specialist: {
        type: String,
        enum: specialists,
        required: true
    },
    linkedinId: {
        type: String,
        required: true,
        unique: true
    },
    facebookId: {
        type: String,
        required: true,
        unique: true
    },
    instagramId: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;