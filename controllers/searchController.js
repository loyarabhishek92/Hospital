import Doctor from "../models/Doctor.js";
import News from "../models/News.js";
import Service from "../models/Service.js";


export const globalSearch = async (req, res) => {
    try {
        const { query } = req.query;

        // If no query, return empty results
        if (!query) {
            return res.status(200).json({ doctors: [], services: [], news: [] });
        }

        // Create a case-insensitive regex for partial matching
        const searchRegex = new RegExp(query, 'i');

        // Run queries in parallel for performance
        const [doctors, services, news] = await Promise.all([
            Doctor.find({
                $or: [{ name: searchRegex }, { specialist: searchRegex }]
            }).limit(5), // Limit results per category

            Service.find({
                $or: [{ name: searchRegex }, { description: searchRegex }]
            }).limit(5),

            News.find({
                $or: [{ date: searchRegex }, { author: searchRegex }, { title: searchRegex }]
            }).limit(5)
        ]);

        res.status(200).json({
            doctors,
            services,
            news
        });

    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};