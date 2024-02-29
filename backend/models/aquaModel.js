const mongoose = require("mongoose");

const aquaSchema = mongoose.Schema(
  {
    Temperature: {
      type: Number,
      required: true,
    },
    PH: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Data", aquaSchema);
