import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/db";

// connect to database.....
dbConnect();

// calling express app.......
const app = express();

//using cors....
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use(express.json());

// Routers..........
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

// -**********************************************-*/
// listening to the port
const port = 5000;
app.listen(port, () => {
  console.log("App served on http://localhost:" + port);
});
