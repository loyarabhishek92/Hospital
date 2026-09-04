import express from 'express';
import { adminCheck, userCheck } from '../middlewares/userCheck.js';
import { create, getAppointments, mine } from '../controllers/appointmentController.js';
import { methodNotAllow } from '../utils/methodNotAllow.js';

const router = express.Router();

router.route('/').post(userCheck, create).get(userCheck, adminCheck, getAppointments).all(methodNotAllow);

router.route('/my').get(userCheck, mine).all(methodNotAllow);

export default router;