
import Appointment from "../models/Appointment.js";


export const create = async (req, res) => {
    try {
        const a = await Appointment.create({ ...req.body, user: req.user?._id });
        const full = await a.populate(["doctor", "department"]);
        return res.status(200).json({ message: 'Appointment submitted' });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }

}
export const mine = async (req, res) => {
    try {
        return res.json({ appointments: await Appointment.find({ user: req.user?._id }).populate("doctor department").sort({ createdAt: -1 }) });
    } catch (err) {
        return res.status(400).json(err.message);
    }

}


export const getAppointments = async(req, res) => {
    try {
        const allAppointments = await Appointment.find({});
        return res.status(200).json({allAppointments});
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
   
}
