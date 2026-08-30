import express from "express";
import { createDoctor, deleteDoctor, getDoctor, getDoctors, updateDoctor } from "../controllers/doctorController.js";
import { adminCheck, userCheck } from "../middlewares/userCheck.js";
import { doctorFileCheck, doctorUpdateFileCheck } from "../middlewares/doctorFileCheck.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";
import mongoose from "mongoose";

const router = express.Router();


router.route('/').get(getDoctors).post(userCheck, adminCheck, doctorFileCheck, createDoctor).all(methodNotAllow);

router.param('id', (req, res, next, id) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: 'Invalid ID'});
    }
    req.id = id;
    next();
});


router.route('/:id').get(getDoctor).patch(userCheck, adminCheck, doctorUpdateFileCheck, updateDoctor).delete(userCheck, adminCheck, deleteDoctor).all(methodNotAllow);

export default router;