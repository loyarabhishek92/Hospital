import Service from "../models/Service.js";
import { removeFile } from "../utils/removeFile.js";






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



export const createService = async (req, res) => {
    const { name, description } = req.body || {};

    try {
        await Service.create({
            name,
            description,
            image: req.imagePath,
        });
        return res.status(200).json({ message: 'Service created' });

    } catch (err) {
        await removeFile(`./uploads/services/${req.imagePath}`, res);
        return res.status(400).json({ message: err.message });
    }
}


export const getServices = async (req, res) => {
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields', 'search'];
    try {

        excludeFields.forEach(el => delete queryObj[el]);

        const mongoQuery = convertQuery(queryObj); // line for rating converting
        let query = Service.find(mongoQuery);


        // search ko lagi
        if (req.query.search) {
            const search = req.query.search;
            if (some((n) => n.toLowerCase().includes(search.toLowerCase()))) {
                query.find({ name: { $regex: search, $options: 'i' } });
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



        const services = await query;
        // const total = await Product.countDocuments({});
        // const pages = Math.ceil(total / limit); 

        // const products = await Product.find({});
        return res.status(200).json({ services });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });

    }
}





export const getService = async (req, res) => {
    try {
        const isExist = await Service.findById(req.id);

        if (!isExist) {
            return res.status(404).json({ message: 'Service not found' });
        }
        return res.status(200).json(isExist);

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}





export const updateService = async (req, res) => {
    const { name, description } = req.body || {};

    try {
        const isExist = await Service.findById(req.id);

        if (!isExist) {
            if (req.imagePath) {
                await removeFile(`./uploads/services/${req.imagePath}`, res);
                return res.status(404).json({ message: 'Service not found' });
            } else {
                return res.status(404).json({ message: 'Service not found' });
            }
        }


        isExist.name = name || isExist.name;
        isExist.description = description || isExist.description;

        if (req.imagePath) {
            await removeFile(`./uploads/services/${isExist.image}`, res);
            isExist.image = req.imagePath;
            isExist.save();
            return res.status(200).json({ message: 'Service updated successfully' });

        } else {
            isExist.save();
            return res.status(200).json({ message: 'Service updated successfully' });
        }
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}




export const deleteService = async (req, res) => {
    try {
        const isExist = await Service.findById(req.id);

        if (!isExist) {
            return res.status(404).json({ message: 'Service not found' });
        }

        if (isExist.image) {
            await removeFile(`./uploads/services/${isExist.image}`);
        }

        await isExist.deleteOne();
        return res.status(200).json({ message: 'Service deleted successfully' });

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}