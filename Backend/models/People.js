const mongoose = require("mongoose");

const peopleSchama = mongoose.Schema(

  {
    name: {
        type: true,
        required: true,
        trim: true,
    },
    email:{
        type: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    mobile:{
        type: true,
        required: true,
    },
    password:{
        type: true,
        required: true,
    },
    avatar:{
        type: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
  },
  {
    timetamps: true,
  }
);

const people = mongoose.model("People", peopleSchama);

module.exports = people; 