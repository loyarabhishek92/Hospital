import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    subject: String,
    message: String
}, {timestamps: true});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;