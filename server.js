const express = require("express");
const mongoose = require("mongoose");
const Member = require("./models/member.js");
const Item = require("./models/item.js");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("API Connection Established");
});

app.post("/members", async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(200).json(member);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/members", async (req, res, next) => {
  try {
    const members = await Member.find({});
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/members/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await Member.findById(id);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/members/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await Member.findByIdAndUpdate(id, req.body);
    if (!member) {
      return res
        .status(404)
        .json({ message: `we cannot find family member with id of ${id}` });
    }
    const updatedMember = await Member.findById(id);
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/menu", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/menu", async (req, res, next) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/menu/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, req.body);
    if (!item) {
      return res
        .status(404)
        .json({ message: `we cannot find Item with id of ${id}` });
    }
    const updatedItem = await Item.findById(id);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(PORT, () => {
      console.log(`API is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
