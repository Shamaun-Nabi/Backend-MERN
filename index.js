import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectDatabase } from "./database/dbConnect.js";
import UserRouter from "./routes/userRouter.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//   mAIN aPI
app.use("/api/v1", UserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectDatabase();
});
