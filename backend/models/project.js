import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy: String,
  members: [String]
});

export default mongoose.model("Project", projectSchema);