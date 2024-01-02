const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://thrishankkalluru16:BLuHxonFqKr755Om@cluster0.rxhivru.mongodb.net/todo"
);

const todoSchema = new mongoose.Schema({
  Title: String,
  Notes: String,
  isCompleted: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
