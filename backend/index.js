import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(process.env.PORT || 5000, () => console.log("Server running on port", process.env.PORT || 5000));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("DB connected");
})
.catch(err => console.log("DB connection error:", err.message));