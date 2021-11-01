const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  },
);

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
