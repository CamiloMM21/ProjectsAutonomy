import { Router } from "express";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const loginRouter = Router();

loginRouter.get("/google", (req, res)=>{
    var data = {
        "nombre" : req.user.displayName,
        "id" : req.user.id,
        "email": req.user.emails[0].value
    };
    let token = jwt.sign(data, process.env.SECRET_KEY);

    // res.cookie("token" , token );

    res.send(token);
});


export { loginRouter };