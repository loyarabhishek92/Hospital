import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();
const port = 5000;

app.use(express.json());
app.use(morgan('dev'));

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
        message: 'Hello, Welcome to the API'
    });
});

