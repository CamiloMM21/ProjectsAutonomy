import { Router } from "express";
import * as userController from "../controllers/users.controllers";
// import { createUser } from "../controllers/users.controllers";

const router = Router();

router.post('/user/', userController.createUser); //createUser);

router.get('/user/', userController.listUser);

router.get('/user/ping', userController.pingUser);

router.get('/user/:id', userController.findUser);

router.put('/user/', userController.updateUser );

router.delete('/user/:id', userController.deleteUSER);

export default router;