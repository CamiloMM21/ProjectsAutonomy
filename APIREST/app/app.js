import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import enviroments from "./config/enviroments";
import AllRoutes from "./routes/users.routes";
import { loginRouter } from "./routes/login";
import passport from "passport"
import "./config/middlewares/google.js"
const app = express();

// settings
app.set("PORT", process.env.PORT || 1000);

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to my Api Web-App' })
})
app.use("/auth", passport.authenticate("auth-google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile"
    ],
    session: false,
}), loginRouter);
app.use('/api', AllRoutes);
// esto es para iniciar passport
app.use(passport.initialize());

export default app;