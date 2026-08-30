import express from "express";
import { createService, deleteService, getService, getServices, updateService } from "../controllers/serviceController.js";
import { adminCheck, userCheck } from "../middlewares/userCheck.js";
import { serviceFileCheck, serviceUpdateFileCheck } from "../middlewares/serviceFileCheck.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";
import mongoose from "mongoose";


const router = express.Router();


router.route('/').get(getServices).post(userCheck, adminCheck, serviceFileCheck, createService).all(methodNotAllow);

router.param('id', (req, res, next, id) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: 'Invalid ID'});
    }
    req.id = id;
    next();
});


router.route('/:id').get(getService).patch(userCheck, adminCheck, serviceUpdateFileCheck, updateService).delete(userCheck, adminCheck, deleteService).all(methodNotAllow);

export default router;