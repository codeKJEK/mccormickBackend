const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, "Item Name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please the quantity"],
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
