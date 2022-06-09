import mongoose from "mongoose";

// const Connection = async(username, password);
const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.az3xj.mongodb.net:27017,cluster0-shard-00-01.az3xj.mongodb.net:27017,cluster0-shard-00-02.az3xj.mongodb.net:27017/CURD-TABLE?ssl=true&replicaSet=atlas-12pjpc-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); // connection line
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
