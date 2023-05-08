const mongoose = require('mongoose');


const toolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Tools = mongoose.model('Tool', toolSchema);

module.exports = Tools;
