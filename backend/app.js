import express,{json} from "express";
import { config } from "dotenv";
import cors from 'cors'
import cookieParser from "cookie-parser";
export const app = express();


config({ path: "./data/config.env" });
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
console.log('Allowed origin:', process.env.FRONTEND_URL);

app.get("/", (req, res) => {
    res.send("welcome");
  });