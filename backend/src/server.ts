import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";
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
app.use("/api/orders", orderRouter);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// -**********************************************-*/
// listening to the port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App served on http://localhost:" + port);
});
