import express from 'express';
import { methodNotAllow } from '../utils/methodNotAllow.js';
import { createContact, getContacts } from '../controllers/contactController.js';
import { adminCheck, userCheck } from '../middlewares/userCheck.js';

const router = express.Router();

router.route('/').post(createContact).get(userCheck, adminCheck, getContacts).all(methodNotAllow);

export default router;