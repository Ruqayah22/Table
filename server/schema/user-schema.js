import mongoose from "mongoose";
// const mongoose = require("mongoose");

import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
  name: String,
  birth: String,
  address: String,
  phone: String,
  salary: String,
  debts: String,
  date: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");

const user = mongoose.model("user", userSchema);

export default user;
