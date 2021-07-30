import * as express from "express";
import chirpsRouter from "./chirps";

const router = express.Router();

//app.use will not work - throws "cannot GET error"
router.use('/feed', chirpsRouter)

export default router