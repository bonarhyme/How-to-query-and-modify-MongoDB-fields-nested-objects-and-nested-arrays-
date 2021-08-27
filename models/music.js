const mongoose = require("mongoose");

const songsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  sales: {
    type: String,
  },
});
const musicSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  social: {
    show: {
      type: Number,
    },
    tours: {
      type: Number,
    },
  },
  songs: [songsSchema],
});

const musicModel = mongoose.model("Music", musicSchema);

module.exports = musicModel;
