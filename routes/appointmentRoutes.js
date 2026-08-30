import express from 'express';
import { userCheck } from '../middlewares/userCheck.js';
import { create, mine } from '../controllers/appointmentController.js';
import { methodNotAllow } from '../utils/methodNotAllow.js';

const router = express.Router();

router.route('/').post(userCheck, create).all(methodNotAllow);

router.route('/my').get(userCheck, mine).all(methodNotAllow);

export default router;