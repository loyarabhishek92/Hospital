


import Appointment from "../models/Appointment.js";












// rating lai convert garna ko lagi {rating: {gt:4}} yesto ma 
function convertQuery(queryObj) {
    const mongoQuery = {};

    for (const key in queryObj) {
        const match = key.match(/(\w+)\[(\w+)\]/);

        if (match) {
            const field = match[1];
            const operator = match[2];

            if (!mongoQuery[field]) mongoQuery[field] = {};
            mongoQuery[field][`${operator}`] = Number(queryObj[key]);
        } else {
            mongoQuery[key] = queryObj[key];
        }
    }
    return mongoQuery;
}



export const createAppointment = async (req, res) => {
    const { name, gender, email, phone, date, time, doctor, department, message } = req.body || {};

    try {
        await Appointment.create({
            name,
            gender,
            email,
            phone,
            date,
            time,
            doctor,
            department,
            message,
        });
        return res.status(200).json({ message: 'Appointment created' });

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}


export const getAppointments = async (req, res) => {
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields', 'search'];
    try {

        excludeFields.forEach(el => delete queryObj[el]);

        const mongoQuery = convertQuery(queryObj); // line for rating converting
        let query = Appointment.find(mongoQuery);


        // search ko lagi
        if (req.query.search) {
            const search = req.query.search;
            if (some((n) => n.toLowerCase().includes(search.toLowerCase()))) {
                query.find({ name: { $regex: search, $options: 'i' } });
            } else if (some((n) => n.toLowerCase().includes(search.toLowerCase()))) {
                query.find({ email: { $regex: search, $options: 'i' } });
            }
        }


        //sorting ko lagi
        // if (req.query.sort) {
        //     const sortBy = req.query.sort.split(',').join(' ');
        //     query = query.sort(sortBy);
        // }

        // //field anusar search garnako lagi
        // if (req.query.fields) {
        //     const fields = req.query.fields.split(',').join(' ');
        //     query = query.select(fields);
        // }



        // const page = Number(req.query.page) || 1;
        // const limit = Number(req.query.limit) || 2;
        // const skip = (page - 1) * limit;



        const appointments = await query;
        // const total = await Product.countDocuments({});
        // const pages = Math.ceil(total / limit); 

        // const products = await Product.find({});
        return res.status(200).json({ appointments });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });

    }
}





export const getAppointment = async (req, res) => {
    try {
        const isExist = await Appointment.findById(req.id);

        if (!isExist) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        return res.status(200).json(isExist);

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}









export const deleteAppointment = async (req, res) => {
    try {
        const isExist = await Appointment.findById(req.id);

        if (!isExist) {
            return res.status(404).json({ message: 'Appointment not found' });
        }


        await isExist.deleteOne();
        return res.status(200).json({ message: 'Appointment deleted successfully' });

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
