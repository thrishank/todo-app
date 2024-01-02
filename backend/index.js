const express = require("express");
const cors = require("cors");
const { todo } = require("./db");
const { todoschema, numberschema } = require("./validate");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  const response = await todo.find({});
  res.send(response);
});

app.post("/todos", async (req, res) => {
  const data = req.body;
  const parsedata = todoschema.safeParse(data);
  if (!parsedata.success) {
    res.status(403).send("Check the input");
    return;
  }
  await todo.create({
    Title: req.body.title,
    Notes: req.body.notes,
    isCompleted: false,
  });
  res.send("Todo created Successfully");
});

app.put("/completed", async (req, res) => {
  const id = req.query.id;
  const parsedata = numberschema.safeParse(id);
  if (!parsedata.success) {
    res.status(403).send("Check the input");
    return;
  }
  await todo.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        isCompleted: true,
      },
    }
  );
  res.status(200).send("Todo updated succesfully");
});

app.listen(3000);
