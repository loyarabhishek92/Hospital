import express from "express";
import { createNews, deleteNews, getNews, getSingleNews, updateNews } from "../controllers/newsController.js";
import { adminCheck, userCheck } from "../middlewares/userCheck.js";
import { newsFileCheck, newsUpdateFileCheck } from "../middlewares/newsFileCheck.js";
import { methodNotAllow } from "../utils/methodNotAllow.js";
import mongoose from "mongoose";



const router = express.Router();


router.route('/').get(getNews).post(userCheck, adminCheck, newsFileCheck, createNews).all(methodNotAllow);

router.param('id', (req, res, next, id) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: 'Invalid ID'});
    }
    req.id = id;
    next();
});


router.route('/:id').get(getSingleNews).patch(userCheck, adminCheck, newsUpdateFileCheck, updateNews).delete(userCheck, adminCheck, deleteNews).all(methodNotAllow);

export default router;