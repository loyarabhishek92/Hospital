import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js'
import newsRoutes from './routes/newsRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js'

const app = express();
const port = 5000;

app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload({
    limits: {fileSize: 5 * 1024 * 1024}
}));

app.use(express.static('uploads/users'));
app.use(express.static('uploads/doctors'));
app.use(express.static('uploads/services'));
app.use(express.static('uploads/news'));

app.use(cors({
    origin: 'http://localhost:5173'
}));

//database connection
mongoose.connect('mongodb+srv://Abhishek:abhishek200@cluster0.d7y0puu.mongodb.net/Hospital').then((val) => {
    app.listen(port, () => {
        console.log(`Database connected and server is running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
});


app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello!, Welcome to the Hospital API.'
    });
});


app.use('/api/user', userRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/contact', contactRoutes);
