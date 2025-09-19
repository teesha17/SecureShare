import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from './routes/index.js';
import dbConnect from './config/Database.js';
import session from "express-session";

dotenv.config();
dbConnect();
//
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true // VERY IMPORTANT for cookies/sessions
}));


app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  
}));

import crypto from "crypto";

// Generate challenge
app.get("/get-challenge", (req, res) => {
  // Use Node.js webcrypto
  const array = new Uint8Array(32);
  crypto.webcrypto.getRandomValues(array); // works in ES modules
  const challenge = Buffer.from(array).toString("hex");

  req.session.challenge = challenge;
  res.json({ challenge });
});



app.use("/health-check", (req, res) => {
  res.status(200).json({ message: `Healthy Server - Worker ${process.pid}` });
});

routes(app); 

const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});