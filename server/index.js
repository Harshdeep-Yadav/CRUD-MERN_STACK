const express = require("express");
const mongoose = require("mongoose");
const app = express();
const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://harsh:harshy@eccomerceapi.h0iaweq.mongodb.net/test",
  {
    useNewurlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({
    foodName: "Apple",
    daysSinceIAte: 4,
  });
  try {
    await food.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3004, () => {
  console.log("Connecting to the Sever");
});
