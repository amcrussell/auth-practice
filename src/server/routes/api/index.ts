import { Router } from "express";
import somethingRouter from "./something";

const router = Router();

router.use("/something", somethingRouter);

export default router;
