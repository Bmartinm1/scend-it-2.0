import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import cragsRouter from './api/v1/cragsRouter.js'
import climbsRouter from './api/v1/climbsRouter.js'


const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use('/api/v1/crags', cragsRouter)
rootRouter.use('/api/v1/climbs', climbsRouter)


export default rootRouter;
