import express from 'express';
import { adminCheck, userCheck } from '../middlewares/userCheck.js';
import { createAppointment, deleteAppointment, getAppointment, getAppointments } from '../controllers/appointmentController.js';
import { methodNotAllow } from '../utils/methodNotAllow.js';
import mongoose from 'mongoose';

const router = express.Router();

router.route('/').get(getAppointments).post(userCheck, createAppointment).all(methodNotAllow);

router.param('id', (req, res, next, id) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: 'Invalid ID'});
    }
    req.id = id;
    next();
});

router.route('/:id').get(getAppointment).delete(userCheck, adminCheck, deleteAppointment).all(methodNotAllow);

export default router;