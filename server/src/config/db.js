import mongoose from "mongoose";


async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connect to MongoDb")
  } catch (err) {
    console.log("connect to db err", err)
  }
}

export default connectDb