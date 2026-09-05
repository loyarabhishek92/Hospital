import Contact from "../models/Contact.js";

export const createContact = async(req, res) => {
    const {name, email, subject, message} = req.body || {};
    try {
        await Contact.create({name, email, subject, message});
        return res.status(200).json({message: 'Contact submitted successfully'});
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
}


export const getContacts = async(req, res) => {
    try {
        const getAllContacts = await Contact.find();
        return res.status(200).json({
            success: true,
            count: getAllContacts.length,
            contacts: getAllContacts
        });
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
}



export const deleteContact = async (req, res) => {
    try {
        const isExist = await Contact.findById(req.id);

        if (!isExist) {
            return res.status(404).json({ message: 'Contact not found' });
        }


        await isExist.deleteOne();
        return res.status(200).json({ message: 'Contact deleted successfully' });

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
