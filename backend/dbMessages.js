import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  receieved: Boolean,
});

export default mongoose.model("messagecontents", messageSchema);
