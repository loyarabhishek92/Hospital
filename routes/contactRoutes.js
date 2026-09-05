import express from 'express';
import { methodNotAllow } from '../utils/methodNotAllow.js';
import { createContact, deleteContact, getContacts } from '../controllers/contactController.js';
import mongoose from 'mongoose';
import { adminCheck, userCheck } from '../middlewares/userCheck.js';


const router = express.Router();

router.route('/').get(getContacts).post(createContact).all(methodNotAllow);

router.param('id', (req, res, next, id) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: 'Invalid ID'});
    }
    req.id = id;
    next();
});

router.route('/:id').delete(userCheck, adminCheck, deleteContact).all(methodNotAllow);

export default router;