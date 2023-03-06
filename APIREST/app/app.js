import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import enviroments from "./config/enviroments";
import AllRoutes from "./routes/users.routes";

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

app.use('/api', AllRoutes);

export default app;