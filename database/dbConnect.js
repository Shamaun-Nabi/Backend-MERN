import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://devshamaun:EQy6YRITCTF4DI1z@nabicluster.vrytiq7.mongodb.net/mernweb`
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};
